import { RootState } from '@config/reduxStore';
import { createSelector } from '@reduxjs/toolkit';

import { FundState } from './fund.slice';

const selector = (state: RootState): FundState => state.fundReducer;

export const dataOfFund = createSelector(selector, ({ dataFund }) => dataFund);
export const isShowChartSelector = createSelector(selector, ({ isShowChart }) => isShowChart);
