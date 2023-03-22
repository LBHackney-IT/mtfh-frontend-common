import { TenureSummary } from "../../../api/person/v1";
import { CommonAuth } from "../../../auth";

import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  useAxiosSWR,
} from "../../../http";
import { Alert, CautionaryAlert } from "./types";

export const useCautionaryAlert = (
  id: string | null,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<CautionaryAlert> => {
  return useAxiosSWR(
    id && `${config.cautionaryApiUrlV1}/cautionary-alerts/persons/${id}`,
    auth,
    options,
  );
};

export const usePropertyCautionaryAlert = (
  propertyRef: string | null,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<CautionaryAlert> => {
  return useAxiosSWR(
    propertyRef &&
      `${config.cautionaryApiUrlV1}/cautionary-alerts/properties-new/${propertyRef}`,
    auth,
    options,
  );
};

export type PostCautionaryAlertRequestData = Pick<Alert, "assureReference"> & {
  incidentDate: string;
  incidentDescription: string;
  alert: {
    code: string;
    description: string;
  };
  assetDetails?: Pick<TenureSummary, "propertyReference" | "uprn"> & {
    id: string;
    fullAddress: string;
  };
  personDetails: {
    id: string;
    name: string;
  };
};

export const addCautionaryAlert = async (
  data: PostCautionaryAlertRequestData,
  auth: CommonAuth,
): Promise<Alert> => {
  const axiosInstance = getAxiosInstance(auth);

  const { data: alert } = await axiosInstance.post(
    `${config.cautionaryApiUrlV1}/cautionary-alerts/`,
    data,
  );
  return {
    ...alert,
    alertCode: alert.code,
    description: alert.cautionOnSystem,
    personName: alert.name,
    startDate: alert.dateOfIncident,
  };
};
