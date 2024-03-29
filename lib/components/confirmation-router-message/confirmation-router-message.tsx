import React from "react";

import { Button } from "../button";
import { ConfirmationMessage } from "../confirmation-router/types";
import { Dialog, DialogActions } from "../dialog";
import { Link } from "../link";

interface Props {
  message?: ConfirmationMessage;
  onConfirmation: (ok: boolean) => void;
  isConfirm: boolean;
}

export const ConfirmationRouterMessage = ({
  message,
  onConfirmation,
  isConfirm,
}: Props) => {
  if (!message) {
    return null;
  }

  return (
    <Dialog
      isOpen={isConfirm}
      title={message.title}
      onDismiss={() => onConfirmation(false)}
    >
      {message?.body && <p>{message.body}</p>}
      <DialogActions>
        <Button onClick={() => onConfirmation(true)}>Yes</Button>
        <Link as="button" onClick={() => onConfirmation(false)}>
          Cancel
        </Link>
      </DialogActions>
    </Dialog>
  );
};
