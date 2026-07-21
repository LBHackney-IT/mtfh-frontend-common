"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEqualityInformation = exports.addEqualityInformation = exports.useEqualityInformationById = exports.useEqualityInformation = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const useEqualityInformation = (targetId, options) => (0, http_1.useAxiosSWR)(`${config_1.config.equalityInformationApiUrlV1}/equality-information?targetId=${targetId}`, {
    ...options,
});
exports.useEqualityInformation = useEqualityInformation;
const useEqualityInformationById = (id, targetId, options) => (0, http_1.useAxiosSWR)(`${config_1.config.equalityInformationApiUrlV1}/equality-information/${id}?targetId=${targetId}`, options);
exports.useEqualityInformationById = useEqualityInformationById;
const addEqualityInformation = async (data) => http_1.axiosInstance.post(`${config_1.config.equalityInformationApiUrlV1}/equality-information`, data);
exports.addEqualityInformation = addEqualityInformation;
const updateEqualityInformation = async (id, data) => http_1.axiosInstance.patch(`${config_1.config.equalityInformationApiUrlV1}/equality-information/${id}`, data);
exports.updateEqualityInformation = updateEqualityInformation;
