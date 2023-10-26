export interface ResponsibleEntityContactDetails {
  emailAddress: string;
}
export interface ResponsibleEntity {
  id: string;
  name: string;
  responsibleType: string;
  contactDetails: ResponsibleEntityContactDetails;
}

export interface Patch {
  id: string;
  parentId: string;
  name: string;
  patchType: string;
  domain: string;
  responsibleEntities: ResponsibleEntity[];
  versionNumber?: number;
}

export interface UpdatePatchesAndAreasRequest {
  id: string;
  name: string;
  responsibleType: string;
}
