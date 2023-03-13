import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface ListProps {
    variant?: "base" | "bullets" | "numbers";
}
export declare type ListComponent = Polymorphic.ForwardRefComponent<"ul", ListProps>;
export declare const List: ListComponent;
