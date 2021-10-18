import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";
import { removeWhitespace } from "@mtfh/common/lib/utils";
import {
  ContactDetail,
  ContactDetailsPhoneTypes,
  ContactInformation,
  ContactInformationContactTypes,
} from "./types";

export interface ContactDetailsResponse {
  results: ContactDetail[];
}

export const useContactDetails = (
  id: string,
  options?: AxiosSWRConfiguration<ContactDetailsResponse>,
): AxiosSWRResponse<ContactDetailsResponse> =>
  useAxiosSWR(id && `${config.contactDetailsApiUrlV2}/contactDetails?targetId=${id}`, {
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
  });

export const addContactDetail = async (
  id: string,
  data: ContactInformation,
): Promise<ContactDetail> => {
  const response = await axiosInstance.post(
    `${config.contactDetailsApiUrlV2}/contactDetails`,
    {
      targetId: id,
      targetType: "person",
      contactInformation: {
        ...data,
        value: removeWhitespace(data.value),
      },
      sourceServiceArea: {
        area: "Housing",
        isDefault: true,
      },
    },
  );

  return response.data;
};

export const addEmailContact = async (
  id: string,
  email: string,
  description?: string,
): Promise<ContactDetail> =>
  addContactDetail(id, {
    contactType: ContactInformationContactTypes.EMAIL,
    value: email,
    description,
  });

export const addPhoneContact = async (
  id: string,
  phone: string,
  type: ContactDetailsPhoneTypes,
  description?: string,
): Promise<ContactDetail> =>
  addContactDetail(id, {
    contactType: ContactInformationContactTypes.PHONE,
    value: phone,
    subType: type,
    description,
  });
