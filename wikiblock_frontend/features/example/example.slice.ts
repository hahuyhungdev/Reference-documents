import storage from "@config/persistStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { UserResponse } from "./example.type";

export interface ExampleState {
  user: UserResponse | null;
}

const initialState: ExampleState = {
  user: null,
};

const slice = createSlice({
  name: "example",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
  },
});

const reducer = persistReducer(
  {
    key: "1fox:example",
    storage,
    whitelist: ["user"],
  },
  slice.reducer
);

export const { setUser, reset } = slice.actions;

export default reducer;
