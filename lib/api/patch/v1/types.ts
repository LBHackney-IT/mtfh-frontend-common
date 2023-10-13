export enum ResponsibleType {
  HousingOfficer,
  HousingAreaManager,
}

export interface ResponsibleEntity {
  id: string;
  name: string;
  responsibleType: ResponsibleType;
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
  responsibleType: ResponsibleType;
}
