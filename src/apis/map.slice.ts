import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from 'utils/http'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface MapState {
  url: string
  mapLoading: boolean
  mapId: string | undefined
}
const initialState: MapState = {
  url: '',
  mapLoading: false,
  mapId: undefined
}
// add to headers Content-Type: multipart/form-data
export const uploadMap = createAsyncThunk('map/uploadMap', async (body: FormData, thunkAPI) => {
  try {
    const response = await http.post('maps/upload', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('response', response)
    return response.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
})
// get map url
export const getMap = createAsyncThunk('map/getMap', async (_, thunkAPI) => {
  try {
    const response = await http.get('maps/search')
    return response.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
})

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadMap.fulfilled, (state, action) => {
        state.url = action.payload.data.url
      })
      .addCase(getMap.fulfilled, (state, action) => {
        state.url = action.payload.data.url
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.mapLoading = true
          state.mapId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.mapLoading && state.mapId === action.meta.requestId) {
            state.mapLoading = false
            state.mapId = undefined
          }
        }
      )
  }
})
export default mapSlice.reducer
