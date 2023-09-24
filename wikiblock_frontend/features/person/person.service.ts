import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import { stringify } from 'query-string';
import { Pagination } from 'types/common';

import { Person, personParams } from './person.type';

export const PERSON_API_REDUCER_KEY = 'personApi';

export const personApi = createApi({
  reducerPath: PERSON_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Person'],
  endpoints: (builder) => ({
    getAllPersons: builder.mutation<Pagination<Person>, personParams>({
      query: (query) => ({
        url: `/persons/?${stringify(query)}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetAllPersonsMutation } = personApi;
