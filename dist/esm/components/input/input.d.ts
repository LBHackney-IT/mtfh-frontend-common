import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    error?: boolean;
    override?: number;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
