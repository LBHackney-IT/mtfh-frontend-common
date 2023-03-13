import React, { ReactNode } from "react";
export interface Booleans {
    [key: string]: boolean;
}
export interface BooleanContextProviderProps {
    children: ReactNode;
    initialValue?: Booleans;
}
export declare const BooleanContext: React.Context<{
    booleans: Booleans;
    setBooleans: (booleans: Booleans) => void;
}>;
export declare const BooleanContextProvider: ({ children, initialValue, }: BooleanContextProviderProps) => JSX.Element;
