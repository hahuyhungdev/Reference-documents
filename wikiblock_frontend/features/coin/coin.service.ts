import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import queryString from 'query-string';
import { Pagination, PAGINATION_PARAMS } from 'types/common';

import { Coin } from './coin.type';

export const COIN_API_REDUCER_KEY = 'coinApi';

export const coinApi = createApi({
  reducerPath: COIN_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Coin'],
  endpoints: (builder) => ({
    getAllCoin: builder.mutation<Pagination<Coin>, PAGINATION_PARAMS>({
      query: (params: PAGINATION_PARAMS) => ({
        url: `/coins?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllCoinMutation } = coinApi;
