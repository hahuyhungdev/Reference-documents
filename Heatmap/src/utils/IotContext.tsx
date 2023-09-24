import { createContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const timeNow = () => new Date().toLocaleString('vn-VI')

interface IotSocketContextProps {
  socket: Socket | null
  locationData: any[] | null
}
const initialSocketContext: IotSocketContextProps = {
  socket: null,
  locationData: null
}

export const IotSocketContext = createContext<IotSocketContextProps>({ socket: null, locationData: null })

const IotSocketContextProvider = ({
  children,
  defaultValue = initialSocketContext
}: {
  children: React.ReactNode
  defaultValue?: IotSocketContextProps
}) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [locationData, setLocationData] = useState<null>(null)
  useEffect(() => {
    const url = 'http://192.168.1.164:4000/api/v1/'
    const newSocket = io(url, {
      transports: ['websocket']
    })
    newSocket.on('connect', () => {
      console.log('socket-connected', timeNow())
      newSocket.emit('connect_mqtt')
    })
    newSocket.on('disconnect', (reason) => {
      console.log('socket-disconnect', timeNow())
      console.log('reason disconnect', reason)
    })
    newSocket.on('MQTT_LOCATION_RESPONSE', (data) => {
      console.log('MQTT_LOCATION_RESPONSE', data)
      setLocationData(data)
    })
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
    // newSocket.on('error', (err) => {
    //   console.log('socket-error', err, timeNow())
    // })
    // newSocket.on('reconnect', (data) => {
    //   console.log('socket-reconnect', data)
    // })
    // newSocket.on('reconnect_attempt', () => {
    //   console.log('socket-reconnect_attempt')
    // })
    // newSocket.on('reconnecting', () => {
    //   console.log('socket-reconnecting')
    // })
    // newSocket.on('reconnect_failed', (error) => {
    //   console.log('socket-reconnect-failed', error)
    // })
    // newSocket.on('connect_error', async (error) => {
    //   console.log('socket-connect_error', error && error.data)
    // })
    // newSocket.on('access_denied', (res) => {
    //   console.log(res)
    // })
  }, [])
  return <IotSocketContext.Provider value={{ socket, locationData }}>{children}</IotSocketContext.Provider>
}

export default IotSocketContextProvider
