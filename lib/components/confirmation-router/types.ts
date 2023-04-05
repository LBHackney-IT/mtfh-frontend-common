export interface ConfirmationMessage {
  path: string;
  pathname: string;
  action: "POP" | "PUSH";
  title: string;
  body?: string;
}
