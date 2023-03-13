import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface HeadingProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare type HeadingComponent = Polymorphic.ForwardRefComponent<"h1", HeadingProps>;
export declare const Heading: HeadingComponent;
