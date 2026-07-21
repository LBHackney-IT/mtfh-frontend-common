import { ReactElement } from "react";
import { AccordionItemProps } from "../accordion";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface SideBarSectionProps extends AccordionItemProps {
    isCollapsed?: boolean;
    heading?: string;
}
export type SideBarSectionComponent = Polymorphic.ForwardRefComponent<"div", SideBarSectionProps>;
export declare const SideBarSection: SideBarSectionComponent;
export interface SideBarProps {
    id: string;
    top?: ReactElement;
    children: ReactElement<SideBarSectionProps> | null | Array<ReactElement<SideBarSectionProps> | null>;
}
export type SideBarComponent = Polymorphic.ForwardRefComponent<"div", SideBarProps>;
export declare const SideBar: SideBarComponent;
//# sourceMappingURL=side-bar.d.ts.map