import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import Dialog from 'lbh-frontend/lbh/components/lbh-dialog';

import './styles.scss';

export interface CustomDialogProps extends ComponentPropsWithoutRef<'dialog'> {
  title?: string;
}

export const CustomDialog = forwardRef<HTMLTextAreaElement, any>(
  function CustomDialog({ title, ...props }) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Dialog
          title="Are you sure?"
          isOpen={open}
          onDismiss={() => setOpen(false)}
        >
          {props}
        </Dialog>
      </>
    );
  }
);
