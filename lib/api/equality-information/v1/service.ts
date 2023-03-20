import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  useAxiosSWR,
} from "../../../http";

import type { EqualityData } from "./types";

export const useEqualityInformation = (
  targetId: string,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<EqualityData>,
) =>
  useAxiosSWR<EqualityData>(
    `${config.equalityInformationApiUrlV1}/equality-information?targetId=${targetId}`,
    auth,
    {
      ...options,
    },
  );

export const useEqualityInformationById = (
  id: string,
  targetId: string,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<EqualityData>,
): AxiosSWRResponse<EqualityData> =>
  useAxiosSWR(
    `${config.equalityInformationApiUrlV1}/equality-information/${id}?targetId=${targetId}`,
    auth,
    options,
  );

export const addEqualityInformation = async (
  data: Omit<EqualityData, "id">,
  auth: CommonAuth,
) => {
  const axiosInstance = getAxiosInstance(auth);

  return axiosInstance.post(
    `${config.equalityInformationApiUrlV1}/equality-information`,
    data,
  );
};

export const updateEqualityInformation = async (
  id: string,
  data: Omit<EqualityData, "id">,
  auth: CommonAuth,
) => {
  const axiosInstance = getAxiosInstance(auth);

  return axiosInstance.patch(
    `${config.equalityInformationApiUrlV1}/equality-information/${id}`,
    data,
  );
};
