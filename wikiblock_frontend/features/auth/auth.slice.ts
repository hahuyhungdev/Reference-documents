import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserResponse } from "./auth.type";

export type AuthState = {
  user: UserResponse | null;
};

const initialState: AuthState = {
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
    setFollowings: (state, action: PayloadAction<string[]>) => {
      state.user!.followings = action.payload;
    },
  },
});

const reducer = slice.reducer;

export default reducer;

export const { setUser, reset, setFollowings } = slice.actions;
