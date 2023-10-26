import { Patch, ResponsibleEntity, UpdatePatchesAndAreasRequest } from "./types";

export const mockResponsibilityEntity: ResponsibleEntity = {
  id: "5f82d558-f2c6-4b1c-95dd-0422ab2b11cd",
  name: "Charlie Doe",
  responsibleType: "HousingOfficer",
  contactDetails: {
    emailAddress: "test@hackney.gov.uk",
  },
};

export const mockPatch: Patch = {
  id: "2fa90983-94b7-4270-a485-dc42ede5af17",
  parentId: "bcf2cabe-bccc-4bfd-a10c-2fc6b58e9782",
  name: "SN4",
  patchType: "patch",
  domain: "Housing Management",
  responsibleEntities: [mockResponsibilityEntity],
  versionNumber: 3,
};

export const mockUpdatePatchesAndAreasRequest: UpdatePatchesAndAreasRequest = {
  id: "5f82d558-f2c6-4b1c-95dd-0422ab2b11cd",
  name: "Jane Doe",
  responsibleType: "HousingOfficer",
};
