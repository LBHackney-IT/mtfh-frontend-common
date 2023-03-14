import { AxiosRequestConfig } from "axios";
export interface Config extends AxiosRequestConfig {
    headers: Record<string, string>;
}
export declare const axiosInstance: import("axios").AxiosInstance;
