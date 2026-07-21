"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTenure =
  exports.removePersonFromTenure =
  exports.addPersonToTenure =
  exports.addTenure =
  exports.useTenure =
    void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const useTenure = (id, options) => {
  return (0, http_1.useAxiosSWR)(
    id && `${config_1.config.tenureApiUrlV1}/tenures/${id}`,
    options,
  );
};
exports.useTenure = useTenure;
const addTenure = async (params) => {
  const { data: tenure } = await http_1.axiosInstance.post(
    `${config_1.config.tenureApiUrlV1}/tenures`,
    params,
  );
  (0, http_1.mutate)(
    `${config_1.config.tenureApiUrlV1}/tenures/${tenure.id}`,
    tenure,
    false,
  );
  return tenure;
};
exports.addTenure = addTenure;
const addPersonToTenure = async ({ tenureId, householdMember, etag }) => {
  await http_1.axiosInstance.patch(
    `${config_1.config.tenureApiUrlV1}/tenures/${tenureId}/person/${householdMember.id}`,
    { ...householdMember, etag },
  );
};
exports.addPersonToTenure = addPersonToTenure;
const removePersonFromTenure = async (params) => {
  await http_1.axiosInstance.delete(
    `${config_1.config.tenureApiUrlV1}/tenures/${params.tenureId}/person/${params.householdMemberId}`,
  );
};
exports.removePersonFromTenure = removePersonFromTenure;
const editTenure = async ({ id, ...data }) => {
  const response = await http_1.axiosInstance.patch(
    `${config_1.config.tenureApiUrlV1}/tenures/${id}`,
    data,
  );
  return response.data;
};
exports.editTenure = editTenure;
