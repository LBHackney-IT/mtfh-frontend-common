import { TenureSummary } from "@mtfh/common/lib/api/person/v1";
import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import { Alert, DiscretionaryAlert } from "./types";

export const useDiscretionaryAlert = (
  id: string | null,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<DiscretionaryAlert> => {
  return useAxiosSWR(
    id && `${config.discretionaryApiUrlV1}/cautionary-alerts/persons/${id}`,
    options,
  );
};

export const usePropertyDiscretionaryAlert = (
  propertyRef: string | null,
  options?: AxiosSWRConfiguration<any>,
): AxiosSWRResponse<DiscretionaryAlert> => {
  return useAxiosSWR(
    propertyRef &&
      `${config.discretionaryApiUrlV1}/cautionary-alerts/properties-new/${propertyRef}`,
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
  assetDetails: Pick<TenureSummary, "propertyReference" | "uprn"> & {
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
    `${config.discretionaryApiUrlV1}/cautionary-alerts/`,
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
