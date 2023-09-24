import { RootState } from "@config/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

import { NewsDetailState } from "./news.slice";

const selector = (state: RootState): NewsDetailState => state.newsDetailReducer;

export const activeSelector = createSelector(
  selector,
  ({ tableOfContent }) => tableOfContent.active
);

export const tableSelector = createSelector(
  selector,
  ({ tableOfContent }) => tableOfContent.items
);
