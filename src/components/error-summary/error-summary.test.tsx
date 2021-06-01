import React from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorSummary } from './error-summary';

test('it renders an alert', () => {
  render(<ErrorSummary id="error" title="Something went wrong" />);
  expect(screen.getByRole('alert')).toBeInTheDocument();
});

test('it shows a description without children', () => {
  render(
    <ErrorSummary
      id="error"
      title="Something went wrong"
      description="User error"
    />
  );
  expect(screen.getByText('User error')).toBeInTheDocument();
});

test('it creates a list of the children', () => {
  const { container } = render(
    <ErrorSummary id="error" title="Something went wrong">
      <a href="#test">Test</a>
      <a href="#next">Next</a>
    </ErrorSummary>
  );
  expect(container).toMatchSnapshot();
});
