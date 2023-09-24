import { BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';

export const OVERVIEW_API_REDUCER_KEY = 'overviewApi';

export const overviewApi = createApi({
  reducerPath: OVERVIEW_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Overview'],
  endpoints: (builder) => ({
    /**
     * Sign In
     */

    createAddress: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/private/users/${id}/addresses`,
        body: payload,
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateAddressMutation } = overviewApi;
