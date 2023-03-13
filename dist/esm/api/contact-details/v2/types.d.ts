export declare type ContactDetail = {
    id: string;
    targetId: string;
    targetType: ContactDetailTargetTypes;
    contactInformation: ContactInformation;
    sourceServiceArea: SourceServiceArea;
    recordValidUntil: string;
    isActive: boolean;
    createdBy: CreatedBy;
};
export declare type ContactDetails = {
    results: ContactDetail[];
};
export declare type ContactInformation = {
    contactType: ContactInformationContactTypes;
    subType?: ContactInformationSubTypes | null;
    value: string;
    description?: string | null;
    addressExtended?: ContactInformationAddressExtended | null;
};
export declare type SourceServiceArea = {
    area: string;
    isDefault: boolean;
};
export declare type CreatedBy = {
    createdBy: string;
    id: string;
    fullName: string;
    email: string;
};
export declare enum ContactDetailTargetTypes {
    PERSON = "person",
    ORGANISATION = "organisation"
}
export declare enum ContactInformationContactTypes {
    PHONE = "phone",
    EMAIL = "email",
    ADDRESS = "address"
}
export declare enum ContactDetailsPhoneTypes {
    MOBILE = "mobile",
    HOME = "home",
    WORK = "work",
    OTHER = "other"
}
export declare enum ContactDetailsAddressTypes {
    CORRESPONDENCE_ADDRESS = "correspondenceAddress"
}
export declare type ContactInformationSubTypes = ContactDetailsPhoneTypes | ContactDetailsAddressTypes;
export declare type ContactInformationAddressExtended = {
    uprn: string | null;
    isOverseasAddress: boolean;
    overseasAddress: string | null;
    addressLine1: string;
    addressLine2: string | null;
    addressLine3: string | null;
    addressLine4: string | null;
    postCode: string;
};
