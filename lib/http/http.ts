import axios, { AxiosError, AxiosRequestConfig, CancelTokenSource } from "axios";
import { v4 as uuid } from "uuid";

import { getAuth } from "../auth";

export interface Config extends AxiosRequestConfig {
  headers: Record<string, string>;
}

export const getAxiosInstance = () => {
  const auth = getAuth();

  const axiosInstance = axios.create({
    responseType: "json",
  });

  axiosInstance.interceptors.request.use((reqConfig) => {
    const req: Config = {
      ...reqConfig,
      headers: {
        ...reqConfig.headers,
        Authorization: `Bearer ${auth.user.token}`,
        ...(reqConfig.headers["skip-x-correlation-id"]
          ? {}
          : { "x-correlation-id": uuid() }),
      },
    };
    delete req.headers["skip-x-correlation-id"];

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
        if (auth.isAuthorised()) {
          auth.logout();
        }
      }
      throw error;
    },
  );

  return axiosInstance;
};

export const createCancelToken = (): CancelTokenSource => axios.CancelToken.source();

export const isAxiosError = (e: unknown): e is AxiosError => axios.isAxiosError(e);
