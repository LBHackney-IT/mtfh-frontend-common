// import { config } from "../../../config";
// import { axiosInstance, useAxiosSWR } from "../../../http";
// import { patchAsset, useAsset } from "./service";
// import { Asset, EditAssetAddressRequest } from "./types";

// jest.mock("../../../http", () => ({
//   // ...jest.requireActual("../../../http"),
//   axiosInstance: { patch: jest.fn() },
//   useAxiosSWR: jest.fn(),
//   mutate: jest.fn(),
// }));

// test("patchAsset: the API is called with the right parameters", async () => {
//   const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
//   const assetVersion = "3";
//   const assetAddress: EditAssetAddressRequest = {
//     assetAddress: {
//       uprn: "100021045676",
//       addressLine1: "FLAT B",
//       addressLine2: "51 GREENWOOD ROAD",
//       addressLine3: "HACKNEY",
//       addressLine4: "LONDON",
//       postCode: "E8 1NT",
//       postPreamble: "",
//     },
//   };

//   patchAsset(assetGuid, assetAddress, assetVersion);

//   expect(axiosInstance.patch).toBeCalledWith(
//     `${config.assetApiUrlV1}/assets/${assetGuid}/address`,
//     assetAddress,
//     { headers: { "If-Match": assetVersion } },
//   );
// });

// test("useAsset: the API is called with the right parameters", async () => {
//   const returnedValue: Asset = {
//     id: "15adc44b-6fde-46e8-af9c-e18b1495c9ab",
//     assetId: "100021045676",
//     assetType: "LettableNonDwelling",
//     rootAsset: "",
//     parentAssetIds: "",
//     assetLocation: {
//       floorNo: 4,
//       totalBlockFloors: 6,
//       parentAssets: [{ id: "123", name: "asset", type: "asset-type" }],
//     },
//     assetAddress: {
//       uprn: "100021045676",
//       addressLine1: "FLAT B",
//       addressLine2: "51 GREENWOOD ROAD",
//       addressLine3: "HACKNEY",
//       addressLine4: "LONDON",
//       postCode: "E8 1NT",
//       postPreamble: "",
//     },
//     assetManagement: {
//       agent: "agent",
//       areaOfficeName: "areaOfficeName",
//       isCouncilProperty: true,
//       managingOrganisation: "org",
//       managingOrganisationId: "456",
//       owner: "owner",
//       isTMOManaged: true,
//     },
//     assetCharacteristics: {
//       numberOfBedrooms: 2,
//       numberOfLifts: 1,
//       numberOfLivingRooms: 1,
//       windowType: "DBL",
//       yearConstructed: "2077",
//     },
//     tenure: null,
//     versionNumber: 2,
//     patches: [
//       {
//         id: "bd0a8e2b-c3b5-4628-aa33-8e7509d5eac6",
//         parentId: "8d4fb05d-3ff5-48b7-a17a-71fcb27a66a8",
//         name: "SN4",
//         patchType: "patch",
//         domain: "MMH",
//         responsibleEntities: [],
//       },
//     ],
//   };
//   const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";

//   (useAxiosSWR as jest.Mock).mockResolvedValueOnce(returnedValue);

//   const response = await useAsset(assetGuid, undefined);
//   expect(useAxiosSWR).toBeCalledWith(
//     `${config.assetApiUrlV1}/assets/${assetGuid}`,
//     undefined,
//   );
//   expect(response).toBe(returnedValue);
// });
