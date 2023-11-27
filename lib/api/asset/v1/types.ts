export type AssetType = "Dwelling" | "LettableNonDwelling" | string;

export enum RentGroup {
  GPS,
  HGF,
  HRA,
  LMW,
  LSC,
  RSL,
  TAG,
  TAH,
  TRA,
}

export interface Asset {
  id: string;
  patchId: string;
  areaId: string;
  assetId: string;
  assetType: AssetType;
  rentGroup: RentGroup | null;
  assetLocation: AssetLocation;
  assetAddress: AssetAddress;
  assetManagement: AssetManagement;
  assetCharacteristics: AssetCharacteristics;
  tenure: AssetTenure | null;
  rootAsset: string;
  parentAssetIds: string;
  boilerHouseId: string;
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
  propertyOccupiedStatus?: string;
  propertyOccupiedStatusReason?: string;
  isNoRepairsMaintenance?: boolean;
  councilTaxType?: string;
  councilTaxLiability?: string;
  isTemporaryAccomodation?: boolean;
  readyToLetDate?: boolean;
}

export interface AssetCharacteristics {
  numberOfBedrooms: number | null;
  numberOfSingleBeds: number | null;
  numberOfDoubleBeds: number | null;
  numberOfLifts: number | null;
  numberOfLivingRooms: number | null;
  numberOfFloors: number | null;
  totalBlockFloors: number | null;
  heating: string | null;
  windowType: string | null;
  propertyFactor: string | null;
  yearConstructed: string | null;
  architecturalType: string | null;
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

export interface CreateNewAssetRequest {
  id: string;
  assetId: string;
  areaId?: string;
  patchId?: string;
  assetType: string;
  isActive: boolean;
  parentAssetIds: string;
  assetLocation: {
    floorNo: string;
    totalBlockFloors: number | null;
    parentAssets: ParentAsset[];
  };
  assetAddress: {
    uprn: string;
    postPreamble: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    postCode: string;
  };
  assetManagement: {
    agent: string;
    areaOfficeName: string;
    isCouncilProperty: boolean;
    managingOrganisation: string;
    isTMOManaged: boolean;
    managingOrganisationId: string;
  };
  assetCharacteristics: {
    numberOfBedrooms: number | null;
    numberOfLivingRooms: number | null;
    yearConstructed: string;
    windowType: string;
    numberOfLifts: number | null;
  };
  addDefaultSorContracts: boolean;
}

export interface GetAssetRelationshipsResponse {
  childAssets: Asset[];
}

export interface GetAssetParentsResponse {
  parentAssets: Asset[];
}

export interface PatchAssetBoilerHouseRequest {
  boilerHouseId: string;
}

export interface PatchAssetLbhOwnershipRequest {
  assetManagement: AssetManagement;
}
