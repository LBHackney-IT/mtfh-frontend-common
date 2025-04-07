import { AxiosResponse } from "axios";

import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

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

export const usePatchOrArea = (
  patchId: string,
  options?: AxiosSWRConfiguration<Patch>,
): AxiosSWRResponse<Patch> => {
  return useAxiosSWR(`${config.patchesAndAreasApiUrlV1}/patch/${patchId}`, options);
};

export const getByPatchName = (
  patchName: string,
  options?: AxiosSWRConfiguration<Patch>,
): AxiosSWRResponse<Patch> => {
  return useAxiosSWR(`${config.patchesAndAreasApiUrlV1}/patch/patchName/${patchName}`, options);
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
 * Replaces all the responsible entities for a Patch as set in the request
 * @param patchId - ID of Patch object
 * @param entities - List of people assigned to the Patch as responsible entities
 * @param versionNumber - Version of the patch object (from database)
 * @returns Promise with 204 No Content on success
 */
export const replacePatchResponsibleEntities = async (
  patchId: string,
  entities: ResponsibleEntity[],
  versionNumber: number,
): Promise<AxiosResponse> => {
  const apiUrl = `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntities`;
  const headers = {
    "If-Match": `"${versionNumber}"`,
  };
  return axiosInstance.put(apiUrl, entities, { headers });
};
