import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface ButtonProps {
    variant?: "primary" | "secondary" | "chevron" | "add";
    isLoading?: boolean;
    isDisabled?: boolean;
    loadingText?: string;
    override?: number;
}
export declare type ButtonComponent = Polymorphic.ForwardRefComponent<"button", ButtonProps>;
export declare const Button: ButtonComponent;
