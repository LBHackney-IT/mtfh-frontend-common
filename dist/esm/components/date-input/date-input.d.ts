import React, { ComponentPropsWithoutRef } from "react";
import { NumberInputProps } from "../number-input";
import "./styles.scss";
export interface DateInputProps extends ComponentPropsWithoutRef<"div"> {
    id?: string;
    error?: string;
    required?: boolean;
    dayProps?: NumberInputProps;
    monthProps?: NumberInputProps;
    yearProps?: NumberInputProps;
    dayLabel?: string;
    monthLabel?: string;
    yearLabel?: string;
}
export declare const DateInput: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLDivElement>>;
