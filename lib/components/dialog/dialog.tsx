import React, { ComponentPropsWithoutRef, forwardRef, useEffect } from "react";

import { DialogContent, DialogOverlay } from "@reach/dialog";
import cn from "classnames";
import "@reach/dialog/styles.css";

import { Heading } from "../heading";
import "./styles.scss";

export interface DialogProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onDismiss: () => void;
  title: string;
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  { isOpen, onDismiss, children, className, title, ...props },
  ref,
) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss} dangerouslyBypassScrollLock>
      <DialogContent
        ref={ref}
        className={cn("lbh-dialog", className)}
        aria-label={title}
        {...props}
      >
        <Heading as="h2" variant="h2" className="lbh-dialog__title">
          {title}
        </Heading>
        <button type="button" onClick={onDismiss} className="lbh-dialog__close">
          <span className="govuk-visually-hidden">Close</span>

          <svg width="18" height="18" viewBox="0 0 13 13" fill="none">
            <path
              d="M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z"
              fill="#0B0C0C"
            />
            <path
              d="M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z"
              fill="#0B0C0C"
            />
          </svg>
        </button>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
});

export const DialogActions = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  function DialogActions({ className, ...props }, ref) {
    return <div ref={ref} className={cn("lbh-dialog__actions", className)} {...props} />;
  },
);
