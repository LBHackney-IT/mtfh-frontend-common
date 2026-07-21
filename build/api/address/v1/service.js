"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressLookup = exports.getAddressViaUprn = exports.searchAddress = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const searchAddress = async (postCode, structure) =>
  http_1.axiosInstance
    .get(
      `${config_1.config.addressApiUrlV1}/addresses?postcode=${postCode}${
        structure ? `&Structure=${structure}` : ""
      }`,
      {
        headers: {
          "skip-x-correlation-id": true,
        },
      },
    )
    .then((res) => ({
      addresses: res.data.data.address,
    }))
    .catch((res) => {
      if (res.message.toLowerCase().indexOf("network") !== -1) {
        return { error: { code: 500 } };
      }
      return res;
    });
exports.searchAddress = searchAddress;
const getAddressViaUprn = async (UPRN, isParentUPRN, page, pageSize) => {
  return new Promise((resolve, reject) => {
    http_1.axiosInstance
      .get(
        `${config_1.config.addressApiUrlV1}/addresses?${
          isParentUPRN ? `parentUprn` : `uprn`
        }=${UPRN}${page ? `&page=${page}` : ``}${
          pageSize ? `&pageSize=${pageSize}` : ``
        }`,
        {
          headers: {
            "skip-x-correlation-id": true,
          },
        },
      )
      .then((res) =>
        resolve({
          addresses: res.data.data.address,
          pageCount: res.data.data.page_count,
          totalCount: res.data.data.total_count,
        }),
      )
      .catch((error) => reject(error));
  });
};
exports.getAddressViaUprn = getAddressViaUprn;
const useAddressLookup = (postCode, options = {}) => {
  return (0, http_1.useAxiosSWR)(
    postCode ? `${config_1.config.addressApiUrlV1}/addresses?postcode=${postCode}` : null,
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
exports.useAddressLookup = useAddressLookup;
