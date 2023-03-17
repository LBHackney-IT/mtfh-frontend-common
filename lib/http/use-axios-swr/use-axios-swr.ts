import { AxiosError, AxiosRequestConfig } from "axios";
import useSwr, { Key, KeyLoader, SWRConfiguration, SWRResponse, mutate } from "swr";
import useSWRInfinite, {
  SWRInfiniteConfiguration,
  SWRInfiniteResponse,
} from "swr/infinite";

import { getAxiosInstance } from "../http";
import { CommonAuth } from "../../auth";

export type AxiosSWRError = AxiosError;
export type AxiosSWRResponse<T> = SWRResponse<T, AxiosSWRError>;
export type AxiosSWRInfiniteResponse<T> = SWRInfiniteResponse<T, AxiosSWRError>;
export type AxiosSWRConfiguration<T> = SWRConfiguration<T, AxiosError> &
  AxiosRequestConfig;
export type AxiosSWRInfiniteConfiguration<T> = SWRInfiniteConfiguration<
  T,
  AxiosSWRError
> &
  AxiosRequestConfig;

export const axiosFetcher =
  (auth: CommonAuth, options: AxiosRequestConfig = {}) =>
  <ResponseData>(url: string): Promise<ResponseData> =>
    {
      const axiosInstance = getAxiosInstance(auth);

      return axiosInstance.get<ResponseData>(url, options).then((res) => res.data);
    }

export const useAxiosSWR = <ResponseData>(
  key: Key,
  auth: CommonAuth,
  options: AxiosSWRConfiguration<ResponseData> = {},
): AxiosSWRResponse<ResponseData> =>
  useSwr<ResponseData, AxiosSWRError>(key, axiosFetcher(auth, options), {
    shouldRetryOnError: false,
    ...options,
  });

export const useAxiosSWRInfinite = <ResponseData>(
  key: KeyLoader<ResponseData>,
  auth: CommonAuth,
  options: AxiosSWRInfiniteConfiguration<ResponseData> = {},
): AxiosSWRInfiniteResponse<ResponseData> =>
  useSWRInfinite<ResponseData, AxiosSWRError>(key, axiosFetcher(auth, options), options);

export { mutate };
