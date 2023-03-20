import { AxiosError, AxiosRequestConfig, CancelTokenSource } from "axios";
import { Key, KeyLoader, SWRConfiguration, SWRResponse, mutate } from "swr";
import { SWRInfiniteConfiguration, SWRInfiniteResponse } from "swr/infinite";
import { BehaviorSubject } from "rxjs";
import React, { ReactNode, ReactElement, ComponentPropsWithoutRef, FC, Dispatch } from "react";
import * as Polymorphic from "@radix-ui/react-polymorphic";
import { BrowserRouterProps, PromptProps } from "react-router-dom";
import { ReactElement as _ReactElement1 } from "react-router/node_modules/@types/react";
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
export class CommonAuth {
    constructor(authAllowedGroups?: string[], authDomain?: string, cookieDomain?: string, authToken?: string);
    get user(): AuthUser;
    processToken(): void;
    isAuthorisedForGroups(groups: string[]): boolean;
    isAuthorised(): boolean;
    logout(): void;
    login(redirectUrl?: string): void;
}
export interface Config extends AxiosRequestConfig {
    headers: Record<string, string>;
}
export const getAxiosInstance: (auth: CommonAuth) => import("axios").AxiosInstance;
export const createCancelToken: () => CancelTokenSource;
export const isAxiosError: (e: unknown) => e is AxiosError<any>;
export type AxiosSWRError = AxiosError;
export type AxiosSWRResponse<T> = SWRResponse<T, AxiosSWRError>;
export type AxiosSWRInfiniteResponse<T> = SWRInfiniteResponse<T, AxiosSWRError>;
export type AxiosSWRConfiguration<T> = SWRConfiguration<T, AxiosError> & AxiosRequestConfig;
export type AxiosSWRInfiniteConfiguration<T> = SWRInfiniteConfiguration<T, AxiosSWRError> & AxiosRequestConfig;
export const axiosFetcher: (auth: CommonAuth, options?: AxiosRequestConfig) => <ResponseData>(url: string) => Promise<ResponseData>;
export const useAxiosSWR: <ResponseData>(key: Key, auth: CommonAuth, options?: AxiosSWRConfiguration<ResponseData>) => AxiosSWRResponse<ResponseData>;
export const useAxiosSWRInfinite: <ResponseData>(key: KeyLoader<ResponseData>, auth: CommonAuth, options?: AxiosSWRInfiniteConfiguration<ResponseData>) => AxiosSWRInfiniteResponse<ResponseData>;
export { mutate };
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
export const useBreakpoint: (breakpoint: BreakpointKey, defaultBreakpoint?: "base" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined) => boolean | undefined;
export const useBreakpointValue: <T>(breakpointRecord: Partial<Record<"base" | "sm" | "md" | "lg" | "xl" | "2xl", T>>, defaultBreakpoint?: "base" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined) => T | undefined;
interface CautionaryAlerts {
    [key: string]: string;
}
export const useCautionaryAlertCodes: (auth: CommonAuth) => CautionaryAlerts | null;
type Configuration = {
    configuration: Record<string, string | undefined>;
    featureToggles: Record<string, boolean | undefined>;
};
type ConfigCollection = Record<string, Configuration>;
export const hydrateConfiguration: () => ConfigCollection;
export const $configuration: BehaviorSubject<ConfigCollection>;
export const getConfiguration: (auth: CommonAuth) => Promise<void>;
export const getConfigItem: (path: string) => string;
export const getFeatureToggle: (path: string) => boolean;
export const useConfiguration: (path: string) => string;
interface ErrorMessages {
    [key: string]: string;
}
export const useErrorCodes: (auth: CommonAuth) => ErrorMessages | null;
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
export function parseDate(date: null): null;
export function parseDate(date: string): Date;
export function parseDate(date: string | null): Date | null;
export const formatDate: (date: string | null) => string;
export const formatTime: (date: string | null) => string;
export const isFutureDate: (date: string | null) => boolean;
export const stringToDate: (dateStr: string, formatStr: string) => Date;
export const dateToString: (date: Date, formatStr: string) => string;
export const isUnderAge: (dob: string, age: number) => boolean;
export const removeWhitespace: (value?: string | null | undefined) => string | null;
export const removeWhitespaceAndCapitalise: (value?: string | null | undefined) => string | null;
export const pluralize: (word: string, value: number) => string;
export const widthOverrides: (width?: number | undefined) => string;
export const entityDiff: <T extends Record<string, any>>(lhs: T, rhs: T) => Partial<T>;
export interface HeadingProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export type HeadingComponent = Polymorphic.ForwardRefComponent<"h1", HeadingProps>;
export const Heading: HeadingComponent;
export interface AccordionItemProps {
    id: string;
    title: string;
}
export type AccordionItemComponent = Polymorphic.ForwardRefComponent<"div", AccordionItemProps>;
export const AccordionItem: AccordionItemComponent;
type AccordionChild = ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[] | null;
export interface AccordionProps {
    id: string;
    children: AccordionChild | AccordionChild[];
    defaultIndex?: number;
    visuallyHideControls?: boolean;
    override?: number;
}
export type AccordionComponent = Polymorphic.ForwardRefComponent<"div", AccordionProps>;
export const Accordion: AccordionComponent;
export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
    viewBox: string;
    size?: string;
    color?: string;
}
export const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export const Alert: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export interface ButtonProps {
    variant?: "primary" | "secondary" | "chevron" | "add";
    isLoading?: boolean;
    isDisabled?: boolean;
    loadingText?: string;
    override?: number;
}
export type ButtonComponent = Polymorphic.ForwardRefComponent<"button", ButtonProps>;
export const Button: ButtonComponent;
export type BoxVariant = "success" | "warning" | undefined;
interface BoxProps {
    variant?: BoxVariant;
}
export type BoxComponent = Polymorphic.ForwardRefComponent<"div", BoxProps>;
export const Box: BoxComponent;
export const CardList: ({ children }: any) => JSX.Element;
export interface CenterProps {
    horizontally?: boolean;
    vertically?: boolean;
    override?: number;
}
export type CenterComponent = Polymorphic.ForwardRefComponent<"div", CenterProps>;
export const Center: CenterComponent;
export interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
    id: string;
    hint?: string;
    children: ReactNode;
    conditionalId?: string;
    error?: string;
}
export const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export const CheckboxConditional: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>;
export interface CheckboxGroupProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "base" | "small";
    error?: string;
}
export const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
interface ChecklistProps {
    items: {
        label: string;
        success: boolean;
    }[];
}
export const Checklist: ({ items }: ChecklistProps) => JSX.Element;
export interface ErrorSummaryProps {
    id: string;
    title: string;
    description?: string;
    reFocus?: number;
    override?: number;
}
export type ErrorSummaryComponent = Polymorphic.ForwardRefComponent<"div", ErrorSummaryProps>;
export const ErrorSummary: ErrorSummaryComponent;
export interface SummaryListItemProps extends ComponentPropsWithoutRef<"div"> {
    title: string;
    children?: ReactElement | string | string[] | null;
    actions?: ReactElement | ReactElement[];
    overrides?: number[];
    fallback?: string;
}
export const SummaryListItem: React.ForwardRefExoticComponent<SummaryListItemProps & React.RefAttributes<HTMLDivElement>>;
type SummaryListChild = ReactElement<SummaryListItemProps> | ReactElement<SummaryListItemProps>[] | null;
export interface SummaryListProps extends ComponentPropsWithoutRef<"dl"> {
    variant?: "base" | "border" | "inline";
    overrides?: number[];
    children: SummaryListChild | SummaryListChild[];
}
export const SummaryList: React.ForwardRefExoticComponent<SummaryListProps & React.RefAttributes<HTMLDListElement>>;
interface ConflictErrorSummaryProps extends Partial<ErrorSummaryProps> {
    id: string;
    updatedFields?: Record<string, any>;
    fieldLocale: Record<string, string>;
    fieldTransforms?: Record<string, (value: any) => string>;
    footNote?: string;
}
export const ConflictErrorSummary: ({ updatedFields, fieldLocale, fieldTransforms, title, description, footNote, ...props }: ConflictErrorSummaryProps) => JSX.Element;
interface FormErrorSummaryProps extends Partial<Omit<ErrorSummaryProps, "description">> {
    id: string;
    prefix: string;
    errors: Record<string, string>;
}
export const FormErrorSummary: ({ id, prefix, errors, title, ...props }: FormErrorSummaryProps) => JSX.Element;
interface StautsErrorSummaryProps extends Partial<ErrorSummaryProps> {
    id: string;
    code: number;
}
export const StatusErrorSummary: ({ id, code, title, description, ...props }: StautsErrorSummaryProps) => JSX.Element;
export const SimplePagination: (props: any, ref: any) => JSX.Element;
export interface SimplePaginationButtonProps {
    title?: string;
    variant: "previous" | "next";
}
export type SimplePaginationButtonComponent = Polymorphic.ForwardRefComponent<"a", SimplePaginationButtonProps>;
export const SimplePaginationButton: SimplePaginationButtonComponent;
interface SpinnerProps extends Omit<IconProps, "viewBox"> {
    label?: string;
}
export const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<SVGSVGElement>>;
export interface TextProps {
    variant?: "base" | "regular" | "bold";
    size?: "base" | "xs" | "sm" | "md" | "lg";
}
export type TextComponent = Polymorphic.ForwardRefComponent<"p", TextProps>;
export const Text: TextComponent;
export interface CommentListProps {
    targetId: string;
}
export const CommentList: ({ targetId }: CommentListProps, auth: CommonAuth) => JSX.Element;
export interface DialogProps extends ComponentPropsWithoutRef<"div"> {
    isOpen: boolean;
    onDismiss: () => void;
    title: string;
}
export const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;
export const DialogActions: (props: any, ref: any) => JSX.Element;
export interface LinkProps {
    variant?: "link" | "danger" | "text-colour" | "muted" | "back-link" | "native";
    isExternal?: boolean;
    override?: number;
}
export type LinkComponent = Polymorphic.ForwardRefComponent<"a", LinkProps>;
export const Link: LinkComponent;
export const ScrollToTop: () => null;
export const ConfirmationRouter: FC<BrowserRouterProps>;
export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    error?: boolean;
    override?: number;
}
export const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export interface NumberInputProps extends InputProps {
    min?: number;
    max?: number;
    value?: string | number;
    defaultValue?: string | number;
    maxLength?: number;
    padStart?: number;
}
export const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export interface DateInputProps extends ComponentPropsWithoutRef<"div"> {
    id?: string;
    error?: string;
    required?: boolean;
    dayProps?: NumberInputProps;
    monthProps?: NumberInputProps;
    yearProps?: NumberInputProps;
    dayLabel?: string;
    monthLabel?: string;
    yearLabel?: string;
}
export const DateInput: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLDivElement>>;
export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
    error?: boolean;
    override?: number;
}
export const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export type AmPm = "AM" | "PM";
export interface TimeInputProps extends ComponentPropsWithoutRef<"div"> {
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
export interface DialogPromptProps extends Omit<PromptProps, "message"> {
    title: string;
    body?: string;
    skipConfirmation?: (location: {
        pathname: string;
    }) => boolean;
}
export const DialogPrompt: ({ title, body, skipConfirmation, ...props }: DialogPromptProps) => JSX.Element;
export interface DetailsProps extends ComponentPropsWithoutRef<"details"> {
    title: string;
    children: _ReactElement1;
    className?: string;
}
export const Details: React.ForwardRefExoticComponent<DetailsProps & React.RefAttributes<HTMLElement>>;
export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
    maxLength?: number;
    error?: boolean;
    override?: number;
}
export const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export interface FormGroupProps {
    id: string;
    label?: string;
    name?: string;
    hint?: string;
    error?: string | false;
    required?: boolean;
    children: ReactElement;
    override?: number;
}
export type FormGroupComponent = Polymorphic.ForwardRefComponent<"div", FormGroupProps>;
export const FormGroup: FormGroupComponent;
export interface FieldProps {
    name: string;
    id: string;
    label: string;
    children: ReactElement;
    className?: string;
    required?: boolean;
    type?: "checkbox" | "radio" | "text" | "number";
}
export const Field: ({ id, label, children, name, type, ...props }: FieldProps) => JSX.Element;
export interface InlineFieldProps {
    name: string;
    children: ReactElement;
    type?: "checkbox" | "radio" | "text" | "number";
}
export const InlineField: ({ children, name, type, ...props }: InlineFieldProps) => JSX.Element;
type DateInputFieldProps = Omit<NumberInputProps, "name"> & {
    name: string;
};
export interface DateFieldProps extends ComponentPropsWithoutRef<"fieldset"> {
    id: string;
    label: string;
    dayProps: DateInputFieldProps;
    monthProps: DateInputFieldProps;
    yearProps: DateInputFieldProps;
    dayLabel?: string;
    monthLabel?: string;
    yearLabel?: string;
    required?: boolean;
    fieldError?: string;
}
export const DateField: ({ dayProps: { name: dayName, ...dayProps }, monthProps: { name: monthName, ...monthProps }, yearProps: { name: yearName, ...yearProps }, dayLabel, monthLabel, yearLabel, fieldError, ...props }: DateFieldProps) => JSX.Element;
type TimeInputFieldProps = Omit<NumberInputProps, "name"> & {
    name: string;
};
type SelectFieldProps = Omit<SelectProps, "name"> & {
    name: string;
};
export interface TimeFieldProps extends ComponentPropsWithoutRef<"fieldset"> {
    id: string;
    label: string;
    hourProps: TimeInputFieldProps;
    minuteProps: TimeInputFieldProps;
    amPmProps: SelectFieldProps;
    hourLabel?: string;
    minuteLabel?: string;
    amPmLabel?: string;
    required?: boolean;
}
export const TimeField: ({ hourProps: { name: hourName, ...hourProps }, minuteProps: { name: minuteName, ...minuteProps }, amPmProps: { name: amPmName, ...amPmProps }, hourLabel, minuteLabel, amPmLabel, ...props }: TimeFieldProps) => JSX.Element;
export interface FieldsetProps extends ComponentPropsWithoutRef<"fieldset"> {
    heading: string | ReactElement<ComponentPropsWithoutRef<"h1">>;
    variant?: "base" | "small" | "medium" | "large" | "xlarge" | "hidden";
    indent?: boolean;
    error?: boolean | string;
    override?: number;
}
export const Fieldset: React.ForwardRefExoticComponent<FieldsetProps & React.RefAttributes<HTMLFieldSetElement>>;
export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
    top?: ReactElement;
    backLink?: ReactElement;
    side?: ReactElement;
    sidePosition?: "left" | "right";
}
export const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
export interface LinkOverlayProps {
    children: ReactElement<LinkProps>;
    override?: number;
}
export type LinkOverlayComponent = Polymorphic.ForwardRefComponent<"div", LinkOverlayProps>;
export const LinkOverlay: LinkOverlayComponent;
export interface LinkBoxProps {
    override?: number;
}
export type LinkBoxComponent = Polymorphic.ForwardRefComponent<"div", LinkBoxProps>;
export const LinkBox: LinkBoxComponent;
export interface LinkButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "link" | "danger" | "text-colour" | "muted" | "back-link" | "native";
}
export const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLButtonElement>>;
export interface ListProps {
    variant?: "base" | "bullets" | "numbers";
}
export type ListComponent = Polymorphic.ForwardRefComponent<"ul", ListProps>;
export const List: ListComponent;
export interface PageAnnouncementState {
    heading: string;
    description?: string;
    variant?: "success" | "warning" | "info";
}
export type PageAnnouncementActions = {
    type: "ADD";
    payload: PageAnnouncementState;
} | {
    type: "CLEAR";
};
export interface PageAnnouncementContextState {
    state?: PageAnnouncementState;
    dispatch: Dispatch<PageAnnouncementActions>;
}
export const PageAnnouncementContext: React.Context<PageAnnouncementContextState | undefined>;
interface UsePageAnnouncementValue {
    state?: PageAnnouncementState;
    addAnnouncement: Dispatch<PageAnnouncementState>;
    clearAnnouncement: Dispatch<void>;
}
export const usePageAnnouncement: () => UsePageAnnouncementValue;
interface PageAnnouncementProviderProps {
    sessionKey?: string;
}
export const PageAnnouncementProvider: FC<PageAnnouncementProviderProps>;
interface PageAnnouncementProps extends Partial<PageAnnouncementState>, ComponentPropsWithoutRef<"section"> {
}
export const PageAnnouncement: React.ForwardRefExoticComponent<PageAnnouncementProps & React.RefAttributes<HTMLElement>>;
export interface PaginationProps extends ComponentPropsWithoutRef<"nav"> {
    variant?: "base" | "center";
}
export const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export const PaginationControls: (props: any, ref: any) => JSX.Element;
export const PaginationSummary: (props: any, ref: any) => JSX.Element;
export interface PaginationButtonProps {
    variant?: "base" | "previous" | "next";
    active?: boolean;
}
export type PaginationButtonComponent = Polymorphic.ForwardRefComponent<"a", PaginationButtonProps>;
export const PaginationButton: PaginationButtonComponent;
type TagColorVariants = "grey" | "blue" | "yellow" | "red" | "green";
export interface PhaseBannerProps {
    tag: string;
    children: ReactElement;
    variant?: TagColorVariants | string;
}
export const PhaseBanner: FC<PhaseBannerProps>;
export interface RadioProps extends ComponentPropsWithoutRef<"input"> {
    id: string;
    hint?: string;
    children: ReactNode;
    conditionalId?: string;
    error?: string;
}
export const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export const RadioDivider: (props: any, ref: any) => JSX.Element;
export const RadioConditional: (props: any, ref: any) => JSX.Element;
export interface RadioGroupProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "base" | "small";
    inline?: boolean;
    name?: string;
    error?: string;
    required?: boolean;
}
export const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
enum WorkOrdersFilters {
    CANCELLED = "Cancelled",
    COMPLETED = "Completed",
    IN_PROGRESS = "InProgress",
    LOCKED = "Locked",
    ON_HOLD = "OnHold"
}
interface WorkOrdersProps {
    assetId: string;
    statusCode: WorkOrdersFilters;
}
export const WorkOrders: ({ assetId, statusCode }: WorkOrdersProps, auth: CommonAuth) => JSX.Element;
interface WorkOrderListProps {
    assetId: string;
}
export const WorkOrderList: ({ assetId }: WorkOrderListProps) => JSX.Element;
export interface SideBarSectionProps extends AccordionItemProps {
    isCollapsed?: boolean;
    heading?: string;
}
export type SideBarSectionComponent = Polymorphic.ForwardRefComponent<"div", SideBarSectionProps>;
export const SideBarSection: SideBarSectionComponent;
export interface SideBarProps {
    id: string;
    top?: ReactElement;
    children: ReactElement<SideBarSectionProps> | null | Array<ReactElement<SideBarSectionProps> | null>;
}
export type SideBarComponent = Polymorphic.ForwardRefComponent<"div", SideBarProps>;
export const SideBar: SideBarComponent;
export type StatusBoxVariant = "success" | "warning" | undefined;
interface StatusBoxProps {
    title: string;
    variant?: StatusBoxVariant;
}
export type StatusBoxComponent = Polymorphic.ForwardRefComponent<"div", StatusBoxProps>;
export const StatusBox: StatusBoxComponent;
export type StatusHeadingVariant = "base" | "success" | "warning" | undefined;
interface StatusHeadingProps {
    title: string;
    variant?: StatusHeadingVariant;
}
export const StatusHeading: ({ title, variant }: StatusHeadingProps) => JSX.Element;
export type TableProps = ComponentPropsWithoutRef<"table">;
export const Table: (props: any, ref: any) => JSX.Element;
export type TheadProps = ComponentPropsWithoutRef<"thead">;
export const Thead: (props: any, ref: any) => JSX.Element;
export type TbodyProps = ComponentPropsWithoutRef<"tbody">;
export const Tbody: (props: any, ref: any) => JSX.Element;
export type TrProps = ComponentPropsWithoutRef<"tr">;
export const Tr: (props: any, ref: any) => JSX.Element;
export interface ThProps extends ComponentPropsWithoutRef<"th"> {
    isNumeric?: boolean;
}
export const Th: React.ForwardRefExoticComponent<ThProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
export interface TdProps extends ComponentPropsWithoutRef<"td"> {
    isNumeric?: boolean;
}
export const Td: React.ForwardRefExoticComponent<TdProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TableCaptionProps extends ComponentPropsWithoutRef<"caption"> {
    variant?: "xlarge" | "large" | "medium" | "small";
}
export const TableCaption: React.ForwardRefExoticComponent<TableCaptionProps & React.RefAttributes<HTMLTableCaptionElement>>;
export interface StepProps {
    stepIndex?: number;
    children: ReactNode;
}
export const Step: ({ stepIndex, children }: StepProps) => JSX.Element;
export type StepChild = ReactElement<StepProps> | ReactElement<StepProps>[] | null;
interface StepperProps {
    title?: string;
    activeStep?: number;
    children: StepChild;
    startIndex?: number;
    [x: string]: any;
}
export const Stepper: ({ activeStep, title, children, startIndex, ...props }: StepperProps) => JSX.Element;

//# sourceMappingURL=types.d.ts.map
