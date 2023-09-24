import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import queryString from 'query-string';
import { Pagination } from 'types/common';

import { NewQueryParams, NewQueryTopParams, News } from './new.type';

export const NEWS_API_REDUCER_KEY = 'newsApi';

export const newsApi = createApi({
  reducerPath: NEWS_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    /**
     * @description get all news
     * @param params NewQueryParams
     */
    getAllNews: builder.mutation<Pagination<News>, NewQueryParams>({
      query: (params) => ({
        url: `/news?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),

    /**
     * @description get top news
     * @param params NewQueryParams
     */
    getTopNews: builder.mutation<Pagination<News>, NewQueryTopParams>({
      query: (params) => ({
        url: `/news/top?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetAllNewsMutation, useGetTopNewsMutation } = newsApi;
