import { Patch } from "@mtfh/common/lib/api/patch/v1/types";

export type AssetType = "Dwelling" | "LettableNonDwelling" | string;

export interface Asset {
  id: string;
  assetId: string;
  assetType: AssetType;
  rootAsset?: string;
  parentAssetIds?: string;
  isActive?: boolean;

  assetLocation: AssetLocation;
  assetAddress: AssetAddress;
  assetManagement: AssetManagement;
  assetCharacteristics: AssetCharacteristics;
  tenure: AssetTenure | null;
  versionNumber?: number;
  patches?: Patch[];
}

export interface AssetLocation {
  floorNo?: string;
  totalBlockFloors?: number;
  parentAssets?: ParentAsset[];
}

export interface ParentAsset {
  type?: string;
  id?: string;
  name?: string;
}

export interface AssetAddress {
  uprn: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  postCode: string;
  postPreamble?: string;
}

export interface AssetManagement {
  agent?: string;
  areaOfficeName?: string;
  isCouncilProperty?: boolean;
  managingOrganisation?: string;
  managingOrganisationId?: string;
  owner?: string;
  isTMOManaged?: boolean;
  propertyOccupiedStatus?: string;
  propertyOccupiedStatusReason?: string;
  isNoRepairsMaintenance?: boolean;
  councilTaxType?: string;
  councilTaxLiability?: string;
  isTemporaryAccomodation?: boolean;
  readyToLetDate?: boolean;
}

export interface AssetCharacteristics {
  numberOfBedrooms?: number;
  numberOfLifts?: number;
  numberOfLivingRooms?: number;
  windowType?: string;
  yearConstructed?: string;
  assetPropertyFolderLink?: string;
  epcExpiryDate?: string;
  fireSafetyCertificateExpiryDate?: string;
  gasSafetyCertificateExpiryDate?: string;
  elecCertificateExpiryDate?: string;
  hasStairs?: boolean;
  numberOfStairs?: number;
  hasRampAccess?: boolean;
  hasCommunalAreas?: boolean;
  hasPrivateBathroom?: boolean;
  numberOfBathrooms?: number;
  BathroomFloor?: string;
  hasPrivateKitchen?: boolean;
  numberOfKitchens?: number;
  kitchenfloor?: string;
  alertSystemExpiryDate?: string;
  epcScore?: string;
  numberOfFloors?: number;
  accessibilityComments?: string;
  numberOfBedSpaces?: number;
  numberOfCots?: number;
  sleepingArrangementNotes?: string;
  numberOfShowers?: number;
  kitchenNotes?: string;
  isStepFree?: boolean;
  bathroomNotes?: string;
  livingRoomNotes?: string;
}

export interface AssetTenure {
  id: string;
  paymentReference?: string;
  type?: string;
  startOfTenureDate?: string;
  endOfTenureDate?: string;
  isActive?: boolean;
}

export interface EditAssetAddressRequest {
  assetAddress: AssetAddress;
}

export interface CreateAssetAddressRequest {
  asset: Asset;
}
