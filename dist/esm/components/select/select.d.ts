import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
    error?: boolean;
    override?: number;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
