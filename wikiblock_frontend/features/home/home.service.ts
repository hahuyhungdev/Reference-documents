import { API_BASE_URL } from "@config/env";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import axiosBaseQuery from "@utils/axiosBaseQuery";
import { stringify } from "query-string";
import { Pagination } from "types/common";

import { News, NewsParams } from "./home.type";

export const HOME_API_REDUCER_KEY = "homeApi";

export const homeApi = createApi({
  reducerPath: HOME_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getAllNews: builder.mutation<Pagination<News>, NewsParams>({
      query: (query) => ({
        url: `/news?${stringify(query)}`,
        method: "GET",
      }),
    }),

    getImportantNews: builder.mutation<Pagination<News>, NewsParams>({
      query: (query) => ({
        url: `/news/important?${stringify(query)}`,
        method: "GET",
      }),
    }),

    getRelatedNews: builder.mutation<Pagination<News>, NewsParams>({
      query: (query) => ({
        url: `/news/related?${stringify(query)}`,
        method: "GET",
      }),
    }),

    getNewsBySlug: builder.mutation<News, NewsParams>({
      query: ({ slug, ...query }) => ({
        url: `/news/${slug}?${stringify(query)}`,
        method: "GET",
      }),
    }),

    followTopic: builder.mutation<
      { followings: Array<string> },
      { topicId: string }
    >({
      query: (query) => ({
        url: `/users/me/category/follow/${query.topicId}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetAllNewsMutation,
  useGetImportantNewsMutation,
  useGetRelatedNewsMutation,
  useFollowTopicMutation,
  useGetNewsBySlugMutation,
} = homeApi;
