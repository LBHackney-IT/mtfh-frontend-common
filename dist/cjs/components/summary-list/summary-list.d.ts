import React, { ComponentPropsWithoutRef, ReactElement } from "react";
import "./styles.scss";
export interface SummaryListItemProps extends ComponentPropsWithoutRef<"div"> {
    title: string;
    children?: ReactElement | string | string[] | null;
    actions?: ReactElement | ReactElement[];
    overrides?: number[];
    fallback?: string;
}
export declare const SummaryListItem: React.ForwardRefExoticComponent<SummaryListItemProps & React.RefAttributes<HTMLDivElement>>;
declare type SummaryListChild = ReactElement<SummaryListItemProps> | ReactElement<SummaryListItemProps>[] | null;
export interface SummaryListProps extends ComponentPropsWithoutRef<"dl"> {
    variant?: "base" | "border" | "inline";
    overrides?: number[];
    children: SummaryListChild | SummaryListChild[];
}
export declare const SummaryList: React.ForwardRefExoticComponent<SummaryListProps & React.RefAttributes<HTMLDListElement>>;
export {};
