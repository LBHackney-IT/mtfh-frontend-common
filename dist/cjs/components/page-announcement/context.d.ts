import React, { Dispatch, FC } from "react";
export interface PageAnnouncementState {
    heading: string;
    description?: string;
    variant?: "success" | "warning" | "info";
}
export declare type PageAnnouncementActions = {
    type: "ADD";
    payload: PageAnnouncementState;
} | {
    type: "CLEAR";
};
export interface PageAnnouncementContextState {
    state?: PageAnnouncementState;
    dispatch: Dispatch<PageAnnouncementActions>;
}
export declare const PageAnnouncementContext: React.Context<PageAnnouncementContextState>;
interface UsePageAnnouncementValue {
    state?: PageAnnouncementState;
    addAnnouncement: Dispatch<PageAnnouncementState>;
    clearAnnouncement: Dispatch<void>;
}
export declare const usePageAnnouncement: () => UsePageAnnouncementValue;
interface PageAnnouncementProviderProps {
    sessionKey?: string;
}
export declare const PageAnnouncementProvider: FC<PageAnnouncementProviderProps>;
export {};
