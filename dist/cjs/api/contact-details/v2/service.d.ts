import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import { ContactDetail, ContactDetailsPhoneTypes, ContactInformation } from "./types";
export interface ContactDetailsResponse {
    results: ContactDetail[];
}
export declare const useContactDetails: (id: string, options?: AxiosSWRConfiguration<ContactDetailsResponse>) => AxiosSWRResponse<ContactDetailsResponse>;
export declare const addContactDetail: (id: string, data: ContactInformation) => Promise<ContactDetail>;
export declare const addEmailContact: (id: string, email: string, description?: string) => Promise<ContactDetail>;
export declare const addPhoneContact: (id: string, phone: string, type: ContactDetailsPhoneTypes, description?: string) => Promise<ContactDetail>;
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
export declare const addCorrespondenceAddress: ({ id, addressLine1, addressLine2, addressLine3, addressLine4, postCode, description, isOverseasAddress, overseasAddress, }: AddCorrespondenceAddressArgs) => Promise<ContactDetail>;
