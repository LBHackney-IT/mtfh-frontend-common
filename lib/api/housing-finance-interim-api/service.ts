import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

export interface UpdateAddressDetailsRequest {
  postPreamble: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  postCode: string;
}

export const updateAddressDetails = async (
  propertyReference: string,
  request: UpdateAddressDetailsRequest,
): Promise<void> => {
  await axiosInstance.patch(
    `${config.housingFinanceInterimApiUrlV1}/assets/${propertyReference}`,
    request,
  );
};
