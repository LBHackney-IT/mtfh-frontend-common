import React from "react";
import { IconProps } from "../icon";
interface SpinnerProps extends Omit<IconProps, "viewBox"> {
    label?: string;
}
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<SVGSVGElement>>;
export {};
