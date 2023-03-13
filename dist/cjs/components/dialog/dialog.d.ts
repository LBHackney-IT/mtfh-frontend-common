import React, { ComponentPropsWithoutRef } from "react";
import "@reach/dialog/styles.css";
import "./styles.scss";
export interface DialogProps extends ComponentPropsWithoutRef<"div"> {
    isOpen: boolean;
    onDismiss: () => void;
    title: string;
}
export declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;
export declare const DialogActions: (props: any, ref: any) => JSX.Element;
