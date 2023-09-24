import { createSlice } from '@reduxjs/toolkit'

import { stateSwitch } from '../../utils/manageSwitch'

interface StateSwitchState {
  switchGridView: boolean
  switchAnchorView: boolean
  switchHistorical: boolean
}
const { switchGridView, switchAnchorView, switchHistorical } = stateSwitch

// handle set switches from local storage
const setToLocalStorage = (state: StateSwitchState) => {
  localStorage.setItem('switches', JSON.stringify(state))
}

const initialState: StateSwitchState = {
  switchGridView: Boolean(switchGridView),
  switchAnchorView: Boolean(switchAnchorView),
  switchHistorical: Boolean(switchHistorical)
}
const stateSwitchSlice = createSlice({
  name: 'stateSwitch',
  initialState,
  reducers: {
    setSwitchGridView(state, action) {
      state.switchGridView = action.payload
      setToLocalStorage(state)
    },
    setSwitchAnchorView(state, action) {
      state.switchAnchorView = action.payload
      setToLocalStorage(state)
    },
    setSwitchHistorical(state, action) {
      console.log('setSwitchHistorical', action.payload)
      state.switchHistorical = action.payload
      setToLocalStorage(state)
    }
  }
})
export const { setSwitchGridView, setSwitchAnchorView, setSwitchHistorical } = stateSwitchSlice.actions
export default stateSwitchSlice.reducer
