import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface TextProps {
    variant?: "base" | "regular" | "bold";
    size?: "base" | "xs" | "sm" | "md" | "lg";
}
export declare type TextComponent = Polymorphic.ForwardRefComponent<"p", TextProps>;
export declare const Text: TextComponent;
