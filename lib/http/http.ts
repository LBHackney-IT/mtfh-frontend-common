import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  CancelTokenSource,
} from "axios";
import { v4 as uuid } from "uuid";

import { $auth } from "@mtfh/common/lib/auth";
// Add these back in when 403 forced logout is re-enabled
// , isAuthorised, logout

export interface Config extends AxiosRequestConfig {
  headers: AxiosHeaders;
}

export const axiosInstance = axios.create({
  responseType: "json",
});

axiosInstance.interceptors.request.use((reqConfig) => {
  // Normalize headers into a guaranteed AxiosHeaders instance
  const headers = AxiosHeaders.from(reqConfig.headers) ?? new AxiosHeaders();

  // Add Authorization header
  headers.set("Authorization", `Bearer ${$auth.getValue().token}`);

  // Add correlation ID unless explicitly skipped
  if (!headers.has("skip-x-correlation-id")) {
    headers.set("x-correlation-id", uuid());
  }

  // Remove the control header
  headers.delete("skip-x-correlation-id");

  // Handle ETag → If-Match for PATCH requests
  let data;
  if (reqConfig.data) {
    data = Array.isArray(reqConfig.data) ? [...reqConfig.data] : { ...reqConfig.data };
  }

  if (reqConfig.method === "patch" && data?.etag) {
    headers.set("If-Match", data.etag);
    delete data.etag;
  }

  const req: Config = {
    ...reqConfig,
    headers,
    data,
  };

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
      // Has to be disabled for the until Repairs is moved onto the Cognito auth flow
      // because repairs API calls failure due to mismatching authorizers are causing
      // unwarranted logouts.
      // if (isAuthorised()) {
      //   logout();
      // }
      console.warn(
        "This needs to be re-enabled after Repairs gets migrated onto Cognito authentication.",
      );
    }
    throw error;
  },
);

export const createCancelToken = (): CancelTokenSource => axios.CancelToken.source();

export const isAxiosError = (e: unknown): e is AxiosError => axios.isAxiosError(e);
