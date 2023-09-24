import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export type FundState = {
  dataFund: any;
  isShowChart: boolean;
};

const initialState: FundState = {
  dataFund: {
    launched:"0",
  },
  isShowChart: false,
};

const slice = createSlice({
  name: "fund",
  initialState,
  reducers: {
    reset: () => initialState,
    setisShowChart: (state, action: PayloadAction<boolean>) => {
      state.isShowChart = action.payload;
    },
  },
});

const reducer = slice.reducer;

export default reducer;

export const { setisShowChart, reset } = slice.actions;
