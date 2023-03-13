import { ReactElement } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface AccordionItemProps {
    id: string;
    title: string;
}
export declare type AccordionItemComponent = Polymorphic.ForwardRefComponent<"div", AccordionItemProps>;
export declare const AccordionItem: AccordionItemComponent;
declare type AccordionChild = ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[] | null;
export interface AccordionProps {
    id: string;
    children: AccordionChild | AccordionChild[];
    defaultIndex?: number;
    visuallyHideControls?: boolean;
    override?: number;
}
export declare type AccordionComponent = Polymorphic.ForwardRefComponent<"div", AccordionProps>;
export declare const Accordion: AccordionComponent;
export {};
