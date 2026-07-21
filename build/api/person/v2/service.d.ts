import type { Person } from "./types";
export interface PostPersonRequestData extends Omit<Person, "id" | "tenures"> {
    reason: string;
}
export declare const addPerson: (data: PostPersonRequestData) => Promise<Person>;
//# sourceMappingURL=service.d.ts.map