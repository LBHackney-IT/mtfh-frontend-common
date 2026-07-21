"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressLookupUprn = exports.getAddressViaUprn = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const getAddressViaUprn = (UPRN) =>
  http_1.axiosInstance
    .get(`${config_1.config.addressApiUrlV2}/addresses/${UPRN}`, {
      headers: {
        "skip-x-correlation-id": true,
      },
    })
    .then((res) => ({ addresses: res.data.data.address }))
    .catch((res) => {
      if (res.message.toLowerCase().indexOf("network") !== -1) {
        return { error: { code: 500 } };
      }
      return res;
    });
exports.getAddressViaUprn = getAddressViaUprn;
const useAddressLookupUprn = (uprn, options = {}) => {
  return (0, http_1.useAxiosSWR)(
    uprn ? `${config_1.config.addressApiUrlV2}/addresses/${uprn}` : null,
    {
      ...options,
      timeout: 5000,
      headers: {
        ...options.headers,
        "skip-x-correlation-id": true,
      },
    },
  );
};
exports.useAddressLookupUprn = useAddressLookupUprn;
