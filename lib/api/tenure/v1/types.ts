import { AssetType } from "../../asset/v1/types";
import { PersonType } from "../../person/v1/types";

export interface TenureDetailsProperties {
  title: string;
}

export interface TenureType {
  code: string;
  description: string;
}

export interface HouseholdMember {
  id: string;
  type: string;
  fullName: string;
  isResponsible: boolean;
  dateOfBirth: string;
  personTenureType?: PersonType;
}

export interface TenureAsset {
  id: string;
  type: AssetType;
  fullAddress: string;
  uprn: string;
  propertyReference: string | null;
  isTemporaryAccommodation?: boolean | null;
}

export interface AccountType {
  code: string;
  description: string;
}

export interface Charges {
  rent: number;
  currentBalance: number;
  billingFrequency: string;
  paymentReference: string;
  rentGroupCode: string;
  rentGroupDescription: string;
  serviceCharge: number;
  otherCharges: number;
  combinedServiceCharges: number;
  combinedRentCharges: number;
  tenancyInsuranceCharge: number;
  originalRentCharge: number;
  originalServiceCharge: number;
  storageCharge: number | null;
  rentAdjustment: number | null;
  rentAdjustmentReason: string | null;
  isSuspended: boolean | null;
}

export interface AgreementType {
  code: string;
  description: string;
}

export interface NoticeType {
  type: string;
  servedDate: string;
  expiryDate: string;
  endDate: string;
  effectiveDate: string;
}

export interface LegacyReference {
  name: string;
  value: string;
}
export interface FurtherAccountInformation {
  isRentAccountRequired: boolean | null;
  noRentAccountReason: string | null;
  rentLetterSentDate: Date | null;
  rentCardGivenDate: Date | null;
  tenureAcceptedDate: Date | null;
  tenureRefusedDate: Date | null;
  isSection208NoticeSent: boolean | null;
}

export interface TemporaryAccommodationOfficer {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
}

export interface TemporaryAccommodationInfo {
  bookingStatus?: string | null;
  assignedOfficer?: TemporaryAccommodationOfficer | null;
}

export interface Tenure {
  id: string;
  paymentReference: string;
  householdMembers: HouseholdMember[];
  tenuredAsset: TenureAsset;
  charges: Charges;
  startOfTenureDate: string;
  endOfTenureDate: string | null;
  tenureType: TenureType;
  tenureSource: string | null;
  isActive: boolean;
  isTenanted: boolean | null;
  terminated: {
    isTerminated: boolean;
    reasonForTermination: string;
  };
  successionDate: string;
  evictionDate: string;
  potentialEndDate: string;
  isMutualExchange: boolean;
  informHousingBenefitsForChanges: boolean;
  isSublet: boolean;
  subletEndDate: string;
  notices: NoticeType[];
  legacyReferences: LegacyReference[];
  agreementType: AgreementType;
  fundingSource: string | null;
  numberOfAdultsInProperty: number | null;
  numberOfChildrenInProperty: number | null;
  hasOffsiteStorage: boolean | null;
  furtherAccountInformation: FurtherAccountInformation | null;
  rentCostCentre: string;
  subsidiaryAccountsReferences: string[];
  masterAccountTenureReference: string;
  accountType: AccountType;
  tempAccommodationInfo?: TemporaryAccommodationInfo;
  etag?: string;
}

export type FetchState = "loading" | "error" | "invalid" | "done";
