import { TenureSummary } from "@mtfh/common/lib/api/person/v1";
import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import { Alert, CautionaryAlert } from "./types";

export const useCautionaryAlert = (
  id: string | null,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<CautionaryAlert> => {
  return useAxiosSWR(
    id && `${config.cautionaryApiUrlV1}/cautionary-alerts/persons/${id}`,
    options,
  );
};

export const useCautionaryAlertByAlertId = (
  alertId: string,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<CautionaryAlert> => {
  return useAxiosSWR(
    alertId && `${config.cautionaryApiUrlV1}/cautionary-alerts/alert/${alertId}`,
    options,
  );
};

export const usePropertyCautionaryAlert = (
  propertyRef: string | null,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<CautionaryAlert> => {
  return useAxiosSWR(
    propertyRef &&
      `${config.cautionaryApiUrlV1}/cautionary-alerts/properties-new/${propertyRef}`,
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
): Promise<Alert> => {
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

export const endCautionaryAlert = async (alertId: string) => {
  await axiosInstance.patch(
    `${config.cautionaryApiUrlV1}/cautionary-alerts/alerts/${alertId}/end-alert`,
  );
};
