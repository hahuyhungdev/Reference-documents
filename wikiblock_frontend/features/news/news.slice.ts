import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TableOfContent = {
  id: string;
  level: number;
  content: string;
};

export interface NewsDetailState {
  tableOfContent: {
    items: Array<TableOfContent>;
    active: string;
  };
}

const initialState: NewsDetailState = {
  tableOfContent: {
    items: [],
    active: '',
  },
};

const slice = createSlice({
  name: 'newsDetail',
  initialState,
  reducers: {
    reset: () => initialState,
    addNewsItemToTableOfContent: (state, action: PayloadAction<TableOfContent>) => {
      state.tableOfContent.items.push(action.payload);
    },
    setActive: (state, action: PayloadAction<string>) => {
      state.tableOfContent.active = action.payload;
    },
  },
});

const reducer = slice.reducer;

export const { reset, addNewsItemToTableOfContent, setActive } = slice.actions;

export default reducer;
