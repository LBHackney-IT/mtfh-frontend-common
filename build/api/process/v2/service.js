"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProcess = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const addProcess = async (data, processName) => {
  const { data: process } = await http_1.axiosInstance.post(
    `${config_1.config.processApiUrlV2}/process/${processName}`,
    data,
  );
  return process;
};
exports.addProcess = addProcess;
