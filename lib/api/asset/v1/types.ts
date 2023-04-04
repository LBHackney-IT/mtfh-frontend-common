import { Patch } from "@mtfh/common/lib/api/patch/v1/types";

export type AssetType = "Dwelling" | "LettableNonDwelling" | string;

export interface Asset {
  id: string;
  assetId: string;
  assetType: AssetType;
  assetLocation: AssetLocation;
  assetAddress: AssetAddress;
  assetManagement: AssetManagement;
  assetCharacteristics: AssetCharacteristics;
  tenure: AssetTenure | null;
  rootAsset: string;
  parentAssetIds: string;
  patches?: Patch[];
  versionNumber?: number;
}

export interface AssetLocation {
  floorNo: string;
  totalBlockFloors: number;
  parentAssets: ParentAsset[];
}

export interface ParentAsset {
  type: string;
  id: string;
  name: string;
}

export interface AssetAddress {
  uprn: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  postCode: string;
  postPreamble: string;
}

export interface AssetManagement {
  agent: string;
  areaOfficeName: string;
  isCouncilProperty: boolean;
  managingOrganisation: string;
  managingOrganisationId: string;
  owner: string;
  isTMOManaged: boolean;
}

export interface AssetCharacteristics {
  numberOfBedrooms: number;
  numberOfLifts: number;
  numberOfLivingRooms: number;
  windowType: string;
  yearConstructed: string;
}

export interface AssetTenure {
  id: string;
  paymentReference: string;
  type: string;
  startOfTenureDate: string;
  endOfTenureDate: string;
  isActive: boolean;
}

export interface EditAssetAddressRequest {
  assetAddress: AssetAddress;
}

export interface NewAsset {
  id: string
  assetId: string
  assetType: string
  parentAssetIds: string
  assetLocation: {
    floorNo: string,
    totalBlockFloors: number,
    parentAssets: any[],
  },
  assetAddress: {
    uprn: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    addressLine4: string,
    postCode: string,
    postPreamble: string,
  },
  assetManagement: {
    agent: string,
    areaOfficeName: string,
    isCouncilProperty: boolean,
    managingOrganisation: string,
    isTMOManaged: boolean,
    managingOrganisationId: string,
  },
  assetCharacteristics: {
    numberOfBedrooms: number,
    numberOfLivingRooms: number,
    yearConstructed: string,
    windowType: string,
    numberOfLifts: number,
  },
}
