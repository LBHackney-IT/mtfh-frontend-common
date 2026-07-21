import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export type TableProps = ComponentPropsWithoutRef<"table">;
export declare const Table: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "key" | keyof React.TableHTMLAttributes<HTMLTableElement>> & React.RefAttributes<HTMLTableElement>>;
export type TheadProps = ComponentPropsWithoutRef<"thead">;
export declare const Thead: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "key" | keyof React.HTMLAttributes<HTMLTableSectionElement>> & React.RefAttributes<HTMLTableSectionElement>>;
export type TbodyProps = ComponentPropsWithoutRef<"tbody">;
export declare const Tbody: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "key" | keyof React.HTMLAttributes<HTMLTableSectionElement>> & React.RefAttributes<HTMLTableSectionElement>>;
export type TrProps = ComponentPropsWithoutRef<"tr">;
export declare const Tr: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "key" | keyof React.HTMLAttributes<HTMLTableRowElement>> & React.RefAttributes<HTMLTableRowElement>>;
export interface ThProps extends ComponentPropsWithoutRef<"th"> {
    isNumeric?: boolean;
}
export declare const Th: React.ForwardRefExoticComponent<ThProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
export interface TdProps extends ComponentPropsWithoutRef<"td"> {
    isNumeric?: boolean;
}
export declare const Td: React.ForwardRefExoticComponent<TdProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TableCaptionProps extends ComponentPropsWithoutRef<"caption"> {
    variant?: "xlarge" | "large" | "medium" | "small";
}
export declare const TableCaption: React.ForwardRefExoticComponent<TableCaptionProps & React.RefAttributes<HTMLTableCaptionElement>>;
//# sourceMappingURL=table.d.ts.map