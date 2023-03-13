import { ErrorSummaryProps } from "./error-summary";
interface FormErrorSummaryProps extends Partial<Omit<ErrorSummaryProps, "description">> {
    id: string;
    prefix: string;
    errors: Record<string, string>;
}
export declare const FormErrorSummary: ({ id, prefix, errors, title, ...props }: FormErrorSummaryProps) => JSX.Element;
export {};
