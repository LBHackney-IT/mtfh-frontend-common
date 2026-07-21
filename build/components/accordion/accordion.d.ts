import { ReactElement } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface AccordionItemProps {
    id: string;
    title: string;
}
export type AccordionItemComponent = Polymorphic.ForwardRefComponent<"div", AccordionItemProps>;
export declare const AccordionItem: AccordionItemComponent;
type AccordionChild = ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[] | null;
export interface AccordionProps {
    id: string;
    children: AccordionChild | AccordionChild[];
    defaultIndex?: number;
    visuallyHideControls?: boolean;
    override?: number;
}
export type AccordionComponent = Polymorphic.ForwardRefComponent<"div", AccordionProps>;
export declare const Accordion: AccordionComponent;
export {};
//# sourceMappingURL=accordion.d.ts.map