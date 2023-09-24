import { API_BASE_URL } from '@config/env';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@utils/axiosBaseQuery';
import queryString from 'query-string';
import { Pagination } from 'types/common';

import { CATEGORIES_PARAMS, Category, Event, EventForm, EVENTS_PARAMS } from './events.type';

export const EVENT_API_REDUCER_KEY = 'eventApi';

export const eventApi = createApi({
  reducerPath: EVENT_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Event'],
  endpoints: (builder) => ({
    // get all events
    getAllEvents: builder.mutation<Pagination<Event>, EVENTS_PARAMS>({
      query: (params) => ({
        url: `/events?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),

    // get related events
    getRelatedEvents: builder.mutation<Pagination<Event>, EVENTS_PARAMS>({
      query: (params) => ({
        url: `/events/related?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),

    // get trending events
    getTrendingEvents: builder.mutation<Pagination<Event>, EVENTS_PARAMS>({
      query: (params) => ({
        url: `/events/trending?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),

    // get significant events
    getSignificantEvents: builder.mutation<Pagination<Event>, EVENTS_PARAMS>({
      query: (params) => ({
        url: `/events/significant?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),

    // create events
    createEvent: builder.mutation<any, EventForm>({
      query: (payload) => ({
        url: `/events`,
        body: payload,
        method: 'POST',
      }),
    }),

    // get event by id
    getEventById: builder.mutation<Event, { id: string }>({
      query: ({ id }) => ({
        url: `/events/${id}`,
        method: 'GET',
      }),
    }),

    // update event by id
    updateEvent: builder.mutation<any, EventForm>({
      query: (payload) => ({
        url: `/events/${payload.id}`,
        body: payload,
        method: 'PUT',
      }),
    }),

    // delete event by id
    deleteEvent: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `/events/${id}`,
        method: 'DELETE',
      }),
    }),

    // change event significant status
    changeEventSignificantStatus: builder.mutation<any, { id: string; significant: boolean }>({
      query: ({ id, significant }) => ({
        url: `/events/${id}/significant`,
        method: 'PATCH',
        body: { significant },
      }),
    }),

    // set event trending
    setEventTrending: builder.mutation<any, { id: string; trending: boolean }>({
      query: ({ id, trending }) => ({
        url: `/events/${id}/trending`,
        method: 'PATCH',
        body: { trending },
      }),
    }),

    getAllCategories: builder.mutation<Pagination<Category>, CATEGORIES_PARAMS>({
      query: (params) => ({
        url: `/categories?${queryString.stringify(params)}`,
        method: 'GET',
      }),
    }),

    getCategoryById: builder.mutation<Category, { id: string }>({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllEventsMutation,
  useGetRelatedEventsMutation,
  useGetTrendingEventsMutation,
  useCreateEventMutation,
  useGetSignificantEventsMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useChangeEventSignificantStatusMutation,
  useGetEventByIdMutation,
  useSetEventTrendingMutation,
  useGetAllCategoriesMutation,
  useGetCategoryByIdMutation,
} = eventApi;
