import { Asset, CreateNewAssetRequest, EditAssetAddressRequest } from "./types";

export const mockAsset: Asset = {
  id: "15adc44b-6fde-46e8-af9c-e18b1495c9ab",
  assetId: "100021045676",
  assetType: "LettableNonDwelling",
  rootAsset: "",
  parentAssetIds: "",
  assetLocation: {
    floorNo: "4",
    totalBlockFloors: 6,
    parentAssets: [{ id: "123", name: "asset", type: "asset-type" }],
  },
  assetAddress: {
    uprn: "100021045676",
    addressLine1: "FLAT B",
    addressLine2: "51 GREENWOOD ROAD",
    addressLine3: "HACKNEY",
    addressLine4: "LONDON",
    postCode: "E8 1NT",
    postPreamble: "",
  },
  assetManagement: {
    agent: "agent",
    areaOfficeName: "areaOfficeName",
    isCouncilProperty: true,
    managingOrganisation: "org",
    managingOrganisationId: "456",
    owner: "owner",
    isTMOManaged: true,
  },
  assetCharacteristics: {
    numberOfBedrooms: 2,
    numberOfLifts: 1,
    numberOfLivingRooms: 1,
    windowType: "DBL",
    yearConstructed: "2077",
    numberOfSingleBeds: 1,
    numberOfDoubleBeds: 1,
    numberOfFloors: 2,
    totalBlockFloors: 5,
    heating: "FCB",
    propertyFactor: "4.5",
    architecturalType: "PRE45MR-FLT",
  },
  tenure: null,
  versionNumber: 2,
  patches: [
    {
      id: "bd0a8e2b-c3b5-4628-aa33-8e7509d5eac6",
      parentId: "8d4fb05d-3ff5-48b7-a17a-71fcb27a66a8",
      name: "SN4",
      patchType: "patch",
      domain: "MMH",
      responsibleEntities: [],
    },
  ],
};

export const mockCreateNewAssetRequest: CreateNewAssetRequest = {
  id: "3f44819f-f3b4-4363-88b6-4575aa4bc5b0",
  assetId: "1234",
  parentAssetIds: "",
  assetType: "Dwelling",
  isActive: true,
  assetLocation: {
    floorNo: "",
    totalBlockFloors: 0,
    parentAssets: [],
  },
  assetAddress: {
    uprn: "100023022032",
    postPreamble: "",
    addressLine1: "20000 Butfield House Stevens Avenue",
    addressLine2: "London",
    addressLine3: "",
    addressLine4: "",
    postCode: "E9 6RS",
  },
  assetManagement: {
    agent: "Sanctuary Housing Association",
    areaOfficeName: "",
    isCouncilProperty: true,
    managingOrganisation: "London Borough of Hackney",
    isTMOManaged: false,
    managingOrganisationId: "c01e3146-e630-c2cd-e709-18ef57bf3724",
  },
  assetCharacteristics: {
    numberOfBedrooms: 1,
    numberOfLifts: 0,
    numberOfLivingRooms: 0,
    windowType: "DBL",
    yearConstructed: "0",
  },
  patches: undefined,
};

export const mockEditAssetAddressRequest: EditAssetAddressRequest = {
  assetAddress: {
    uprn: "100021045676",
    addressLine1: "FLAT B",
    addressLine2: "51 GREENWOOD ROAD",
    addressLine3: "HACKNEY",
    addressLine4: "LONDON",
    postCode: "E8 1NT",
    postPreamble: "",
  },
};
