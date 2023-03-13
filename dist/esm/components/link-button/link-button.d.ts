import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export interface LinkButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "link" | "danger" | "text-colour" | "muted" | "back-link" | "native";
}
export declare const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLButtonElement>>;
