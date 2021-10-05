import axios, { AxiosError, AxiosRequestConfig, CancelTokenSource } from "axios";
import { v4 as uuid } from "uuid";
import { $auth, logout } from "@mtfh/common/lib/auth";
import { hasToggle } from "../configuration/feature-toggle";

interface Config extends AxiosRequestConfig {
  headers: Record<string, string>;
}

export const axiosInstance = axios.create({
  responseType: "json",
});

axiosInstance.interceptors.request.use((config) => {
  const xCorrelationId = hasToggle("MMH.XCorrelationId")
    ? { "X-Correlation-ID": uuid() }
    : {};
  const req: Config = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${$auth.getValue().token}`,
      ...xCorrelationId,
    },
  };

  if (req.method === "patch" && Object.keys(req.data || {}).includes("etag")) {
    req.headers["If-Match"] = req.data.etag;
    delete req.data.etag;
  }

  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.config.method === "get" && res.data?.id) {
      res.data.etag = res.headers.etag;
    }
    return res;
  },
  (error: AxiosError) => {
    if (error.response?.status === 403) {
      logout();
    }
    throw error;
  },
);

export const createCancelToken = (): CancelTokenSource => axios.CancelToken.source();

export const isAxiosError = (e: any): e is AxiosError => axios.isAxiosError(e);
