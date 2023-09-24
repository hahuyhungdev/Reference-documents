import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CommonState = {
  isWithSidebar: boolean;
  isShowChart: boolean;
};

const initialState: CommonState = {
  isWithSidebar: true,
  isShowChart: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    setIsWidthSidebar: (state, action: PayloadAction<boolean>) => {
      state.isWithSidebar = action.payload;
    },
    setisShowChart: (state, action: PayloadAction<boolean>) => {
      state.isShowChart = action.payload;
    },
  },
});

const reducer = slice.reducer;

export default reducer;

export const { setIsWidthSidebar, setisShowChart, reset } = slice.actions;
