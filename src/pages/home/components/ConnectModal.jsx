import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import useConnectionStore from '../useConnectionStore'

export const ConnectModal = () => {
  const [checkId, setCheckId] = React.useState(false)
  const { id, open } = useSelector((state) => state.serial)

  let connection = useConnectionStore()

  useEffect(() => {
    // console.log('id', id)

    if (id) {
      setCheckId(true)
      // connection.connect()
    }
    return () => {
      // cleanup

      setCheckId(false)
    }
  }, [id])

  // if (!id) return 'No device selected'
  // if (!checkId) return 'No device selected'
  // return `Connected to ${connection.product} -${connection.vendor} - ${connection.id}  `
  useEffect(() => {
    console.log('checkId', checkId, 'open', open)
  }, [checkId, open])
  const handleSelectPort = () => {
    connection.selectPort()
  }
  const handleConnect = () => {
    connection.connect()
  }
  // handle close connect
  const handleClose = () => {
    console.log('close connect')
    setCheckId(false)
    connection.close()
  }

  return (
    <div className='my-2 flex flex-col items-center justify-center'>
      <h1>Serial Port Example</h1>
      {/* {!checkId || connection.physicallyConnected ? <h3>CONNECTED</h3> : <h3>UNPLUGGED</h3>} */}
      {open ? (
        <div className='h-18 w-full bg-amber-200 p-4'>
          <div className='text-base font-medium'>Please input your command</div>
          <button className='rounded-sm bg-red-300 p-2' onClick={handleClose}>
            close connect
          </button>
        </div>
      ) : (
        <>
          {checkId ? <h3>CONNECTED</h3> : <h3>UNPLUGGED</h3>}
          {!checkId ? (
            <button className='w-42 mt-5 h-8 rounded-sm bg-red-500 p-1' onClick={handleSelectPort}>
              Select Serial Port...
            </button>
          ) : (
            <div className='flex gap-4'>
              <button className='rounded-sm bg-green-500 p-2' onClick={handleConnect}>
                Connect
              </button>
              <button className='rounded-sm bg-red-300 p-2' onClick={handleClose}>
                close connect
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
export default ConnectModal
