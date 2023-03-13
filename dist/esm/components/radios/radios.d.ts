import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import "./styles.scss";
export interface RadioProps extends ComponentPropsWithoutRef<"input"> {
    id: string;
    hint?: string;
    children: ReactNode;
    conditionalId?: string;
    error?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export declare const RadioDivider: (props: any, ref: any) => JSX.Element;
export declare const RadioConditional: (props: any, ref: any) => JSX.Element;
export interface RadioGroupProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "base" | "small";
    inline?: boolean;
    name?: string;
    error?: string;
    required?: boolean;
}
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
