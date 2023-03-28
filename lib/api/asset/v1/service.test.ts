import { config } from "@mtfh/common/lib/config";
import { axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import { createAsset, patchAsset, useAsset } from "./service";
import { Asset, CreateAssetAddressRequest, EditAssetAddressRequest } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: { patch: jest.fn(), post: jest.fn() },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

test("patchAsset: the API is called with the right parameters", async () => {
  const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
  const assetVersion = "3";
  const assetAddress: EditAssetAddressRequest = {
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

  patchAsset(assetGuid, assetAddress, assetVersion);

  expect(axiosInstance.patch).toBeCalledWith(
    `${config.assetApiUrlV1}/assets/${assetGuid}/address`,
    assetAddress,
    { headers: { "If-Match": assetVersion } },
  );
});

test("useAsset: the API is called with the right parameters", async () => {
  const returnedValue: Asset = {
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
      propertyOccupiedStatus: "",
      propertyOccupiedStatusReason: "",
      isNoRepairsMaintenance: false,
      councilTaxType: "",
      councilTaxLiability: "",
      isTemporaryAccomodation: false,
      readyToLetDate: false,
    },
    assetCharacteristics: {
      numberOfBedrooms: 2,
      numberOfLifts: 1,
      numberOfLivingRooms: 1,
      windowType: "DBL",
      yearConstructed: "2077",
      assetPropertyFolderLink: "",
      epcExpiryDate: "",
      fireSafetyCertificateExpiryDate: "",
      gasSafetyCertificateExpiryDate: "",
      elecCertificateExpiryDate: "",
      hasStairs: false,
      numberOfStairs: null,
      hasRampAccess: false,
      hasCommunalAreas: false,
      hasPrivateBathroom: false,
      numberOfBathrooms: null,
      BathroomFloor: "",
      hasPrivateKitchen: false,
      numberOfKitchens: null,
      kitchenfloor: "",
      alertSystemExpiryDate: "",
      epcScore: "",
      numberOfFloors: null,
      accessibilityComments: "",
      numberOfBedSpaces: null,
      numberOfCots: null,
      sleepingArrangementNotes: "",
      numberOfShowers: null,
      kitchenNotes: "",
      isStepFree: false,
      bathroomNotes: "",
      livingRoomNotes: "",
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
    isActive: false,
  };
  const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";

  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(returnedValue);

  const response = await useAsset(assetGuid, undefined);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.assetApiUrlV1}/assets/${assetGuid}`,
    undefined,
  );
  expect(response).toBe(returnedValue);
});

test("createAsset: the API is called with the right parameters", async () => {
  const asset: Asset = {
    id: "3f44819f-f3b4-4363-88b6-4575aa4bc5b0",
    assetId: "1234",
    parentAssetIds: "",
    assetType: "Dwelling",
    assetLocation: {
      floorNo: "0",
      totalBlockFloors: 0,
      parentAssets: [],
    },
    assetAddress: {
      uprn: "100023022032",
      addressLine1: "20000 Butfield House Stevens Avenue",
      addressLine2: "London",
      addressLine3: "",
      addressLine4: "",
      postCode: "E9 6RS",
      postPreamble: "",
    },
    assetManagement: {
      agent: "Sanctuary Housing Association",
      areaOfficeName: "",
      isCouncilProperty: false,
      managingOrganisation: "London Borough of Hackney",
      isTMOManaged: false,
      managingOrganisationId: "",
      owner: "",
      propertyOccupiedStatus: "",
      propertyOccupiedStatusReason: "",
      isNoRepairsMaintenance: false,
      councilTaxType: "",
      councilTaxLiability: "",
      isTemporaryAccomodation: false,
      readyToLetDate: false,
    },
    assetCharacteristics: {
      numberOfBedrooms: 1,
      numberOfLifts: 0,
      numberOfLivingRooms: 0,
      windowType: "DBL",
      yearConstructed: "0",
      assetPropertyFolderLink: "",
      epcExpiryDate: "",
      fireSafetyCertificateExpiryDate: "",
      gasSafetyCertificateExpiryDate: "",
      elecCertificateExpiryDate: "",
      hasStairs: false,
      numberOfStairs: null,
      hasRampAccess: false,
      hasCommunalAreas: false,
      hasPrivateBathroom: false,
      numberOfBathrooms: null,
      BathroomFloor: "",
      hasPrivateKitchen: false,
      numberOfKitchens: null,
      kitchenfloor: "",
      alertSystemExpiryDate: "",
      epcScore: "",
      numberOfFloors: null,
      accessibilityComments: "",
      numberOfBedSpaces: null,
      numberOfCots: null,
      sleepingArrangementNotes: "",
      numberOfShowers: null,
      kitchenNotes: "",
      isStepFree: false,
      bathroomNotes: "",
      livingRoomNotes: "",
    },
    rootAsset: "",
    isActive: false,
    tenure: null,
    versionNumber: null,
    patches: [],
  };

  const body: CreateAssetAddressRequest = {
    asset,
  };

  createAsset(body);

  expect(axiosInstance.post).toBeCalledWith(`${config.assetApiUrlV1}/assets/`, body);
});
