import { AxiosResponse } from "axios";
import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import { Patch, ResponsibleEntity, UpdatePatchesAndAreasRequest } from "./types";
export declare const getAllPatchesAndAreas: () => Promise<Array<Patch>>;
export declare const usePatchOrArea: (patchId: string, options?: AxiosSWRConfiguration<Patch>) => AxiosSWRResponse<Patch>;
export declare const getByPatchName: (patchName: string) => Promise<Patch>;
export declare const addResponsibleEntityToPatch: (patchId: string, responsibleEntityId: string, request: UpdatePatchesAndAreasRequest, patchVersion: string | null) => Promise<AxiosResponse<any, any, {}>>;
export declare const deletePatchesAndAreasResponsibilities: (patchId: string, responsibleEntityId: string) => Promise<void>;
/**
 * Replaces all the responsible entities for a Patch as set in the request
 * @param patchId - ID of Patch object
 * @param entities - List of people assigned to the Patch as responsible entities
 * @param versionNumber - Version of the patch object (from database)
 * @returns Promise with 204 No Content on success
 */
export declare const replacePatchResponsibleEntities: (patchId: string, entities: ResponsibleEntity[], versionNumber: number) => Promise<AxiosResponse>;
//# sourceMappingURL=service.d.ts.map