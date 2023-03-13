import React, { ComponentPropsWithoutRef, ReactElement } from "react";
import "./styles.scss";
export interface FieldsetProps extends ComponentPropsWithoutRef<"fieldset"> {
    heading: string | ReactElement<ComponentPropsWithoutRef<"h1">>;
    variant?: "base" | "small" | "medium" | "large" | "xlarge" | "hidden";
    indent?: boolean;
    error?: boolean | string;
    override?: number;
}
export declare const Fieldset: React.ForwardRefExoticComponent<FieldsetProps & React.RefAttributes<HTMLFieldSetElement>>;
