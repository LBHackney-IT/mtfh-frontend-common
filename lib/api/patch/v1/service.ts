import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import { Patch } from ".";

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
