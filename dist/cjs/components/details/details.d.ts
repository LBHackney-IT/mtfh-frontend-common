import React, { ComponentPropsWithoutRef } from "react";
import { ReactElement } from "react-router/node_modules/@types/react";
import "./styles.scss";
export interface DetailsProps extends ComponentPropsWithoutRef<"details"> {
    title: string;
    children: ReactElement;
    className?: string;
}
export declare const Details: React.ForwardRefExoticComponent<DetailsProps & React.RefAttributes<HTMLElement>>;
