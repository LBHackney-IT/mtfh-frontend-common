export declare const BREAKPOINTS: {
    base: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
};
export declare const queries: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
};
export declare type BreakpointKey = keyof typeof BREAKPOINTS;
export declare const useBreakpoint: (breakpoint: BreakpointKey, defaultBreakpoint?: BreakpointKey) => boolean | undefined;
export declare const useBreakpointValue: <T>(breakpointRecord: Partial<Record<"base" | "sm" | "md" | "lg" | "xl" | "2xl", T>>, defaultBreakpoint?: BreakpointKey) => T;
