import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import "./styles.scss";
export interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
    id: string;
    hint?: string;
    children: ReactNode;
    conditionalId?: string;
    error?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export declare const CheckboxConditional: (props: any, ref: any) => JSX.Element;
export interface CheckboxGroupProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "base" | "small";
    error?: string;
}
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
