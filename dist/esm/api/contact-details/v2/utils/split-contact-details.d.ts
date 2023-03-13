import { ContactDetail } from "../types";
interface SplitContactDetailsByType {
    emails: ContactDetail[];
    phones: ContactDetail[];
    addresses: ContactDetail[];
}
export declare const splitContactDetailsByType: (contacts: ContactDetail[]) => SplitContactDetailsByType;
export {};
