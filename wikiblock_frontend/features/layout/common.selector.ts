import { RootState } from "@config/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

import { CommonState } from "./common.slice";

const selector = (state: RootState): CommonState => state.commonReducer;

export const isWidthSidebarSelector = createSelector(
  selector,
  ({ isWithSidebar }) => isWithSidebar
);
export const isShowChartSelector = createSelector(
  selector,
  ({ isShowChart }) => isShowChart
);
