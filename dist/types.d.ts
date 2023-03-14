import { BehaviorSubject } from "rxjs";
import { AxiosError, AxiosRequestConfig, CancelTokenSource } from "axios";
import { Key, SWRConfiguration, SWRResponse, mutate } from "swr";
import { SWRInfiniteConfiguration, SWRInfiniteResponse } from "swr/infinite";
import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import * as Polymorphic from "@radix-ui/react-polymorphic";
export function TestButton(): JSX.Element;
export interface JWTPayload {
    sub: string;
    email: string;
    iss: string;
    name: string;
    groups: string[];
    iat: number;
}
export interface AuthUser extends JWTPayload {
    token: string;
}
export const $auth: BehaviorSubject<AuthUser>;
export const processToken: () => void;
export const isAuthorisedForGroups: (groups: string[]) => boolean;
export const isAuthorised: () => boolean;
export const logout: () => void;
export const login: (redirectUrl?: string) => void;
export interface Config extends AxiosRequestConfig {
    headers: Record<string, string>;
}
export const axiosInstance: import("axios").AxiosInstance;
export const createCancelToken: () => CancelTokenSource;
export const isAxiosError: (e: unknown) => e is AxiosError<any>;
export type AxiosSWRError = AxiosError;
export type AxiosSWRResponse<T> = SWRResponse<T, AxiosSWRError>;
export type AxiosSWRInfiniteResponse<T> = SWRInfiniteResponse<T, AxiosSWRError>;
export type AxiosSWRConfiguration<T> = SWRConfiguration<T, AxiosError> & AxiosRequestConfig;
export type AxiosSWRInfiniteConfiguration<T> = SWRInfiniteConfiguration<T, AxiosSWRError> & AxiosRequestConfig;
export const axiosFetcher: (options?: AxiosRequestConfig) => <ResponseData>(url: string) => Promise<ResponseData>;
export const useAxiosSWR: <ResponseData>(key: Key, options?: AxiosSWRConfiguration<ResponseData>) => AxiosSWRResponse<ResponseData>;
export const useAxiosSWRInfinite: <ResponseData>(key: (index: number, previousPageData: ResponseData) => import("swr/dist/types").ValueKey, options?: AxiosSWRInfiniteConfiguration<ResponseData>) => AxiosSWRInfiniteResponse<ResponseData>;
export { mutate };
type Configuration = {
    configuration: Record<string, string | undefined>;
    featureToggles: Record<string, boolean | undefined>;
};
type ConfigCollection = Record<string, Configuration>;
export const hydrateConfiguration: () => ConfigCollection;
export const $configuration: BehaviorSubject<ConfigCollection>;
export const getConfiguration: () => Promise<void>;
export const getConfigItem: (path: string) => string;
export const getFeatureToggle: (path: string) => boolean;
interface IconProps extends ComponentPropsWithoutRef<"svg"> {
    viewBox: string;
    size?: string;
    color?: string;
}
export const Alert: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
interface ErrorSummaryProps {
    id: string;
    title: string;
    description?: string;
    reFocus?: number;
    override?: number;
}
type ErrorSummaryComponent = Polymorphic.ForwardRefComponent<"div", ErrorSummaryProps>;
export const ErrorSummary: ErrorSummaryComponent;
interface InputProps extends ComponentPropsWithoutRef<"input"> {
    error?: boolean;
    override?: number;
}
interface NumberInputProps extends InputProps {
    min?: number;
    max?: number;
    value?: string | number;
    defaultValue?: string | number;
    maxLength?: number;
    padStart?: number;
}
interface SelectProps extends ComponentPropsWithoutRef<"select"> {
    error?: boolean;
    override?: number;
}
interface TimeInputProps extends ComponentPropsWithoutRef<"div"> {
    id?: string;
    error?: string;
    required?: boolean;
    hourProps?: NumberInputProps;
    minuteProps?: NumberInputProps;
    amPmProps?: SelectProps;
    hourLabel?: string;
    minuteLabel?: string;
    amPmLabel?: string;
}
export const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLDivElement>>;
export const BREAKPOINTS: {
    base: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
};
export const queries: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
};
export type BreakpointKey = keyof typeof BREAKPOINTS;
export const useBreakpoint: (breakpoint: BreakpointKey, defaultBreakpoint?: BreakpointKey) => boolean | undefined;
export const useBreakpointValue: <T>(breakpointRecord: Partial<Record<"base" | "sm" | "md" | "lg" | "xl" | "2xl", T>>, defaultBreakpoint?: BreakpointKey) => T;
interface CautionaryAlerts {
    [key: string]: string;
}
export const useCautionaryAlertCodes: () => CautionaryAlerts;
export const useConfiguration: (path: string) => string;
interface ErrorMessages {
    [key: string]: string;
}
export const useErrorCodes: () => ErrorMessages;
export const useFeatureToggle: (path: string) => boolean;
export interface Booleans {
    [key: string]: boolean;
}
export interface BooleanContextProviderProps {
    children: ReactNode;
    initialValue?: Booleans;
}
export const BooleanContext: React.Context<{
    booleans: Booleans;
    setBooleans: (booleans: Booleans) => void;
}>;
export const BooleanContextProvider: ({ children, initialValue, }: BooleanContextProviderProps) => JSX.Element;
export const Name = "Callum";

//# sourceMappingURL=types.d.ts.map
