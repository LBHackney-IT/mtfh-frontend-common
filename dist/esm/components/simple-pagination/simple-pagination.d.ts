import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export declare const SimplePagination: (props: any, ref: any) => JSX.Element;
export interface SimplePaginationButtonProps {
    title?: string;
    variant: "previous" | "next";
}
export declare type SimplePaginationButtonComponent = Polymorphic.ForwardRefComponent<"a", SimplePaginationButtonProps>;
export declare const SimplePaginationButton: SimplePaginationButtonComponent;
