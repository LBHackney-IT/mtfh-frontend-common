import { ErrorSummaryProps } from "./error-summary";
interface StautsErrorSummaryProps extends Partial<ErrorSummaryProps> {
    id: string;
    code: number;
}
export declare const StatusErrorSummary: ({ id, code, title, description, ...props }: StautsErrorSummaryProps) => JSX.Element;
export {};
