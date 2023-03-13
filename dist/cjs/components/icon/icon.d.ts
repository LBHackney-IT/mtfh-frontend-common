import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
    viewBox: string;
    size?: string;
    color?: string;
}
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
