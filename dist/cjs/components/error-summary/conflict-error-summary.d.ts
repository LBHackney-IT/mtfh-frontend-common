import { ErrorSummaryProps } from "./error-summary";
interface ConflictErrorSummaryProps extends Partial<ErrorSummaryProps> {
    id: string;
    updatedFields?: Record<string, any>;
    fieldLocale: Record<string, string>;
    fieldTransforms?: Record<string, (value: any) => string>;
    footNote?: string;
}
export declare const ConflictErrorSummary: ({ updatedFields, fieldLocale, fieldTransforms, title, description, footNote, ...props }: ConflictErrorSummaryProps) => JSX.Element;
export {};
