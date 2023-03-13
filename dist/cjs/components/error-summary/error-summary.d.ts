import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface ErrorSummaryProps {
    id: string;
    title: string;
    description?: string;
    reFocus?: number;
    override?: number;
}
export declare type ErrorSummaryComponent = Polymorphic.ForwardRefComponent<"div", ErrorSummaryProps>;
export declare const ErrorSummary: ErrorSummaryComponent;
