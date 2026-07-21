"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUpdatePropertyPatchRequest =
  exports.mockEditAssetOwnershipRequest =
  exports.mockEditAssetBoilerHouseRequest =
  exports.mockEditAssetAddressRequest =
  exports.mockCreateNewAssetRequest =
  exports.mockAsset =
  exports.mockAssetLocation =
  exports.mockParentAsset =
  exports.mockAssetAddress =
  exports.mockAssetManagement =
  exports.mockAssetCharacteristics =
  exports.mockAssetTenure =
    void 0;
const types_1 = require("./types");
exports.mockAssetTenure = {
  id: "123",
  paymentReference: "123",
  type: "type",
  startOfTenureDate: "2020-01-01",
  endOfTenureDate: "2020-01-01",
  isActive: true,
};
exports.mockAssetCharacteristics = {
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
};
exports.mockAssetManagement = {
  agent: "London Borough of Hackney",
  areaOfficeName: "areaOfficeName",
  isCouncilProperty: false,
  managingOrganisation: "London Borough of Hackney",
  managingOrganisationId: "97dd3725-69c3-4adf-bd0f-523342abbd6f",
  owner: "ABC",
  isTMOManaged: false,
};
exports.mockAssetAddress = {
  uprn: "100021045676",
  addressLine1: "FLAT B",
  addressLine2: "51 GREENWOOD ROAD",
  addressLine3: "HACKNEY",
  addressLine4: "LONDON",
  postCode: "E8 1NT",
  postPreamble: "",
  neighbourhood: "NORTHEAST",
};
exports.mockParentAsset = {
  type: "LettableNonDwelling",
  id: "97dd3725-69c3-4adf-bd0f-523342abbd6f",
  name: "asset",
};
exports.mockAssetLocation = {
  floorNo: "4",
  totalBlockFloors: 6,
  parentAssets: [
    { id: "af3b672d-aafd-46ad-81ca-a747ee77b2fd", name: "asset", type: "asset-type" },
  ],
};
exports.mockAsset = {
  id: "15adc44b-6fde-46e8-af9c-e18b1495c9ab",
  areaId: "33366d51-4691-4e15-b3eb-1e09d185d4e0",
  patchId: "bb02e7e9-cf50-4b06-a53a-61de04aa2942",
  assetId: "100021045676",
  assetType: "LettableNonDwelling",
  rentGroup: types_1.RentGroup.HRA,
  rootAsset: "",
  parentAssetIds: "",
  assetLocation: exports.mockAssetLocation,
  assetAddress: exports.mockAssetAddress,
  assetManagement: exports.mockAssetManagement,
  assetCharacteristics: exports.mockAssetCharacteristics,
  tenure: exports.mockAssetTenure,
  versionNumber: 2,
  boilerHouseId: "",
};
exports.mockCreateNewAssetRequest = {
  id: "3f44819f-f3b4-4363-88b6-4575aa4bc5b0",
  assetId: "1234",
  areaId: "9671693d-9423-4c69-8fc1-71774b916f88",
  patchId: "acde55f5-6b2c-4d2e-9a74-c0cd78b55ec1",
  parentAssetIds: "",
  assetType: "Dwelling",
  rentGroup: types_1.RentGroup.HRA,
  isActive: true,
  assetLocation: exports.mockAssetLocation,
  assetAddress: exports.mockAssetAddress,
  assetManagement: exports.mockAssetManagement,
  assetCharacteristics: {
    numberOfBedrooms: 1,
    numberOfLifts: 0,
    numberOfLivingRooms: 0,
    windowType: "DBL",
    yearConstructed: "0",
  },
  addDefaultSorContracts: true,
};
exports.mockEditAssetAddressRequest = {
  assetAddress: {
    uprn: "100021045676",
    addressLine1: "FLAT B",
    addressLine2: "51 GREENWOOD ROAD",
    addressLine3: "HACKNEY",
    addressLine4: "LONDON",
    postCode: "E8 1NT",
    postPreamble: "",
    neighbourhood: "NORTHEAST",
  },
};
exports.mockEditAssetBoilerHouseRequest = {
  boilerHouseId: "3f44819f-f3b4-4363-88b6-4575aa4bc5b0",
};
exports.mockEditAssetOwnershipRequest = {
  assetManagement: {
    agent: "Hackney Homes",
    areaOfficeName: "Homerton (1) Panel Area Team",
    isCouncilProperty: true,
    managingOrganisation: "London Borough of Hackney",
    managingOrganisationId: "c01e3146-e630-c2cd-e709-18ef57bf3724",
    owner: "LBH",
    isTMOManaged: false,
    propertyOccupiedStatus: "OC",
    isNoRepairsMaintenance: true,
    councilTaxLiability: "",
    councilTaxType: "",
    propertyOccupiedStatusReason: "",
  },
};
exports.mockUpdatePropertyPatchRequest = {
  patchId: "88ed852c-2d7d-4293-8059-136aa9c7b7a5",
  areaId: "9278e2dd-b43f-4a93-9f58-cd85b392f8d7",
};
