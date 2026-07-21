import React, { ComponentPropsWithoutRef } from "react";
import "@reach/dialog/styles.css";
import "./styles.scss";
export interface DialogProps extends ComponentPropsWithoutRef<"div"> {
    isOpen: boolean;
    onDismiss: () => void;
    title: string;
}
export declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;
export declare const DialogActions: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=dialog.d.ts.map