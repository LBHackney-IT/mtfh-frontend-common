import React, { ComponentPropsWithoutRef } from "react";
import { PageAnnouncementState } from "./context";
import "./styles.scss";
interface PageAnnouncementProps extends Partial<PageAnnouncementState>, ComponentPropsWithoutRef<"section"> {
}
export declare const PageAnnouncement: React.ForwardRefExoticComponent<PageAnnouncementProps & React.RefAttributes<HTMLElement>>;
export {};
