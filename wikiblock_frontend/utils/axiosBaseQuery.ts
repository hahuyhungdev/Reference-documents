import { API_BASE_URL, BASE_URL } from "@config/env";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { getToken } from "@utils/cookies";
import axios, { AxiosRequestConfig } from "axios";

type DataResponse = unknown;

export type ErrorResponse = {
  message: string;
  code: string | null;
  details?: Array<{
    message: string;
    path: string;
  }>;
};

type RequestOptions = {
  url: AxiosRequestConfig["url"];
  method: AxiosRequestConfig["method"];
  headers?: AxiosRequestConfig["headers"];
  body?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
};

type CustomBaseQueryFn = BaseQueryFn<
  RequestOptions,
  DataResponse,
  ErrorResponse
>;

const axiosInstance = axios.create({
  // If the request takes longer than "30 seconds", the request will be aborted
  timeout: 30 * 1000,
  headers: {
    // TODO: Get language from i18n
    "Accept-Language": "vi",
  },
});

const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: "" }
): CustomBaseQueryFn => {
  return async ({ url, method, headers, body, params }) => {
    try {
      // Detect access token
      const accessToken = getToken("access_token");
      // Request
      const { data } = await axiosInstance({
        method,
        url: baseUrl + url,
        headers: {
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          ...(headers && headers),
        },
        params,
        data: body,
      });
      return { data: data };
    } catch (_axiosError) {
      const axiosError = _axiosError as any;
      const error: ErrorResponse = axiosError.response?.data.error || {
        message: axiosError.message || "Network Error",
      };
      return { error };
    }
  };
};

export const fetchAPI = async ({
  url,
  method,
  headers,
  body,
  params,
}: RequestOptions) => {
  try {
    // Detect access token
    const accessToken = getToken("access_token");
    // Request
    const { data } = await axiosInstance({
      method,
      url: API_BASE_URL + url,
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...(headers && headers),
      },
      params,
      data: body,
    });
    return { data };
  } catch (_axiosError) {
    const axiosError = _axiosError as any;
    const error: ErrorResponse = (axiosError as any).response?.data.error || {
      message: (axiosError as any).message || "Network Error",
    };
    return { error };
  }
};

export default axiosBaseQuery;
