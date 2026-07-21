"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAxiosError = exports.createCancelToken = exports.axiosInstance = void 0;
const axios_1 = __importStar(require("axios"));
const uuid_1 = require("uuid");
const auth_1 = require("@mtfh/common/lib/auth");
exports.axiosInstance = axios_1.default.create({
  responseType: "json",
});
exports.axiosInstance.interceptors.request.use((reqConfig) => {
  var _a;
  // Normalize headers into a guaranteed AxiosHeaders instance
  const headers =
    (_a = axios_1.AxiosHeaders.from(reqConfig.headers)) !== null && _a !== void 0
      ? _a
      : new axios_1.AxiosHeaders();
  // Add Authorization header
  headers.set("Authorization", `Bearer ${auth_1.$auth.getValue().token}`);
  // Add correlation ID unless explicitly skipped
  if (!headers.has("skip-x-correlation-id")) {
    headers.set("x-correlation-id", (0, uuid_1.v4)());
  }
  // Remove the control header
  headers.delete("skip-x-correlation-id");
  // Handle ETag → If-Match for PATCH requests
  let data;
  if (reqConfig.data) {
    data = Array.isArray(reqConfig.data) ? [...reqConfig.data] : { ...reqConfig.data };
  }
  if (
    reqConfig.method === "patch" &&
    (data === null || data === void 0 ? void 0 : data.etag)
  ) {
    headers.set("If-Match", data.etag);
    delete data.etag;
  }
  const req = {
    ...reqConfig,
    headers,
    data,
  };
  return req;
});
exports.axiosInstance.interceptors.response.use(
  (res) => {
    var _a;
    if (
      res.config.method === "get" &&
      ((_a = res.data) === null || _a === void 0 ? void 0 : _a.id)
    ) {
      res.data.etag = res.headers.etag;
    }
    return res;
  },
  (error) => {
    var _a;
    if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 403) {
      if ((0, auth_1.isAuthorised)()) {
        (0, auth_1.logout)();
      }
    }
    throw error;
  },
);
const createCancelToken = () => axios_1.default.CancelToken.source();
exports.createCancelToken = createCancelToken;
const isAxiosError = (e) => axios_1.default.isAxiosError(e);
exports.isAxiosError = isAxiosError;
