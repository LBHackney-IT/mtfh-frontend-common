import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  useAxiosSWR,
} from "../../../http";
import { removeWhitespace } from "../../../utils";
import {
  ContactDetail,
  ContactDetailsAddressTypes,
  ContactDetailsPhoneTypes,
  ContactInformation,
  ContactInformationContactTypes,
} from "./types";

export interface ContactDetailsResponse {
  results: ContactDetail[];
}

export const useContactDetails = (
  id: string,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<ContactDetailsResponse>,
): AxiosSWRResponse<ContactDetailsResponse> =>
  useAxiosSWR(
    id && `${config.contactDetailsApiUrlV2}/contactDetails?targetId=${id}`,
    auth,
    options,
  );

export const addContactDetail = async (
  id: string,
  data: ContactInformation,
  auth: CommonAuth,
): Promise<ContactDetail> => {
  const axiosInstance = getAxiosInstance(auth);

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
  auth: CommonAuth,
  id: string,
  email: string,
  description?: string,
): Promise<ContactDetail> =>
  addContactDetail(
    id,
    {
      contactType: ContactInformationContactTypes.EMAIL,
      value: email,
      description,
    },
    auth,
  );

export const addPhoneContact = async (
  auth: CommonAuth,
  id: string,
  phone: string,
  type: ContactDetailsPhoneTypes,
  description?: string,
): Promise<ContactDetail> =>
  addContactDetail(
    id,
    {
      contactType: ContactInformationContactTypes.PHONE,
      value: phone,
      subType: type,
      description,
    },
    auth,
  );

export interface AddCorrespondenceAddressArgs {
  id: string;
  addressLine1: string;
  addressLine2?: string | null;
  addressLine3?: string | null;
  addressLine4?: string | null;
  postCode: string;
  description?: string | null;
  isOverseasAddress?: boolean;
  overseasAddress?: string | null;
}

export const addCorrespondenceAddress = async (
  {
    id,
    addressLine1,
    addressLine2 = null,
    addressLine3 = null,
    addressLine4 = null,
    postCode,
    description = null,
    isOverseasAddress = false,
    overseasAddress = null,
  }: AddCorrespondenceAddressArgs,
  auth: CommonAuth,
): Promise<ContactDetail> =>
  addContactDetail(
    id,
    {
      contactType: ContactInformationContactTypes.ADDRESS,
      value: "",
      subType: ContactDetailsAddressTypes.CORRESPONDENCE_ADDRESS,
      description,
      addressExtended: {
        uprn: null,
        addressLine1,
        addressLine2,
        addressLine3,
        addressLine4,
        postCode,
        overseasAddress,
        isOverseasAddress,
      },
    },
    auth,
  );
