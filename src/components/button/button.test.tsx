import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './button';

test('it renders correctly', () => {
  const { container } = render(<Button>Test Button</Button>);
  expect(container).toMatchSnapshot();
});

test('it shows a loading state', () => {
  const { container } = render(<Button isLoading>Test Button</Button>);
  expect(container).toMatchSnapshot();
});

test('it shows a loading state with custom text', () => {
  render(
    <Button isLoading loadingText="Processing">
      Test Button
    </Button>
  );
  expect(screen.getByText('Processing')).toBeInTheDocument();
});

test('it can support anchor tag', () => {
  const { container } = render(
    <Button as="a" href="http://localhost">
      Test Anchor
    </Button>
  );
  expect(container).toMatchSnapshot();
});
