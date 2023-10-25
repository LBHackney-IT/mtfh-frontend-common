import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import { mockUpdatePatchesAndAreasRequest } from "./mocks";
import {
  addResponsibleEntityToPatch,
  deletePatchesAndAreasResponsibilities,
  getAllPatchesAndAreas,
  getPatchOrAreaById,
  replacePatchResponsibleEntities,
} from "./service";
import { ResponsibleEntity } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: {
    get: jest.fn().mockImplementation(() => Promise.resolve({ data: [] })),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

describe("when getAllPatchesAndAreas is called", () => {
  test("the request should be sent to the correct URL with the expected headers", async () => {
    await getAllPatchesAndAreas();

    expect(axiosInstance.get).toBeCalledWith(
      `${config.patchesAndAreasApiUrlV1}/patch/all`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});

describe("when get patch or area by id is called", () => {
  test("the request should be sent to the correct URL with the expected headers", async () => {
    const patchId = "2fa90983-94b7-4270-a485-dc42ede5af17";
    await getPatchOrAreaById(patchId);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.patchesAndAreasApiUrlV1}/patch/${patchId}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});

describe("when addResponsibleEntityToPatch is called", () => {
  test("the request should be sent to the correct URL with the expected headers and request", async () => {
    const patchId = "2fa90983-94b7-4270-a485-dc42ede5af17";
    const responsibleEntityId = "5f82d558-f2c6-4b1c-95dd-0422ab2b11cd";
    const patchVersion = "3";

    await addResponsibleEntityToPatch(
      patchId,
      responsibleEntityId,
      mockUpdatePatchesAndAreasRequest,
      patchVersion,
    );

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`,
      mockUpdatePatchesAndAreasRequest,
      { headers: { "If-Match": patchVersion } },
    );
  });
});

describe("when deletePatchesAndAreasResponsibilities is called", () => {
  test("the request should be sent to the correct URL with the expected headers and request", async () => {
    const patchId = "2fa90983-94b7-4270-a485-dc42ede5af17";
    const responsibleEntityId = "5f82d558-f2c6-4b1c-95dd-0422ab2b11cd";

    deletePatchesAndAreasResponsibilities(patchId, responsibleEntityId);

    expect(axiosInstance.delete).toBeCalledWith(
      `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntity/${responsibleEntityId}`,
    );
  });
});

describe("when replacePatchResponsibleEntities is called", () => {
  test("the request should be sent to the correct URL with the expected headers and request object", async () => {
    const patchId = "2fa90983-94b7-4270-a485-dc42ede5af17";
    const patchVersion = 3;

    await replacePatchResponsibleEntities(
      patchId,
      [mockUpdatePatchesAndAreasRequest as ResponsibleEntity],
      patchVersion,
    );

    expect(axiosInstance.put).toBeCalledWith(
      `${config.patchesAndAreasApiUrlV1}/patch/${patchId}/responsibleEntities`,
      [mockUpdatePatchesAndAreasRequest],
      { headers: { "If-Match": `"${patchVersion}"` } },
    );
  });
});
