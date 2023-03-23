import { createSlice } from '@reduxjs/toolkit'
import { io, Socket } from 'socket.io-client'

const url = 'http://192.168.1.164:3000'

export class SocketClass {
  socket: Socket
  constructor() {
    this.socket = this.createNewSocket()
  }
  createNewSocket() {
    return io(url, {
      transports: ['websocket'],
      reconnection: false,
      autoConnect: false
      // reconnectionAttempts: 100,
      // reconnectionDelay: 5000,
      // reconnectionDelayMax: 10 * 1000,
      // autoConnect: true,
      // rejectUnauthorized: true
    })
  }
  close(createNew: boolean) {
    this.socket.close()
    console.log('socket closed', createNew)
    if (createNew) {
      this.socket = this.createNewSocket()
    }
  }
}

export const socketInstance = new SocketClass()

const initialState = {
  locationData: [{ x: 0, y: 0, value: 0 }],
  socketConnected: false
}
const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setLocationData: (state, action) => {
      state.locationData.push(action.payload)
    },
    setSocketConnected: (state, action) => {
      state.socketConnected = action.payload
    }
  }
})

export const { setLocationData, setSocketConnected } = socketSlice.actions

export default socketSlice.reducer
