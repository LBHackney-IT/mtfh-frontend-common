import { ConfirmationMessage } from "../confirmation-router/types";
interface Props {
    message?: ConfirmationMessage;
    onConfirmation: (ok: boolean) => void;
    isConfirm: boolean;
}
export declare const ConfirmationRouterMessage: ({ message, onConfirmation, isConfirm, }: Props) => JSX.Element | null;
export {};
//# sourceMappingURL=confirmation-router-message.d.ts.map