import React, { Dispatch, FC, useCallback, useState } from "react";
import { BrowserRouter, BrowserRouterProps, matchPath } from "react-router-dom";

import { Button } from "../button";
import { Dialog, DialogActions } from "../dialog";
import { Link } from "../link";
import { ScrollToTop } from "../scroll-to-top";
import { ConfirmationMessage } from "./types";
import ConfirmationRouterMessage from "../confirmation-router-message/confirmation-router-message";

export const ConfirmationRouter: FC<BrowserRouterProps> = ({
  children,
  ...props
}): JSX.Element => {
  const [message, setMessage] = useState<ConfirmationMessage>();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<Dispatch<boolean>>();

  const onConfirmation = useCallback(
    (ok: boolean) => {
      /* istanbul ignore else: this should be set by the time we call it */
      if (confirmation) {
        confirmation(ok);
      }
      if (!ok && message?.action === "POP") {
        window.history.forward();
      }
      setIsConfirm(false);
    },
    [confirmation, setIsConfirm, message],
  );

  const getUserConfirmation = (message: string, callback: (ok: boolean) => any) => {
    try {
      const incomingMessage = JSON.parse(message) as ConfirmationMessage;
      if (
        incomingMessage &&
        !matchPath(incomingMessage.pathname, {
          path: incomingMessage.path,
          exact: true,
          strict: true,
        })
      ) {
        setIsConfirm(true);
        setConfirmation(() => callback);
        setMessage(incomingMessage);
      }
    } catch (e) {
      setIsConfirm(false);
      setMessage(undefined);
      callback(true);
    }
  };

  return (
    <BrowserRouter getUserConfirmation={getUserConfirmation}>
      <ScrollToTop />
      {children}

      <ConfirmationRouterMessage
        message={message}
        onConfirmation={onConfirmation}
        isConfirm={isConfirm}
      />
    </BrowserRouter>
  );
};
