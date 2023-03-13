export interface ResponsibleEntity {
    id: string;
    name: string;
    responsibleType: string;
}
export interface Patch {
    id: string;
    parentId: string;
    name: string;
    patchType: string;
    domain: string;
    responsibleEntities: ResponsibleEntity[];
}
