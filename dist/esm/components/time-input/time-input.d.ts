import React, { ComponentPropsWithoutRef } from "react";
import { NumberInputProps } from "../number-input";
import { SelectProps } from "../select";
import "./styles.scss";
export declare type AmPm = "AM" | "PM";
export interface TimeInputProps extends ComponentPropsWithoutRef<"div"> {
    id?: string;
    error?: string;
    required?: boolean;
    hourProps?: NumberInputProps;
    minuteProps?: NumberInputProps;
    amPmProps?: SelectProps;
    hourLabel?: string;
    minuteLabel?: string;
    amPmLabel?: string;
}
export declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLDivElement>>;
