import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export declare type BoxVariant = "success" | "warning" | undefined;
interface BoxProps {
    variant?: BoxVariant;
}
export declare type BoxComponent = Polymorphic.ForwardRefComponent<"div", BoxProps>;
export declare const Box: BoxComponent;
export {};
