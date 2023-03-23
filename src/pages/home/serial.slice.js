import { createSlice } from '@reduxjs/toolkit'
const serialSlice = createSlice({
  name: 'serial',
  initialState: {
    serialPort: null,
    id: null,
    open: false,
    messages: []
  },
  reducers: {
    setPort: (state, action) => {
      state.serialPort = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    setOpen: (state, action) => {
      state.open = action.payload
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    }
  }
})
export const { setPort, setId, setOpen, addMessage } = serialSlice.actions
export default serialSlice.reducer
