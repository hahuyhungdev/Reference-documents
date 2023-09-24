import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { TagType, UpdateTagType } from 'types/common.type'
import { SuccessResponse } from 'types/utils.type'
import http from 'utils/http'

interface TagsState {
  tagList: TagType[]
  tagListUnused: TagType[]
  tagListSearch: TagType[]
  loading: boolean
  currentTagId: string | undefined
  isDuplicate: boolean
}
const initialState: TagsState = {
  tagList: [],
  tagListUnused: [],
  tagListSearch: [],
  loading: false,
  currentTagId: undefined,
  isDuplicate: false
}
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

// func to get tag list from server http get request
export const getTagList = createAsyncThunk('tags/getTagList', async (_, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<TagType[]>>('/tags', {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to get list tag unused
export const getTagListUnused = createAsyncThunk('tags/getTagListUnused', async (_, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<TagType[]>>('/tags/unused', {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// func to get tag by id
export const getTagById = createAsyncThunk('tags/getTagById', async (tagId: number, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<TagType>>(`/tags/${tagId}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// func to add new tag
export const addTag = createAsyncThunk('tags/addTag', async (tag: UpdateTagType, thunkAPI) => {
  try {
    const response = await http.post<SuccessResponse<TagType>>('/tags', tag, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error)
  }
})

// function check duplicate tag name . body passed to server is { propertype:"name", value: "name of tag"}
export const checkDuplicateTagName = createAsyncThunk(
  'tags/checkDuplicateTagName',
  async ({ propertype, value }: { propertype: string; value: string }, thunkAPI) => {
    try {
      const response = await http.post<
        SuccessResponse<{
          isDuplicate: boolean
        }>
      >(
        '/tags/check-duplicate',
        { propertype, value },
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

// func to update tag by id as id
export const updateTagById = createAsyncThunk(
  'tags/updateTagById',
  async (
    {
      tagId,
      body
    }: {
      tagId: number
      body: UpdateTagType
    },
    thunkAPI
  ) => {
    try {
      const response = await http.put<SuccessResponse<TagType>>(`/tags/${tagId}`, body, {
        signal: thunkAPI.signal
      })
      // console.log('responseUPDATE', response.data)
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// func to delete tag by id
export const deleteTagById = createAsyncThunk('tags/deleteTagById', async (tagId: number, thunkAPI) => {
  try {
    const response = await http.delete<SuccessResponse<TagType>>(`/tags/${tagId}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    throw error
  }
})

// function searchTagByName(name: string)
export const searchTagByName = createAsyncThunk('tags/searchTagByName', async (name: string, thunkAPI) => {
  try {
    const response = await http.get<SuccessResponse<TagType[]>>(`/tags/search?name=${name}`, {
      signal: thunkAPI.signal
    })
    console.log('response', response.data)
    return response.data
  } catch (error: any) {
    throw error
  }
})

// function to delete many tags. body passed to server is array of id like {tagIds: [1,2,3]}
export const deleteManyTags = createAsyncThunk('tags/deleteManyTags', async (tagIds: number[], thunkAPI) => {
  try {
    const response = await http.post<SuccessResponse<{}>>(
      '/tags/delete-many',
      { tagIds },
      {
        signal: thunkAPI.signal
      }
    )
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error)
  }
})

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTagList.fulfilled, (state, action) => {
        state.tagList = action.payload.data
      })
      .addCase(getTagListUnused.fulfilled, (state, action) => {
        state.tagListUnused = action.payload.data
      })
      .addCase(getTagById.fulfilled, (state, action) => {
        const getIndexTag = state.tagList.findIndex((tag) => tag.id === action.payload.data.id)
        if (getIndexTag !== -1) {
          state.tagList[getIndexTag] = action.payload.data
        }
      })
      .addCase(addTag.fulfilled, (state, action) => {
        state.tagList.push(action.payload.data)
      })
      .addCase(checkDuplicateTagName.fulfilled, (state, action) => {
        console.log('action checkDuplicateTagName', action.payload)
        state.isDuplicate = action.payload.data.isDuplicate
      })
      .addCase(updateTagById.fulfilled, (state, action) => {
        const getIndexTag = state.tagList.findIndex((tag) => tag.id === action.payload.data.id)
        if (getIndexTag !== -1) {
          state.tagList[getIndexTag] = action.payload.data
        }
      })
      .addCase(deleteTagById.fulfilled, (state, action) => {
        console.log('action.meta.arg', action.meta.arg)
        const idTag = action.meta.arg
        const getIndexTag = state.tagList.findIndex((tag) => tag.id === idTag)
        if (getIndexTag !== -1) {
          state.tagList.splice(getIndexTag, 1)
        }
      })
      .addCase(deleteManyTags.fulfilled, (state, action) => {
        const tagIds = action.meta.arg
        state.tagList = state.tagList.filter((tag) => {
          return !tagIds.includes(tag.id as any)
        })
      })
      .addCase(searchTagByName.fulfilled, (state, action) => {
        console.log('action.payload.data', action.payload.data)
        state.tagListSearch = action.payload.data
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          state.currentTagId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.currentTagId && state.currentTagId === action.meta.requestId) {
            state.loading = false
            state.currentTagId = undefined
          }
        }
      )
  }
})

export default tagsSlice.reducer
