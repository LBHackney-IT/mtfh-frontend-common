import React, { ComponentPropsWithoutRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> {
    variant?: "base" | "center";
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export declare const PaginationControls: (props: any, ref: any) => JSX.Element;
export declare const PaginationSummary: (props: any, ref: any) => JSX.Element;
export interface PaginationButtonProps {
    variant?: "base" | "previous" | "next";
    active?: boolean;
}
export declare type PaginationButtonComponent = Polymorphic.ForwardRefComponent<"a", PaginationButtonProps>;
export declare const PaginationButton: PaginationButtonComponent;
