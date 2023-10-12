import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import { Patch, UpdatePatchesAndAreasRequest } from "./types";

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
): Promise<null> => {
  return new Promise((resolve, reject) => {
    const apiUrl = `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`;
    console.log(`PATCH VERSION: ${patchVersion}`);
    const headers = { "If-Match": `"${patchVersion}"` };
    axiosInstance
      .patch(apiUrl, request, { headers })
      .then((res) => console.log(res))
      .catch((error) => reject(error));
  });
};

export const deletePatchesAndAreasResponsibilities = async (
  patchId: string,
  responsibleEntityId: string,
): Promise<null> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(
        `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`,
      )
      .then((res) => console.log(res))
      .catch((error) => reject(error));
  });
};
