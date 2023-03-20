import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import { AxiosSWRConfiguration, AxiosSWRResponse, useAxiosSWR } from "../../../http";

import type { ReferenceData } from "./types";

type ReferenceDataResponse<T extends string> = { [key in T]: ReferenceData[] };

interface ReferenceDataRequestParams {
  category: string;
  subCategory?: string;
}

export const useReferenceData = <T extends string>(
  { category, subCategory }: ReferenceDataRequestParams,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<ReferenceDataResponse<T>>,
): AxiosSWRResponse<ReferenceDataResponse<T>> => {
  let params = `category=${category}`;
  /* istanbul ignore else */
  if (subCategory) {
    params += `&subCategory=${subCategory}`;
  }
  return useAxiosSWR<ReferenceDataResponse<T>>(
    `${config.referenceDataApiUrlV1}/reference-data?${params}`,
    auth,
    options,
  );
};
