// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreateUpdateDeviceType, DeviceType } from 'types/common.type'
import { SuccessResponse } from 'types/utils.type'
import http from 'utils/http'

interface DevicesState {
  devicesList: DeviceType[]
  devicesListSearch: DeviceType[]
  devicesListLoading: boolean
  currentDeviceId: string | undefined
  isDuplicate: boolean
}

const initialState: DevicesState = {
  devicesList: [],
  devicesListSearch: [],
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

    return response.data
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
    return response.data
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
    return response.data
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
      return response.data
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
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

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

// function export to excel
export const exportToExcel = createAsyncThunk(
  'devices/exportToExcel',
  async (
    body: {
      deviceName: string
    },
    thunkAPI
  ) => {
    try {
      const response = await http.post<SuccessResponse<{}>>('/devices/export-excel-file', body, {
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
        state.devicesList = action.payload.data
      })
      .addCase(getDeviceById.fulfilled, (state, action) => {
        const deviceIndex = state.devicesList.findIndex((device) => device.id === action.payload.data.id)
        if (deviceIndex !== -1) {
          state.devicesList[deviceIndex] = action.payload.data
        }
      })
      .addCase(addDevice.fulfilled, (state, action) => {
        state.devicesList.push(action.payload.data)
      })
      .addCase(updateDeviceById.fulfilled, (state, action) => {
        const deviceIndex = state.devicesList.findIndex((device) => device.id === action.payload.data.id)
        if (deviceIndex !== -1) {
          state.devicesList[deviceIndex] = action.payload.data
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
          return !deviceIds.includes(device.id as any)
        })
      })
      .addCase(searchDeviceByName.fulfilled, (state, action) => {
        state.devicesListSearch = action.payload.data
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
