"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePropertyPatch =
  exports.createAsset =
  exports.patchAssetAddress =
  exports.patchAsset =
  exports.getParentAssets =
  exports.getChildAssets =
  exports.useChildAssets =
  exports.useAsset =
  exports.getAsset =
    void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const getAsset = async (id) => {
  return http_1.axiosInstance.get(`${config_1.config.assetApiUrlV1}/assets/${id}`);
};
exports.getAsset = getAsset;
const useAsset = (id, options) => {
  return (0, http_1.useAxiosSWR)(
    id && `${config_1.config.assetApiUrlV1}/assets/${id}`,
    options,
  );
};
exports.useAsset = useAsset;
const useChildAssets = (id, options, pageSize = 1000) => {
  const response = (0, http_1.useAxiosSWR)(
    id &&
      `${config_1.config.assetSearchApiUrlV1}/search/assetrelationships?searchText=${id}&pageSize=${pageSize}`,
    options,
  );
  return response;
};
exports.useChildAssets = useChildAssets;
const getChildAssets = async (id, pageSize = 1000) => {
  return http_1.axiosInstance.get(
    `${config_1.config.assetSearchApiUrlV1}/search/assetrelationships?searchText=${id}&pageSize=${pageSize}`,
  );
};
exports.getChildAssets = getChildAssets;
const getParentAssets = (parentAssetIds, options) => {
  const parentAssets = [];
  if (parentAssetIds) {
    const parents = parentAssetIds.split("#");
    parents.forEach((p) => {
      console.log(`Getting parent asset ${p}`);
      const { data: parentAsset } = (0, http_1.useAxiosSWR)(
        p && `${config_1.config.assetApiUrlV1}/assets/${p}`,
        options,
      );
      console.log(`Pushing parent asset ${p}`);
      if (parentAsset !== undefined) {
        parentAssets.push(parentAsset);
      }
    });
  }
  const response = { parentAssets };
  return response;
};
exports.getParentAssets = getParentAssets;
const patchAsset = async (id, request, assetVersion) => {
  return http_1.axiosInstance.patch(
    `${config_1.config.assetApiUrlV1}/assets/${id}`,
    request,
    {
      headers: {
        "If-Match": assetVersion,
      },
    },
  );
};
exports.patchAsset = patchAsset;
const patchAssetAddress = async (id, assetAddress, assetVersion) => {
  return new Promise((resolve, reject) => {
    http_1.axiosInstance
      .patch(`${config_1.config.assetApiUrlV1}/assets/${id}/address`, assetAddress, {
        headers: {
          "If-Match": assetVersion,
        },
      })
      .then(() => resolve())
      .catch(() => reject());
  });
};
exports.patchAssetAddress = patchAssetAddress;
const createAsset = async (request) => {
  var _a, _b;
  if (
    ((_b =
      (_a = request.assetLocation) === null || _a === void 0
        ? void 0
        : _a.parentAssets) === null || _b === void 0
      ? void 0
      : _b.length) > 1
  ) {
    const error = "Only one parent asset is allowed when creating a new asset.";
    console.error(error);
    throw new Error(error);
  }
  return new Promise((resolve, reject) => {
    http_1.axiosInstance
      .post(`${config_1.config.assetApiUrlV1}/assets/`, request)
      .then(() => resolve())
      .catch(() => reject());
  });
};
exports.createAsset = createAsset;
const updatePropertyPatch = async (id, propertypatch, assetVersion) => {
  return new Promise((resolve, reject) => {
    http_1.axiosInstance
      .patch(`${config_1.config.assetApiUrlV1}/assets/${id}/patch`, propertypatch, {
        headers: {
          "If-Match": assetVersion,
        },
      })
      .then(() => resolve())
      .catch(() => reject());
  });
};
exports.updatePropertyPatch = updatePropertyPatch;
