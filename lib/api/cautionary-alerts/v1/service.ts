import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  useAxiosSWR,
} from "../../../http";
import { TenureSummary } from "../../person/v1";
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
  const axiosInstance = getAxiosInstance();

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
