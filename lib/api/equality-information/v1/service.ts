import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import { EqualityData } from "./types";

export interface EqualityInformationResponse {
  equalityData: EqualityData[];
}

export const useEqualityInformation = (
  targetId: string,
  options?: AxiosSWRConfiguration<EqualityInformationResponse>,
) =>
  useAxiosSWR<EqualityInformationResponse>(
    `${config.equalityInformationApiUrlV1}/equality-information?targetId=${targetId}`,
    {
      ...options,
      onErrorRetry: /* istanbul ignore next: unreachable in test suite */ (
        error,
        key,
        config,
        revalidate,
        { retryCount },
      ) => {
        if (error.response?.status === 404) return;
        if (retryCount >= 3) return;

        const count = Math.min(retryCount, 8);
        const timeout =
          ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
        setTimeout(() => revalidate({ retryCount }), timeout);
      },
    },
  );

export const useEqualityInformationById = (
  id: string,
  targetId: string,
  options?: AxiosSWRConfiguration<EqualityData>,
): AxiosSWRResponse<EqualityData> =>
  useAxiosSWR(
    `${config.equalityInformationApiUrlV1}/equality-information/${id}?targetId=${targetId}`,
    {
      ...options,
      onErrorRetry: /* istanbul ignore next: unreachable in test suite */ (
        error,
        key,
        config,
        revalidate,
        { retryCount },
      ) => {
        if (error.response?.status === 404) return;
        if (retryCount >= 3) return;

        const count = Math.min(retryCount, 8);
        const timeout =
          ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
        setTimeout(() => revalidate({ retryCount }), timeout);
      },
    },
  );

export const addEqualityInformation = async (data: Omit<EqualityData, "id">) =>
  axiosInstance.post(`${config.equalityInformationApiUrlV1}/equality-information`, data);

export const updateEqualityInformation = async (
  id: string,
  data: Omit<EqualityData, "id">,
) =>
  axiosInstance.patch(
    `${config.equalityInformationApiUrlV1}/${id}/equality-information`,
    data,
  );
