import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export declare type StatusBoxVariant = "success" | "warning" | undefined;
interface StatusBoxProps {
    title: string;
    variant?: StatusBoxVariant;
}
export declare type StatusBoxComponent = Polymorphic.ForwardRefComponent<"div", StatusBoxProps>;
export declare const StatusBox: StatusBoxComponent;
export {};
