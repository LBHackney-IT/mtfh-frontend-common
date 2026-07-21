"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPerson = exports.addPerson = exports.usePerson = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const usePerson = (id, options) => {
  return (0, http_1.useAxiosSWR)(
    id && `${config_1.config.personApiUrlV1}/persons/${id}`,
    options,
  );
};
exports.usePerson = usePerson;
const addPerson = async (data) => {
  const { data: person } = await http_1.axiosInstance.post(
    `${config_1.config.personApiUrlV1}/persons`,
    data,
  );
  (0, http_1.mutate)(
    `${config_1.config.personApiUrlV1}/persons/${person.id}`,
    person,
    false,
  );
  return person;
};
exports.addPerson = addPerson;
const editPerson = async ({ id, ...data }) => {
  const response = await http_1.axiosInstance.patch(
    `${config_1.config.personApiUrlV1}/persons/${id}`,
    data,
  );
  return response.data;
};
exports.editPerson = editPerson;
