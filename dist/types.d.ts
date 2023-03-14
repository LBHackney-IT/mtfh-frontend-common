import React, { ComponentPropsWithoutRef } from "react";
export const axiosInstance: import("axios").AxiosInstance;
interface IconProps extends ComponentPropsWithoutRef<"svg"> {
    viewBox: string;
    size?: string;
    color?: string;
}
export const Alert: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
interface SpinnerProps extends Omit<IconProps, "viewBox"> {
    label?: string;
}
export const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<SVGSVGElement>>;
export function TestButton(): JSX.Element;
export const Name = "Callum";

//# sourceMappingURL=types.d.ts.map
