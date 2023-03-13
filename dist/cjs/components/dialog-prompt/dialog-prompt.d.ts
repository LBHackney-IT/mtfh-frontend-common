import { PromptProps } from "react-router-dom";
export interface DialogPromptProps extends Omit<PromptProps, "message"> {
    title: string;
    body?: string;
    skipConfirmation?: (location: {
        pathname: string;
    }) => boolean;
}
export declare const DialogPrompt: ({ title, body, skipConfirmation, ...props }: DialogPromptProps) => JSX.Element;
