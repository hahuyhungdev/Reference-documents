import { Input } from 'antd'
import { SelectOptions } from 'components/SelectOptions'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { keyCombo, shortcuts } from '../../utils/shortcuts'
import AsciiInput from './components/AsciiInput'
import ConnectModal from './components/ConnectModal'
import useConnectionStore from './useConnectionStore'

let scrolledToBottom = true
let wip = ''

export function Home() {
  const connection = useConnectionStore()
  const [displayedInput, setDisplayedInput] = useState('')
  const [valuePosition, setValuePosition] = useState({
    x: 0,
    y: 0,
    z: 0
  })

  const { search } = useLocation()
  const { Search } = Input

  // regex get vid and pid from url
  const regex = /\?vid=(\d+)&pid=(\d+)/
  const match = search.match(regex)
  const vid = match && match[1]
  const pid = match && match[2]
  // console.log('vid', vid, 'pid', pid)
  const { messages } = useSelector((state) => state.serial)

  // useEffect(() => {
  //   console.log('dataInput', displayedInput)
  // }, [displayedInput])
  useEffect(() => {
    if (vid && pid) {
      console.log('render vid && pid')
      connection.init(vid, pid).then(() => {
        const consoleDiv = document.querySelector('#console')
        const outputDiv = document.querySelector('#output')
        const resizeObserver = new ResizeObserver((entries) => {
          if (scrolledToBottom) {
            window.setTimeout(() => {
              consoleDiv.scrollTop = Number.MAX_SAFE_INTEGER
            }, 100)
          }
        })
        resizeObserver.observe(outputDiv)
      })
    }

    return () => {
      // cleanup
      // connection.close()
    }
  }, [connection, vid, pid])

  const handleInputData = (e) => {
    setDisplayedInput(e.target.value)
  }
  function inputKeyup(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      return
    }
    wip = e.target.value
  }
  function handleKeyDown(e) {
    if (keyCombo(e) === shortcuts.TOGGLE_CONNECTION) {
      e.preventDefault()
      e.stopPropagation()
      if (!connection.open) connection.connect()
      else connection.close()
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  function consoleScroll(e) {
    const scrollPoint = e.target.scrollTop + e.target.clientHeight
    scrolledToBottom = scrollPoint + 10 >= e.target.scrollHeight
  }
  const history = []
  let historyIndex = 0

  let append = '\n'
  let sub = '\r'
  function inputKeydown(e) {
    // console.log(keyCombo(e), e)
    switch (keyCombo(e)) {
      case shortcuts.CLEAR:
        e.preventDefault()
        messages.length = 0
        return true // say that it has been handled
      case shortcuts.IGNORE_LF:
        document.execCommand('insertText', false, '␊')
        return true
      case shortcuts.SEND:
        // SUBMIT
        e.preventDefault()
        if (history[history.length - 1] !== e.target.value) {
          history.push(e.target.value)
        }
        historyIndex = history.length
        wip = ''
        const cmd = '' + e.target.value + '\r'
        console.log('send', cmd)
        // connection.write(decode(cmd))
        connection.write(cmd)

        // clear the input
        setInputValue(e.target, '')
        return true // say that it has been handled
      case shortcuts.UP:
        if (historyIndex !== 0) {
          historyIndex--
          setInputValue(e.target, history[historyIndex])
          return true
        }
        break
      case shortcuts.DOWN:
        historyIndex++
        if (historyIndex >= history.length) {
          setInputValue(e.target, wip)
          historyIndex = history.length
          return true
        }
        if (historyIndex < history.length) {
          setInputValue(e.target, history[historyIndex])
          return true
        }
        break
      default:
        break
    }
  }
  // handleKeyPress
  // function handleKeyPress() {
  //   // similar to keydown enter double send but to click
  //   console.log('rund handleKeyPress')
  //   sendCommand()
  //   setTimeout(sendCommand, 0)
  // }
  function sendCommand() {
    console.log('sendCommand')
    const cmd = '\r\r'
    connection.write(cmd)
  }
  //funtion handle factory
  function createCommandHandler(cmd, onFuntion = false) {
    return function () {
      console.log('cmd', cmd, 'onFuntion', onFuntion)
      const cmdString = `${cmd} ${sub}`
      connection.write(cmdString)
      if (onFuntion) {
        setTimeout(connection.write('\r\r'), 100)
      }
    }
  }
  //this help command(show all command)
  const sendHelp = createCommandHandler('help')
  //show System info
  const sendSi = createCommandHandler('si')
  // Set mode to AN
  const sendNma = createCommandHandler('nma', true)
  // Set mode to TN
  const sendNmt = createCommandHandler('nmt', true)
  //  Get pos
  const getPos = createCommandHandler('apg')
  // Reboot the system
  const reset = createCommandHandler('reset', true)
  // Factory reset
  const factory_reset = createCommandHandler('frst', true)

  function setInputValue(target, value) {
    target.selectionStart = 0
    target.selectionEnd = target.value.length
    document.execCommand('insertText', false, value)
  }
  const onSearchNetworkID = (value) => {
    console.log('networkID', value)
    const cmd1 = `nis ${value.slice(0, 2)}${sub}`
    console.log('cmd1', cmd1)
    const cmd2 = `${value.slice(2)}${sub}`
    console.log('cmd2', cmd2)
    // Send first command
    connection.write(cmd1)

    // Delay and send second command
    setTimeout(() => {
      connection.write(cmd2)
    }, 100)
    sendCommand()
  }
  // use currying onchange Input
  const handleChange = (key) => (e) => {
    const { value } = e.target
    if (/^\d+$/.test(value) || value === '') {
      setValuePosition({ ...valuePosition, [key]: e.target.value })
    }
  }

  const handleSubmitPosition = (e) => {
    e.preventDefault()
    const { x, y, z } = valuePosition
    const cmd1 = `aps ${x}`
    const cmd2 = ` ${y} ${z}${sub}`
    // Send first command
    connection.write(cmd1)
    // Delay and send second command
    setTimeout(() => {
      connection.write(cmd2)
    }, 200)
  }
  // const handleSetMode AN and TN
  const handleSetMode = (mode) => {
    console.log('mode', mode)
    const createHandler = createCommandHandler(mode, true)
    createHandler()
  }

  const optionsMode = [
    { value: 'nma', label: 'AN' },
    { value: 'nmt', label: 'TN' }
  ]

  return (
    <div className='pl-12'>
      <ConnectModal />
      <div className='flex gap-2'>
        <button className='cursor-pointer rounded-sm bg-red-500 p-1' onClick={sendCommand}>
          handleKeyPress
        </button>
        <button className='cursor-pointer rounded-sm bg-red-500 p-1' onClick={sendSi}>
          system infomation
        </button>
        <button className='cursor-pointer rounded-sm bg-red-500 p-1' onClick={sendHelp}>
          help
        </button>
        <button className='cursor-pointer rounded-sm bg-red-500 p-1' onClick={sendNma}>
          Set mode to AN
        </button>
        <button className='cursor-pointer rounded-sm bg-red-500 p-1' onClick={sendNmt}>
          Set mode to TN
        </button>
        <button className='cursor-pointer rounded-sm bg-red-500 p-1' onClick={getPos}>
          get pos
        </button>
        <button className='cursor-pointer rounded-sm bg-yellow-300 p-1' onClick={reset}>
          reset
        </button>
        <button className='cursor-pointer rounded-sm bg-red-300 p-1' onClick={factory_reset}>
          Factory reset
        </button>
      </div>
      <form onSubmit={handleSubmitPosition}>
        <input
          className='w-11 border-none p-1'
          type='text'
          name='x'
          placeholder='input X'
          onChange={handleChange('x')}
          value={valuePosition.x}
        />
        <input
          className='w-11 border-none p-1'
          name='y'
          type='text'
          placeholder='input Y'
          onChange={handleChange('y')}
          value={valuePosition.y}
        />
        <input
          className='w-11 border-none p-1'
          name='z'
          type='text'
          placeholder='input Z'
          onChange={handleChange('z')}
          value={valuePosition.z}
        />
        <button type='submit' className='bg-gray-500 p-1'>
          <span>Set Position</span>
        </button>
      </form>
      <SelectOptions onChange={handleSetMode} options={optionsMode} placeholder='select mode' />
      <Search placeholder='please input network ID' onSearch={onSearchNetworkID} />
      <main id='console' onScroll={consoleScroll} className='h-[300px] max-w-full overflow-y-scroll pl-1'>
        <section id='output'>
          {messages.map((message) => (
            <pre key={message + nanoid()}>{message}</pre>
          ))}
        </section>
      </main>
      <footer className='fixed bottom-0 mt-5 w-full '>
        <AsciiInput
          id='input'
          keyup={inputKeyup}
          placeholder={'Enter data. Press RETURN to send!'}
          value={displayedInput}
          onChange={handleInputData}
          interceptor={inputKeydown}
        />
      </footer>
    </div>
  )
}

export default Home
