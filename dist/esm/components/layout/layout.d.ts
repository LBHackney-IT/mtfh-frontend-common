import React, { ComponentPropsWithoutRef, ReactElement } from "react";
import "./styles.scss";
export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
    top?: ReactElement;
    backLink?: ReactElement;
    side?: ReactElement;
    sidePosition?: "left" | "right";
}
export declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
