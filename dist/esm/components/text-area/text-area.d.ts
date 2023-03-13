import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
    maxLength?: number;
    error?: boolean;
    override?: number;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
