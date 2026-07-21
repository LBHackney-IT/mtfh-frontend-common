"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactDetail = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const deleteContactDetail = async (id, targetId) => {
    const response = await http_1.axiosInstance.delete(`${config_1.config.contactDetailsApiUrlV1}/contactDetails?id=${id}&targetId=${targetId}`);
    return response.data;
};
exports.deleteContactDetail = deleteContactDetail;
