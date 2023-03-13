import { AxiosError, AxiosRequestConfig, CancelTokenSource } from "axios";
export interface Config extends AxiosRequestConfig {
    headers: Record<string, string>;
}
export declare const axiosInstance: import("axios").AxiosInstance;
export declare const createCancelToken: () => CancelTokenSource;
export declare const isAxiosError: (e: unknown) => e is AxiosError<any>;
