"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProcess = exports.useProcesses = exports.useProcess = exports.addProcess = void 0;
const query_string_1 = require("query-string");
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const addProcess = async (data, processName) => {
    const { data: process } = await http_1.axiosInstance.post(`${config_1.config.processApiUrlV1}/process/${processName}`, data);
    return process;
};
exports.addProcess = addProcess;
const useProcess = ({ id, processName }, options) => {
    return (0, http_1.useAxiosSWR)(`${config_1.config.processApiUrlV1}/process/${processName}/${id}`, options);
};
exports.useProcess = useProcess;
const useProcesses = (id, { pageSize = 5, ...options } = {}) => {
    return (0, http_1.useAxiosSWRInfinite)((page, previous) => {
        var _a;
        if (!id || (previous && !((_a = previous === null || previous === void 0 ? void 0 : previous.paginationDetails) === null || _a === void 0 ? void 0 : _a.nextToken))) {
            return null;
        }
        const params = {
            targetId: id,
            pageSize,
        };
        if (page !== 0 && (previous === null || previous === void 0 ? void 0 : previous.paginationDetails.nextToken)) {
            params.paginationToken = previous.paginationDetails.nextToken;
        }
        return `${config_1.config.processApiUrlV1}/process?${(0, query_string_1.stringify)(params)}`;
    }, options);
};
exports.useProcesses = useProcesses;
const editProcess = async ({ id, processName, processTrigger, ...data }) => {
    const response = await http_1.axiosInstance.patch(`${config_1.config.processApiUrlV1}/process/${processName}/${id}/${processTrigger}`, data);
    return response.data;
};
exports.editProcess = editProcess;
