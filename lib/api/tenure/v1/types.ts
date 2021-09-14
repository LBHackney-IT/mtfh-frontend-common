export interface TenureDetailsProperties {
  title: string;
}

// Once other possible param values are confirmed, we can reuse this for TenureType code
export enum TenureTypeCode {
  INT = 'INT',
}

export interface TenureType {
  code: string;
  description: string;
}

export enum TenureAssetType {
  DWELLING = 'dwelling',
  GARAGE = 'garage',
}

export type PersonTenureType =
  | 'Tenant'
  | 'Leaseholder'
  | 'Freeholder'
  | 'HouseholdMember';

export interface HouseholdMember {
  id: string;
  type: string;
  fullName: string;
  isResponsible: boolean;
  dateOfBirth: string;
  personTenureType?: PersonTenureType;
}

export interface TenureAsset {
  id: string;
  type: string;
  fullAddress: string;
  uprn: string;
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

export interface LegacyReferences {
  name: string;
  value: string;
}

export interface TenureSectionProps {
  id: string;
  tenuredAsset: TenureAsset;
  startOfTenureDate: string;
  endOfTenureDate: string | null;
  tenureType: TenureType;
  isActive: boolean;
}
export interface Tenure extends TenureSectionProps {
  accountType: AccountType;
  paymentReference: string;
  propertyReference: string;
  householdMembers: HouseholdMember[];
  charges: Charges;
  tenureType: TenureType;
  isTenanted: boolean;
  terminated: {
    isTerminated: boolean;
    reasonForTermination: string;
  };
  successionDate: string;
  agreementType: AgreementType;
  subsidiaryAccountsReferences: string[];
  masterAccountTenureReference: string;
  evictionDate: string;
  potentialEndDate: string;
  notices: NoticeType[];
  legacyReferences: LegacyReferences[];
  rentCostCentre: string;
  isMutualExchange: boolean;
  informHousingBenefitsForChanges: boolean;
  isSublet: boolean;
  subletEndDate: string;
}

export type FetchState = 'loading' | 'error' | 'invalid' | 'done';
