import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';

import { ConfirmationRouter } from '../confirmation-router';
import { DialogPrompt } from './dialog-prompt';

test('it issues a prompt when navigating', () => {
  render(
    <ConfirmationRouter>
      <Link to="/test">Link</Link>
      <DialogPrompt title="Error" />
    </ConfirmationRouter>
  );

  userEvent.click(screen.getByRole('link'));

  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('it intercepts onbeforeunload', () => {
  render(
    <ConfirmationRouter>
      <DialogPrompt title="Error" />
    </ConfirmationRouter>
  );
  const event: BeforeUnloadEvent = new Event('beforeunload');
  const returnValue = jest.fn();
  Object.defineProperty(event, 'returnValue', {
    set: returnValue,
    get: () => true,
  });

  window.dispatchEvent(event);

  expect(returnValue).toBeCalledWith('');
});

test('it skips confirmation if needed', () => {
  render(
    <ConfirmationRouter>
      <Link to="/test">Link</Link>
      <DialogPrompt title="Error" skipConfirmation={() => true} />
    </ConfirmationRouter>
  );
  userEvent.click(screen.getByRole('link'));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
