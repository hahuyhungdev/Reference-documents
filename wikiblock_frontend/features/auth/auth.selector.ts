import { RootState } from "@config/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

import { AuthState } from "./auth.slice";

const selector = (state: RootState): AuthState => state.authReducer;

export const userSelector = createSelector(selector, ({ user }) => user);
