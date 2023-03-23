import { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const timeNow = () => new Date().toLocaleString('vn-VI')

export const IotSocketContext = createContext(null)

const IotSocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [locationData, setLocationData] = useState([{ x: 0, y: 0, value: 0 }])

  useEffect(() => {
    // const url = 'http://192.168.1.164:3000'
    // const newSocket = io(url, {
    //   transports: ['websocket']
    // })
    // newSocket.on('connect', () => {
    //   newSocket.status = 'connected'
    //   console.log('socket-connected', timeNow())
    //   newSocket.emit('connect_mqtt', { id: 'hungban' })
    // })
    // newSocket.on('disconnect', (reason) => {
    //   newSocket.status = 'disconnected'
    //   console.log('socket-disconnect', timeNow())
    //   console.log('reason disconnect', reason)
    // })
    // newSocket.on('MQTT_LOCATION_RESPONSE', (data) => {
    //   console.log('MQTT_LOCATION_RESPONSE', data)
    //   setLocationData((preData) => [...preData, data])
    // })
    // setSocket(newSocket)
    // return () => {
    //   newSocket.close()
    // }
    // newSocket.on('error', (err) => {
    //   newSocket.status = 'failed'
    //   console.log('socket-error', err, timeNow())
    // })
    // newSocket.on('reconnect', (data) => {
    //   newSocket.status = 'connected'
    //   console.log('socket-reconnect', data)
    // })
    // newSocket.on('reconnect_attempt', () => {
    //   console.log('socket-reconnect_attempt')
    // })
    // newSocket.on('reconnecting', () => {
    //   newSocket.status = 'reconnecting'
    //   console.log('socket-reconnecting')
    // })
    // newSocket.on('reconnect_failed', (error) => {
    //   newSocket.status = 'failed'
    //   console.log('socket-reconnect-failed', error)
    // })
    // newSocket.on('connect_error', async (error) => {
    //   console.log('socket-connect_error', error && error.data)
    // })
    // newSocket.on('access_denied', (res) => {
    //   console.log(res)
    // })
  }, [])

  return (
    <IotSocketContext.Provider
      value={{
        socket,
        locationData
      }}
    >
      {children}
    </IotSocketContext.Provider>
  )
}

export default IotSocketContextProvider
