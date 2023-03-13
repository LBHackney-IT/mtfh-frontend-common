import React, { ComponentPropsWithoutRef } from "react";
import "./styles.scss";
export declare type TableProps = ComponentPropsWithoutRef<"table">;
export declare const Table: (props: any, ref: any) => JSX.Element;
export declare type TheadProps = ComponentPropsWithoutRef<"thead">;
export declare const Thead: (props: any, ref: any) => JSX.Element;
export declare type TbodyProps = ComponentPropsWithoutRef<"tbody">;
export declare const Tbody: (props: any, ref: any) => JSX.Element;
export declare type TrProps = ComponentPropsWithoutRef<"tr">;
export declare const Tr: (props: any, ref: any) => JSX.Element;
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
