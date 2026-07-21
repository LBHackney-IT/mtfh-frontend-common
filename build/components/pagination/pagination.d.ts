import React, { ComponentPropsWithoutRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> {
  variant?: "base" | "center";
}
export declare const Pagination: React.ForwardRefExoticComponent<
  PaginationProps & React.RefAttributes<HTMLElement>
>;
export declare const PaginationControls: React.ForwardRefExoticComponent<
  Pick<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    "key" | keyof React.HTMLAttributes<HTMLUListElement>
  > &
    React.RefAttributes<HTMLUListElement>
>;
export declare const PaginationSummary: React.ForwardRefExoticComponent<
  Pick<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "key" | keyof React.HTMLAttributes<HTMLDivElement>
  > &
    React.RefAttributes<HTMLDivElement>
>;
export interface PaginationButtonProps {
  variant?: "base" | "previous" | "next";
  active?: boolean;
}
export type PaginationButtonComponent = Polymorphic.ForwardRefComponent<
  "a",
  PaginationButtonProps
>;
export declare const PaginationButton: PaginationButtonComponent;
//# sourceMappingURL=pagination.d.ts.map
