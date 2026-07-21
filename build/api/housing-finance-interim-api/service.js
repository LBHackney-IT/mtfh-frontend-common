"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressDetails = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const updateAddressDetails = async (propertyReference, request) => {
  return http_1.axiosInstance.patch(
    `${config_1.config.housingFinanceInterimApiUrlV1}/asset/${propertyReference}`,
    request,
  );
};
exports.updateAddressDetails = updateAddressDetails;
