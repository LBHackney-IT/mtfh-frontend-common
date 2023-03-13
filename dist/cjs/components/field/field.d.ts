import { ComponentPropsWithoutRef, ReactElement } from "react";
import { NumberInputProps } from "../number-input";
import { SelectProps } from "../select";
export interface FieldProps {
    name: string;
    id: string;
    label: string;
    children: ReactElement;
    className?: string;
    required?: boolean;
    type?: "checkbox" | "radio" | "text" | "number";
}
export declare const Field: ({ id, label, children, name, type, ...props }: FieldProps) => JSX.Element;
export interface InlineFieldProps {
    name: string;
    children: ReactElement;
    type?: "checkbox" | "radio" | "text" | "number";
}
export declare const InlineField: ({ children, name, type, ...props }: InlineFieldProps) => JSX.Element;
declare type DateInputFieldProps = Omit<NumberInputProps, "name"> & {
    name: string;
};
export interface DateFieldProps extends ComponentPropsWithoutRef<"fieldset"> {
    id: string;
    label: string;
    dayProps: DateInputFieldProps;
    monthProps: DateInputFieldProps;
    yearProps: DateInputFieldProps;
    dayLabel?: string;
    monthLabel?: string;
    yearLabel?: string;
    required?: boolean;
    fieldError?: string;
}
export declare const DateField: ({ dayProps: { name: dayName, ...dayProps }, monthProps: { name: monthName, ...monthProps }, yearProps: { name: yearName, ...yearProps }, dayLabel, monthLabel, yearLabel, fieldError, ...props }: DateFieldProps) => JSX.Element;
declare type TimeInputFieldProps = Omit<NumberInputProps, "name"> & {
    name: string;
};
declare type SelectFieldProps = Omit<SelectProps, "name"> & {
    name: string;
};
export interface TimeFieldProps extends ComponentPropsWithoutRef<"fieldset"> {
    id: string;
    label: string;
    hourProps: TimeInputFieldProps;
    minuteProps: TimeInputFieldProps;
    amPmProps: SelectFieldProps;
    hourLabel?: string;
    minuteLabel?: string;
    amPmLabel?: string;
    required?: boolean;
}
export declare const TimeField: ({ hourProps: { name: hourName, ...hourProps }, minuteProps: { name: minuteName, ...minuteProps }, amPmProps: { name: amPmName, ...amPmProps }, hourLabel, minuteLabel, amPmLabel, ...props }: TimeFieldProps) => JSX.Element;
export {};
