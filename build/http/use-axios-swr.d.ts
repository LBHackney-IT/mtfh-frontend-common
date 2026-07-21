import { AxiosError, AxiosRequestConfig } from "axios";
import { Key, KeyLoader, SWRConfiguration, SWRResponse, mutate } from "swr";
import { SWRInfiniteConfiguration, SWRInfiniteResponse } from "swr/infinite";
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
export declare const axiosFetcher: (
  options?: AxiosRequestConfig,
) => <ResponseData>(url: string) => Promise<ResponseData>;
export declare const useAxiosSWR: <ResponseData>(
  key: Key,
  options?: AxiosSWRConfiguration<ResponseData>,
) => AxiosSWRResponse<ResponseData>;
export declare const useAxiosSWRInfinite: <ResponseData>(
  key: KeyLoader<ResponseData>,
  options?: AxiosSWRInfiniteConfiguration<ResponseData>,
) => AxiosSWRInfiniteResponse<ResponseData>;
export { mutate };
//# sourceMappingURL=use-axios-swr.d.ts.map
