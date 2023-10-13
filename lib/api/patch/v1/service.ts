import { AxiosResponse } from "axios";

import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import { Patch, ResponsibleEntity, UpdatePatchesAndAreasRequest } from "./types";

export const getAllPatchesAndAreas = async (): Promise<Array<Patch>> => {
  return new Promise<Array<Patch>>((resolve, reject) => {
    axiosInstance
      .get<Array<Patch>>(`${config.patchesAndAreasApiUrlV1}/patch/all`, {
        headers: {
          "skip-x-correlation-id": true,
        },
      })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};

export const addResponsibleEntityToPatch = async (
  patchId: string,
  responsibleEntityId: string,
  request: UpdatePatchesAndAreasRequest,
  patchVersion: string | null,
) => {
  const apiUrl = `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`;
  return axiosInstance.patch(apiUrl, request, {
    headers: {
      "If-Match": patchVersion,
    },
  });
};

export const deletePatchesAndAreasResponsibilities = async (
  patchId: string,
  responsibleEntityId: string,
): Promise<void> => {
  await axiosInstance.delete(
    `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`,
  );
};

/**
 * Replaces all the responsible entities for a patch as set in the request
 * @param patchId - ID of patch object
 * @param entities - List of people assigned to the patch as responsible entities
 * @param patchVersion - Version of the patch object (from database)
 * @returns Promise with 204 No Content on success
 */
export const replacePatchResponsibleEntities = async (
  patchId: string,
  entities: ResponsibleEntity[],
  patchVersion: number,
): Promise<AxiosResponse> => {
  const apiUrl = `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntities`;
  const headers = {
    "If-Match": `"${patchVersion}"`,
  };
  return axiosInstance.patch(apiUrl, entities, { headers });
};
