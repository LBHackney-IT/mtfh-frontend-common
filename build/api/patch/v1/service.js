"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacePatchResponsibleEntities = exports.deletePatchesAndAreasResponsibilities = exports.addResponsibleEntityToPatch = exports.getByPatchName = exports.usePatchOrArea = exports.getAllPatchesAndAreas = void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const getAllPatchesAndAreas = async () => {
    return new Promise((resolve, reject) => {
        http_1.axiosInstance
            .get(`${config_1.config.patchesAndAreasApiUrlV1}/patch/all`, {
            headers: {
                "skip-x-correlation-id": true,
            },
        })
            .then((res) => resolve(res.data))
            .catch((error) => reject(error));
    });
};
exports.getAllPatchesAndAreas = getAllPatchesAndAreas;
const usePatchOrArea = (patchId, options) => {
    return (0, http_1.useAxiosSWR)(`${config_1.config.patchesAndAreasApiUrlV1}/patch/${patchId}`, options);
};
exports.usePatchOrArea = usePatchOrArea;
const getByPatchName = async (patchName) => {
    return http_1.axiosInstance.get(`${config_1.config.patchesAndAreasApiUrlV1}/patch/patchName/${patchName}`);
};
exports.getByPatchName = getByPatchName;
const addResponsibleEntityToPatch = async (patchId, responsibleEntityId, request, patchVersion) => {
    const apiUrl = `${config_1.config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`;
    return http_1.axiosInstance.patch(apiUrl, request, {
        headers: {
            "If-Match": patchVersion,
        },
    });
};
exports.addResponsibleEntityToPatch = addResponsibleEntityToPatch;
const deletePatchesAndAreasResponsibilities = async (patchId, responsibleEntityId) => {
    await http_1.axiosInstance.delete(`${config_1.config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`);
};
exports.deletePatchesAndAreasResponsibilities = deletePatchesAndAreasResponsibilities;
/**
 * Replaces all the responsible entities for a Patch as set in the request
 * @param patchId - ID of Patch object
 * @param entities - List of people assigned to the Patch as responsible entities
 * @param versionNumber - Version of the patch object (from database)
 * @returns Promise with 204 No Content on success
 */
const replacePatchResponsibleEntities = async (patchId, entities, versionNumber) => {
    const apiUrl = `${config_1.config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntities`;
    const headers = {
        "If-Match": `"${versionNumber}"`,
    };
    return http_1.axiosInstance.put(apiUrl, entities, { headers });
};
exports.replacePatchResponsibleEntities = replacePatchResponsibleEntities;
