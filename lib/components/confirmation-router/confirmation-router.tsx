import React, { Dispatch, FC, useCallback, useState } from "react";
import { BrowserRouter, BrowserRouterProps, matchPath } from "react-router-dom";

import { ConfirmationRouterMessage } from "../confirmation-router-message/confirmation-router-message";
import { ScrollToTop } from "../scroll-to-top";
import { ConfirmationMessage } from "./types";

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

  const getUserConfirmation = (payload: string, callback: (ok: boolean) => any) => {
    try {
      const incomingMessage = JSON.parse(payload) as ConfirmationMessage;
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
    <BrowserRouter getUserConfirmation={getUserConfirmation} {...props}>
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
