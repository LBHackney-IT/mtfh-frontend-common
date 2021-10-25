import { AxiosError } from "axios";
import useSwr, { Key, KeyLoader, SWRConfiguration, SWRResponse, mutate } from "swr";

import useSWRInfinite, {
  SWRInfiniteConfiguration,
  SWRInfiniteResponse,
} from "swr/infinite";

import { axiosInstance } from "./http";

export type AxiosSWRError = AxiosError;
export type AxiosSWRResponse<T> = SWRResponse<T, AxiosSWRError>;
export type AxiosSWRInfiniteResponse<T> = SWRInfiniteResponse<T, AxiosSWRError>;
export type AxiosSWRConfiguration<T> = SWRConfiguration<T, AxiosError>;
export type AxiosSWRInfiniteConfiguration<T> = SWRInfiniteConfiguration<T, AxiosSWRError>;

export const axiosFetcher = <ResponseData>(url: string): Promise<ResponseData> =>
  axiosInstance.get<ResponseData>(url).then((res) => res.data);

export const useAxiosSWR = <ResponseData>(
  key: Key,
  options: AxiosSWRConfiguration<ResponseData> = {},
): AxiosSWRResponse<ResponseData> =>
  useSwr<ResponseData, AxiosSWRError>(key, axiosFetcher, {
    shouldRetryOnError: false,
    ...options,
  });

export const useAxiosSWRInfinite = <ResponseData>(
  key: KeyLoader<ResponseData>,
  options: AxiosSWRInfiniteConfiguration<ResponseData> = {},
): AxiosSWRInfiniteResponse<ResponseData> =>
  useSWRInfinite<ResponseData, AxiosSWRError>(key, axiosFetcher, options);

export { mutate };
