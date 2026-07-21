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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutate =
  exports.useAxiosSWRInfinite =
  exports.useAxiosSWR =
  exports.axiosFetcher =
    void 0;
const swr_1 = __importStar(require("swr"));
Object.defineProperty(exports, "mutate", {
  enumerable: true,
  get: function () {
    return swr_1.mutate;
  },
});
const infinite_1 = __importDefault(require("swr/infinite"));
const http_1 = require("./http");
const axiosFetcher =
  (options = {}) =>
  (url) =>
    http_1.axiosInstance.get(url, options).then((res) => res.data);
exports.axiosFetcher = axiosFetcher;
const useAxiosSWR = (key, options = {}) =>
  (0, swr_1.default)(key, (0, exports.axiosFetcher)(options), {
    shouldRetryOnError: false,
    ...options,
  });
exports.useAxiosSWR = useAxiosSWR;
const useAxiosSWRInfinite = (key, options = {}) =>
  (0, infinite_1.default)(key, (0, exports.axiosFetcher)(options), options);
exports.useAxiosSWRInfinite = useAxiosSWRInfinite;
