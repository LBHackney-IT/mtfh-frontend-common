import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export declare const SimplePagination: React.ForwardRefExoticComponent<
  Pick<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "key" | keyof React.HTMLAttributes<HTMLElement>
  > &
    React.RefAttributes<HTMLElement>
>;
export interface SimplePaginationButtonProps {
  title?: string;
  variant: "previous" | "next";
}
export type SimplePaginationButtonComponent = Polymorphic.ForwardRefComponent<
  "a",
  SimplePaginationButtonProps
>;
export declare const SimplePaginationButton: SimplePaginationButtonComponent;
//# sourceMappingURL=simple-pagination.d.ts.map
