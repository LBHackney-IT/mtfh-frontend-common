import React from 'react';
import { render } from '@testing-library/react';

import { Input } from './input';

test('it renders correctly', () => {
  const { container } = render(<Input />);
  expect(container).toMatchSnapshot();
});

test('it renders correctly with an error', () => {
  const { container } = render(<Input error />);
  expect(container).toMatchSnapshot();
});
