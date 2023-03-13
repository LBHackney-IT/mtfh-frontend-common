import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import type { Person, TenureSummary } from "./types";
export declare const usePerson: (id: string | null, options?: AxiosSWRConfiguration<Person>) => AxiosSWRResponse<Person>;
export interface PostPersonRequestData extends Omit<Person, "id" | "tenures"> {
    reason: string;
    tenures: Omit<TenureSummary, "isActive">[];
}
export declare const addPerson: (data: PostPersonRequestData) => Promise<Person>;
export declare type PatchPersonRequestData = Partial<Omit<Person, "id">> & Pick<Person, "id">;
export declare const editPerson: ({ id, ...data }: PatchPersonRequestData) => Promise<Person>;
