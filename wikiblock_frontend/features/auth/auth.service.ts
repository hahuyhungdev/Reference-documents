import { API_BASE_URL } from "@config/env";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import axiosBaseQuery from "@utils/axiosBaseQuery";

import { LoginBody, Token, UserResponse } from "./auth.type";

export const AUTH_REDUCER_API_KEY = "auth";

export const authApi = createApi({
  reducerPath: AUTH_REDUCER_API_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    login: builder.mutation<{ user: UserResponse; tokens: Token }, LoginBody>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),

    getMe: builder.mutation<UserResponse, void>({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetMeMutation } = authApi;
