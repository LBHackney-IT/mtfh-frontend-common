import React from "react";
import { InputProps } from "../input";
export interface NumberInputProps extends InputProps {
    min?: number;
    max?: number;
    value?: string | number;
    defaultValue?: string | number;
    maxLength?: number;
    padStart?: number;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
