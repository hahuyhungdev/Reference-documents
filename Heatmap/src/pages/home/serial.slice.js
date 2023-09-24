import { createSlice } from '@reduxjs/toolkit'
const serialSlice = createSlice({
  name: 'serial',
  initialState: {
    serialPort: null,
    id: null,
    open: false,
    messages: [],
    _reader: undefined,
    vendor: undefined,
    product: undefined,
    physicallyConnected: false
  },
  reducers: {
    setPort: (state, action) => {
      state.serialPort = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    setOpen: (state, action) => {
      console.log('you clicked the button set open')
      state.open = action.payload
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    setReader: (state, action) => {
      state._reader = action.payload
    },
    setVendor: (state, action) => {
      state.vendor = action.payload
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    setPhysicallyConnected: (state, action) => {
      state.physicallyConnected = action.payload
    }
  }
})
export const { setPhysicallyConnected, setProduct, setPort, setId, setOpen, addMessage, setReader, setVendor } =
  serialSlice.actions
export default serialSlice.reducer
