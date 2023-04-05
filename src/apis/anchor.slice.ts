import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IAnchor, IAnchorConfig, UpdateIAnchor } from 'types/anchor.type'
import { SuccessResponse } from 'types/utils.type'
import http from 'utils/http'

interface AnchorsState {
  anchorsList: IAnchor[]
  anchorsListLoading: boolean
  currentAnchorId: string | undefined
}

const initialState: AnchorsState = {
  anchorsList: [],
  anchorsListLoading: false,
  currentAnchorId: undefined
}
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const getAnchorsList = createAsyncThunk('IAnchor/getAnchorsList', async (_, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<IAnchor[]>>('/anchors', {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to get anchor by id
export const getAnchorById = createAsyncThunk('anchors/getAnchorById', async (anchorId: string, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<IAnchor>>(`/anchors/${anchorId}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to add new anchor
export const addAnchor = createAsyncThunk('anchors/addAnchor', async (anchor: UpdateIAnchor, thunkAPI) => {
  try {
    const response = await http.post<SuccessResponse<IAnchor>>('/anchors', anchor, {
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

// func to update anchor id
export const updateAnchorById = createAsyncThunk(
  'anchors/updateAnchorById',
  async (
    {
      anchorId,
      body
    }: {
      anchorId: number
      body: UpdateIAnchor
    },
    thunkAPI
  ) => {
    try {
      const response = await http.put<SuccessResponse<IAnchor>>(`/anchors/${anchorId}`, body, {
        signal: thunkAPI.signal
      })
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// func to delete anchor by id as id
export const deleteAnchorById = createAsyncThunk('anchors/deleteAnchorById', async (anchorId: number, thunkAPI) => {
  try {
    const response = await http.delete<SuccessResponse<{}>>(`/anchors/${anchorId}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error)
  }
})

// function to delete many anchors. body passed to server is array of id like {anchorIds: [1,2,3]}
export const deleteManyAnchors = createAsyncThunk(
  'anchors/deleteManyAnchors',
  async (anchorIds: number[], thunkAPI) => {
    try {
      const response = await http.post<SuccessResponse<IAnchor[]>>(
        '/anchors/delete-many',
        { anchorIds },
        {
          signal: thunkAPI.signal
        }
      )
      // access token
      // refresh token intead access token

      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// function searchDeviceByName(name: string)
export const searchAnchorByName = createAsyncThunk('anchors/searchAnchorByName', async (name: string, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<IAnchor[]>>(`/anchors/search?name=${name}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    throw error
  }
})
// pagination
export const getAnchorsListPagination = createAsyncThunk(
  'anchors/getAnchorsListPagination',
  async (
    {
      page,
      limit
    }: {
      page: number
      limit: number
    },
    thunkAPI
  ) => {
    try {
      const response = await http.get<SuccessResponse<IAnchor[]>>(`/anchors?page=${page}&limit=${limit}`, {
        signal: thunkAPI.signal
      })
      return response.data
    } catch (error: any) {
      throw error
    }
  }
)

const anchorsSlice = createSlice({
  name: 'anchors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnchorsList.fulfilled, (state, action) => {
        state.anchorsList = action.payload.data
      })
      .addCase(getAnchorById.fulfilled, (state, action) => {
        const anchorIndex = state.anchorsList.findIndex((anchor) => anchor.id === action.payload.data.id)
        if (anchorIndex !== -1) {
          state.anchorsList[anchorIndex] = action.payload.data
        }
      })
      .addCase(addAnchor.fulfilled, (state, action) => {
        state.anchorsList.push(action.payload.data)
      })
      .addCase(updateAnchorById.fulfilled, (state, action) => {
        const idAnchor = action.meta.arg.anchorId
        const anchorIndex = state.anchorsList.findIndex((anchor) => anchor.id === idAnchor)
        if (anchorIndex !== -1) {
          state.anchorsList[anchorIndex] = action.payload.data
        }
      })
      .addCase(deleteAnchorById.fulfilled, (state, action) => {
        const idAnchor = action.meta.arg
        const anchorIndex = state.anchorsList.findIndex((anchor) => anchor.id === idAnchor)
        if (anchorIndex !== -1) {
          state.anchorsList.splice(anchorIndex, 1)
        }
      })
      .addMatcher<PendingAction>(
        (action) => action.anchor.endsWith('/pending'),
        (state, action) => {
          state.anchorsListLoading = true
          state.currentAnchorId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.anchor.endsWith('/rejected') || action.anchor.endsWith('/fulfilled'),
        (state, action) => {
          if (state.anchorsListLoading && state.currentAnchorId === action.meta.requestId) {
            state.anchorsListLoading = false
            state.currentAnchorId = undefined
          }
        }
      )
  }
})
export default anchorsSlice.reducer
