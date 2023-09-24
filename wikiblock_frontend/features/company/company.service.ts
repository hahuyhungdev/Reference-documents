import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { stringify } from 'query-string';
import { Pagination } from 'types/common';

import { Company, companyParams } from './company.type';

export const COMPANY_API_REDUCER_KEY = 'companyApi';

export const companyApi = createApi({
  reducerPath: COMPANY_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Company'],
  endpoints: (builder) => ({
    getAllCompanies: builder.mutation<Pagination<Company>, companyParams>({
      query: (query) => ({
        url: `/companies/?${stringify(query)}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetAllCompaniesMutation } = companyApi;
