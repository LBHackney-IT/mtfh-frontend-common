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
export declare const CheckboxConditional: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>;
export interface CheckboxGroupProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "base" | "small";
    error?: string;
}
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=checkboxes.d.ts.map