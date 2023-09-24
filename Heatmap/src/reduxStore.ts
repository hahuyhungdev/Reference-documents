import { configureStore } from '@reduxjs/toolkit'
import mapReducer from 'apis/map.slice'
import typeReducer from 'apis/types.slice'
import heatmapReducer from 'pages/dashboard/heatmap.slice'
import socketReducer from 'pages/dashboard/socket.slice'
import stateSwitchReducer from 'pages/dashboard/stateSwitch.slice'
import devicesReducer from 'pages/devices/devices.slice'
import serialReducer from 'pages/home/serial.slice'
import tagsReducer from 'pages/tags/tags.slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    heatmap: heatmapReducer,
    devices: devicesReducer,
    tags: tagsReducer,
    iotSocket: socketReducer,
    stateSwitch: stateSwitchReducer,
    serial: serialReducer,
    type: typeReducer,
    map: mapReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
// Lấy RootState và AppDispatch từ store của chúng ta.
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
