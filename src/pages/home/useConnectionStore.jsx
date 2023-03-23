import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addMessage, setId, setOpen, setPort } from './serial.slice'
const hex = (i) => i && i.toString(16).padStart(4, 0).toLowerCase()

async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8')
  let response = await fetch(fileURL)
  let reader = response.body.getReader()
  let { value: chunk, done: readerDone } = await reader.read()
  chunk = chunk ? utf8Decoder.decode(chunk, { stream: true }) : ''

  let re = /\r\n|\n|\r/gm
  let startIndex = 0

  for (;;) {
    let result = re.exec(chunk)
    if (!result) {
      if (readerDone) {
        break
      }
      let remainder = chunk.substr(startIndex)
      ;({ value: chunk, done: readerDone } = await reader.read())
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk, { stream: true }) : '')
      startIndex = re.lastIndex = 0
      continue
    }
    yield chunk.substring(startIndex, result.index)
    startIndex = re.lastIndex
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex)
  }
}

const getUsbInfo = async (vid, pid) => {
  let info = { vid, pid }
  // eslint-disable-next-line no-undef
  if (vid instanceof SerialPort) {
    const i = vid.getInfo()
    vid = info.vid = hex(i.usbVendorId)
    pid = info.pid = hex(i.usbProductId)
  }
  console.log(`searching for ${vid}:${pid}`)
  for await (let line of makeTextFileLineIterator('/usb-ids.txt')) {
    if (line === '# List of known device classes, subclasses and protocols') {
      break
    }
    if (line.startsWith('#') || !line) continue //comment

    if (info.vendor) {
      const pidMatch = line.match(/^\t[0-9a-f]{4} {2}/)
      if (pidMatch) {
        if (pid === line.substr(1, 4)) {
          info.product = line.substr(7)

          return info
        }
      }
    }

    const vidMatch = line.match(/^[0-9a-f]{4} {2}/)
    if (vidMatch) {
      if (line.substr(0, 4) === vid) {
        info.vendor = line.substr(6)
      } else if (info.vendor) {
        return info // pid not found
      }
    }
  }
  console.log(`unable to find ${vid}:${pid}`)
  return info
}

const vid_pid = (port) => {
  const info = port.getInfo()
  return hex(info.usbVendorId) + ':' + hex(info.usbProductId)
}
const encoder = new TextEncoder()
const decoder = new TextDecoder()
function useConnectionStore() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { serialPort, id, open } = useSelector((state) => state.serial)
  const ConnectionStore = {
    id: undefined,
    vendor: undefined,
    product: undefined,
    port: undefined,
    physicallyConnected: false,
    open: false,
    _reader: undefined,
    options: {
      baudRate: 115200,
      bufferSize: 255,
      dataBits: 8,
      flowControl: 'none',
      parity: 'none',
      stopBits: 1
    },
    signals: {},
    messages: [],
    prepend: '',
    append: '\n',
    async selectPort() {
      try {
        if (!navigator.serial) return false
        const port = await navigator.serial.requestPort()
        const info = await getUsbInfo(port)
        // console.log('info', info, port.getInfo())
        // window.location.search = `?vid=${info.vid}&pid=${info.pid}`
        // console.log(info.vid, info.pid)
        navigate(`?vid=${info.vid}&pid=${info.pid}`)
        return true
      } catch (e) {}
    },
    async init(vid, pid) {
      const ports = await navigator.serial.getPorts()
      const id = vid + ':' + pid
      dispatch(setId(id))

      this.port = ports.find((port) => vid_pid(port) === id)
      dispatch(setPort(this.port))

      if (!this.port) {
        window.location.search = ``
        return
      }
      // navigate('/home')
      // window.location.reload()
      this.id = id
      const info = await getUsbInfo(this.port)
      this.vendor = info.vendor
      this.product = info.product
      this.physicallyConnected = true

      // notification for a USB device getting physically connected
      const onconnect = (e) => {
        console.log(id + 'device connected', e)
        this.port = e.target
        this.physicallyConnected = true
      }
      navigator.serial.addEventListener('connect', onconnect)

      // notification for a USB device getting physically disconnected
      const ondisconnect = (e) => {
        console.log(id + ' disconnect')
        this.physicallyConnected = false
        this.open = false
        setOpen(false)
      }
      navigator.serial.addEventListener('disconnect', ondisconnect)
      console.log(id + ' initialized')
    },
    // write arrow function to avoid binding
    async connect() {
      if (!serialPort) {
        console.log('no serial port')
        return
      }
      console.log(id + ': opening', this)
      try {
        await serialPort.open({
          baudRate: 115200,
          bufferSize: 255,
          dataBits: 8,
          flowControl: 'none',
          parity: 'none',
          stopBits: 1
        })
        console.log('readable', Boolean(serialPort.readable) === true)
        dispatch(setOpen(Boolean(serialPort.readable)))
        console.log(id + ': opened')
        // const { clearToSend, dataCarrierDetect, dataSetReady, ringIndicator} = await this.port.getSignals()
        // console.log({ clearToSend, dataCarrierDetect, dataSetReady, ringIndicator})
        this.monitor()
      } catch (e) {
        console.log(e)
        window.alert(e.message)
      }
    },
    async monitor() {
      console.log('monitor()')
      console.log('open', open, serialPort)
      while (Boolean(serialPort.readable) === true && serialPort?.readable) {
        // this.open = true
        dispatch(setOpen(true))
        // const reader = this.port.readable.getReader()
        const reader = serialPort.readable.getReader()
        this._reader = reader
        console.log('reader', reader)
        try {
          while (Boolean(serialPort.readable) === true) {
            console.log('reading...')
            const { value, done } = await reader.read()
            console.log(' reader.read() complete:', value, done)
            if (done) {
              // |reader| has been canceled.
              this.open = false
              break
            }
            const decoded = decoder.decode(value)
            console.log('read complete:', decoded)
            dispatch(addMessage(decoded))
            // this.messages.push(decoded)
          }
        } catch (error) {
          console.error('reading error', error)
        } finally {
          reader.releaseLock()
        }
      }
    },
    async write(data) {
      console.log('write', data)
      if (this.port?.writable) {
        const writer = this.port.writable.getWriter()
        const test = await writer.write(encoder.encode(data))
        console.log('write complete1', test)

        writer.releaseLock()
      }
    },
    async close() {
      if (this._reader) {
        await this._reader.cancel()
      }
      this.port.close()
      this.open = false
    }
  }
  return ConnectionStore
}
export default useConnectionStore
