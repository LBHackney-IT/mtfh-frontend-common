import { AxiosError, AxiosHeaders, AxiosRequestConfig, CancelTokenSource } from "axios";
export interface Config extends AxiosRequestConfig {
    headers: AxiosHeaders;
}
export declare const axiosInstance: import("axios").AxiosInstance;
export declare const createCancelToken: () => CancelTokenSource;
export declare const isAxiosError: (e: unknown) => e is AxiosError;
//# sourceMappingURL=http.d.ts.map