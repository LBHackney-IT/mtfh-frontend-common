import { ReactElement } from "react";
import { LinkProps } from "../link";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface LinkOverlayProps {
  children: ReactElement<LinkProps>;
  override?: number;
}
export type LinkOverlayComponent = Polymorphic.ForwardRefComponent<
  "div",
  LinkOverlayProps
>;
export declare const LinkOverlay: LinkOverlayComponent;
export interface LinkBoxProps {
  override?: number;
}
export type LinkBoxComponent = Polymorphic.ForwardRefComponent<"div", LinkBoxProps>;
export declare const LinkBox: LinkBoxComponent;
//# sourceMappingURL=link-box.d.ts.map
