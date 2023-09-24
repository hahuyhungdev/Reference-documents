import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IType, UpdateTagType } from 'types/common.type'
import { SuccessResponse } from 'types/utils.type'
import http from 'utils/http'

interface TypesState {
  typesList: IType[]
  typesListLoading: boolean
  currentTypeId: string | undefined
}

const initialState: TypesState = {
  typesList: [],
  typesListLoading: false,
  currentTypeId: undefined
}
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const getTypesList = createAsyncThunk('types/getTypesList', async (_, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<IType[]>>('/types', {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to get type by id
export const getTypeById = createAsyncThunk('types/getTypeById', async (typeId: string, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<IType>>(`/types/${typeId}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to add new type
export const addType = createAsyncThunk('types/addType', async (type: { name: string }, thunkAPI) => {
  try {
    const response = await http.post<SuccessResponse<IType>>('/types', type, {
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

// func to update type id
export const updateTypeById = createAsyncThunk(
  'types/updateTypeById',
  async (
    {
      typeId,
      body
    }: {
      typeId: number
      body: IType
    },
    thunkAPI
  ) => {
    try {
      const response = await http.put<SuccessResponse<IType>>(`/types/${typeId}`, body, {
        signal: thunkAPI.signal
      })
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// func to delete type by id as id
export const deleteTypeById = createAsyncThunk('types/deleteTypeById', async (typeId: number, thunkAPI) => {
  try {
    console.log(typeId)
    const response = await http.delete<SuccessResponse<IType>>(`/types/${typeId}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error)
  }
})

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTypesList.fulfilled, (state, action) => {
        state.typesList = action.payload.data
      })
      .addCase(getTypeById.fulfilled, (state, action) => {
        const typeIndex = state.typesList.findIndex((type) => type.id === action.payload.data.id)
        if (typeIndex !== -1) {
          state.typesList[typeIndex] = action.payload.data
        }
      })
      .addCase(addType.fulfilled, (state, action) => {
        state.typesList.push(action.payload.data)
      })
      .addCase(updateTypeById.fulfilled, (state, action) => {
        const idType = action.meta.arg.typeId
        const typeIndex = state.typesList.findIndex((type) => type.id === idType)
        if (typeIndex !== -1) {
          state.typesList[typeIndex] = action.payload.data
        }
      })
      .addCase(deleteTypeById.fulfilled, (state, action) => {
        const idType = action.meta.arg
        const typeIndex = state.typesList.findIndex((type) => type.id === idType)
        if (typeIndex !== -1) {
          state.typesList.splice(typeIndex, 1)
        }
      })

      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.typesListLoading = true
          state.currentTypeId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.typesListLoading && state.currentTypeId === action.meta.requestId) {
            state.typesListLoading = false
            state.currentTypeId = undefined
          }
        }
      )
  }
})
export default typesSlice.reducer
