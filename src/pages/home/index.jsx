import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
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
  const { search } = useLocation()

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
        console.log('da gui')
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
  function setInputValue(target, value) {
    target.selectionStart = 0
    target.selectionEnd = target.value.length
    document.execCommand('insertText', false, value)
  }
  return (
    <div className='pl-12'>
      <ConnectModal />
      <main id='console' onScroll={consoleScroll} className='h-[490px] max-w-full overflow-y-scroll pl-1'>
        <section id='output'>
          {messages.map((message) => (
            <pre key={message + nanoid()}>{message}</pre>
          ))}
        </section>
      </main>
      <footer className='fixed bottom-0 mt-5 w-full '>
        {/* <input type='text' className='outline-none' value={inputData} onChange={handleInputData} /> */}
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
