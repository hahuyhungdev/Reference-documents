import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { stringify } from 'query-string';
import { Pagination } from 'types/common';

import { Product, productParams } from './product.type';

export const PRODUCT_API_REDUCER_KEY = 'productApi';

export const productApi = createApi({
  reducerPath: PRODUCT_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getAllProducts: builder.mutation<Pagination<Product>, productParams>({
      query: (query) => ({
        url: `/products/?${stringify(query)}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetAllProductsMutation } = productApi;
