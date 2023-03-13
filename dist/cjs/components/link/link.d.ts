import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface LinkProps {
    variant?: "link" | "danger" | "text-colour" | "muted" | "back-link" | "native";
    isExternal?: boolean;
    override?: number;
}
export declare type LinkComponent = Polymorphic.ForwardRefComponent<"a", LinkProps>;
export declare const Link: LinkComponent;
