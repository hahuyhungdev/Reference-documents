import { RootState } from "@config/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

import { ExampleState } from "./example.slice";

const selector = (state: RootState): ExampleState => state.companyReducer;

export const userSelector = createSelector(selector, ({ user }) => user);
