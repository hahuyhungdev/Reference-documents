import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import queryString from 'query-string';
import { Pagination } from 'types/common';

import { Fund, FundQueryParams } from './fund.type';

export const FUND_API_REDUCER_KEY = 'fundApi';

export const fundApi = createApi({
  reducerPath: FUND_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Fund'],
  endpoints: (builder) => ({
    /**
     * @description get fund by slug
     * @param {FundQueryParams} params
     */
    getFundBySlug: builder.mutation<Pagination<Fund>, FundQueryParams>({
      query: ({ slug, ...query }) => ({
        url: `/funds/${slug}?${queryString.stringify(query)}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetFundBySlugMutation } = fundApi;
