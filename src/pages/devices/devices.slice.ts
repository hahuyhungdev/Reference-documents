import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreateUpdateDeviceType, DeviceHistoryType, DeviceType, TagType } from 'types/common.type'
import { SuccessResponse } from 'types/utils.type'
import http from 'utils/http'

interface DevicesState {
  devicesList: DeviceType[]
  devicesListSearch: DeviceType[]
  deivcesListExport: any[]
  deviceHistory: DeviceHistoryType
  devicesListLoading: boolean
  currentDeviceId: string | undefined
  isDuplicate: boolean
}

const initialState: DevicesState = {
  devicesList: [],
  devicesListSearch: [],
  deivcesListExport: [],
  deviceHistory: { position: [], id_tag: '' },
  devicesListLoading: false,
  currentDeviceId: undefined,
  isDuplicate: false
}
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const getDevicesList = createAsyncThunk('devices/getDevicesList', async (_, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<DeviceType[]>>('/devices', {
      signal: thunkAPI.signal
    })
    console.log('response', response)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to get device by id
export const getDeviceById = createAsyncThunk('devices/getDeviceById', async (deviceId: string, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<DeviceType>>(`/devices/${deviceId}`, {
      signal: thunkAPI.signal
    })
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to add new device
export const addDevice = createAsyncThunk('devices/addDevice', async (device: CreateUpdateDeviceType, thunkAPI) => {
  try {
    const response = await http.post<SuccessResponse<DeviceType>>('/devices', device, {
      signal: thunkAPI.signal
    })
    return response
  } catch (error: any) {
    if (error.name === 'AxiosError' && error.response.status === 422) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
    throw error
  }
})

// func to update device by id as id
export const updateDeviceById = createAsyncThunk(
  'devices/updateDeviceById',
  async (
    {
      deviceId,
      body
    }: {
      deviceId: number
      body: CreateUpdateDeviceType
    },
    thunkAPI
  ) => {
    try {
      const response = await http.put<SuccessResponse<CreateUpdateDeviceType>>(`/devices/${deviceId}`, body, {
        signal: thunkAPI.signal
      })
      return response
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// func to delete device by id as id
export const deleteDeviceById = createAsyncThunk('devices/deleteDeviceById', async (deviceId: number, thunkAPI) => {
  try {
    const response = await http.delete<SuccessResponse<DeviceType>>(`/devices/${deviceId}`, {
      signal: thunkAPI.signal
    })
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// function to delete many devices. body passed to server is array of id like {tagIds: [1,2,3]}
export const deleteManyDevices = createAsyncThunk(
  'devices/deleteManyDevices',
  async (deviceIds: number[], thunkAPI) => {
    try {
      const response = await http.post<SuccessResponse<TagType[]>>(
        '/devices/delete-many',
        { deviceIds },
        {
          signal: thunkAPI.signal
        }
      )
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// function searchDeviceByName(name: string)
export const searchDeviceByName = createAsyncThunk('devices/searchDeviceByName', async (name: string, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<DeviceType[]>>(`/devices/search?name=${name}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    throw error
  }
})

// function export to excel
export const exportToExcel = createAsyncThunk(
  'devices/exportToExcel',
  async (
    body: {
      start: number
      end: number
      name: string
    },
    thunkAPI
  ) => {
    try {
      const response = await http.get<SuccessResponse<any>>(
        `/devices/export-file?start=${body.start}&end=${body.end}&name=${body.name}`,
        {
          signal: thunkAPI.signal
        }
      )
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const getDeviceHistoryById = createAsyncThunk(
  'devices/getDeviceHistoryById',
  async (
    {
      start,
      end,
      id_tag
    }: {
      start: number
      end: number
      id_tag: string | undefined
    },
    thunkAPI
  ) => {
    try {
      const response = await http.get<
        SuccessResponse<{
          position: {
            x: number
            y: number
            value: number
          }[]
          id_tag: string
        }>
      >(`/devices/history?start=${start}&end=${end}&id_tag=${id_tag}`, {
        signal: thunkAPI.signal
      })
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDevicesList.fulfilled, (state, action) => {
        state.devicesList = action.payload.data as any
      })
      // .addCase(getDeviceById.fulfilled, (state, action) => {
      //   const deviceIndex = state.devicesList.findIndex((device) => device.id === action.payload.data.id)
      //   if (deviceIndex !== -1) {
      //     state.devicesList[deviceIndex] = action.payload.data as any
      //   }
      // })
      .addCase(addDevice.fulfilled, (state, action) => {
        state.devicesList.push(action.payload.data as any)
      })
      .addCase(updateDeviceById.fulfilled, (state, action) => {
        const idDevice = action.meta.arg.deviceId
        const deviceIndex = state.devicesList.findIndex((device) => device.id === idDevice)
        if (deviceIndex !== -1) {
          state.devicesList[deviceIndex] = action.payload.data as any
        }
      })
      .addCase(deleteDeviceById.fulfilled, (state, action) => {
        const idDevice = action.meta.arg
        const deviceIndex = state.devicesList.findIndex((device) => device.id === idDevice)
        if (deviceIndex !== -1) {
          state.devicesList.splice(deviceIndex, 1)
        }
      })
      .addCase(deleteManyDevices.fulfilled, (state, action) => {
        const deviceIds = action.meta.arg
        state.devicesList = state.devicesList.filter((device) => {
          return !deviceIds.includes(device.id)
        })
      })
      .addCase(searchDeviceByName.fulfilled, (state, action) => {
        state.devicesListSearch = action.payload.data
      })
      .addCase(exportToExcel.fulfilled, (state, action) => {
        // console.log(action.payload.data)
        state.deivcesListExport = action.payload.data
      })
      .addCase(getDeviceHistoryById.fulfilled, (state, action) => {
        state.deviceHistory = action.payload.data
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.devicesListLoading = true
          state.currentDeviceId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.devicesListLoading && state.currentDeviceId === action.meta.requestId) {
            state.devicesListLoading = false
            state.currentDeviceId = undefined
          }
        }
      )
  }
})
export default devicesSlice.reducer
