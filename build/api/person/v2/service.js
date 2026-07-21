"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPerson = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const addPerson = async (data) => {
    const { data: person } = await http_1.axiosInstance.post(`${config_1.config.personApiUrlV2}/persons`, data);
    (0, http_1.mutate)(`${config_1.config.personApiUrlV1}/persons/${person.id}`, person, false);
    return person;
};
exports.addPerson = addPerson;
