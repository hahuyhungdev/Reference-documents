import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { stringify } from 'query-string';
import { Pagination } from 'types/common';

import { categoriesParams, Category } from './categories.type';

export const CATEGORY_API_REDUCER_KEY = 'categoryApi';

export const categoryApi = createApi({
  reducerPath: CATEGORY_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getAllCategories: builder.mutation<Pagination<Category>, categoriesParams>({
      query: (query) => ({
        url: `/categories/?${stringify(query)}`,
        method: 'GET',
      }),
    }),
    getCategoriesByName: builder.mutation<Pagination<Category>, categoriesParams>({
      query: (name) => ({
        url: `/categories/${name}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetAllCategoriesMutation, useGetCategoriesByNameMutation } = categoryApi;
