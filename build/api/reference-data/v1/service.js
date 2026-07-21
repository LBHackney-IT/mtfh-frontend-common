"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferenceData = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const useReferenceData = ({ category, subCategory }, options) => {
  let params = `category=${category}`;
  /* istanbul ignore else */
  if (subCategory) {
    params += `&subCategory=${subCategory}`;
  }
  return (0, http_1.useAxiosSWR)(
    `${config_1.config.referenceDataApiUrlV1}/reference-data?${params}`,
    options,
  );
};
exports.useReferenceData = useReferenceData;
