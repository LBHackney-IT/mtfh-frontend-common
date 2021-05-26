import React from 'react';
import { render } from '@testing-library/react';

import { Select } from './select';

test('it renders correctly', () => {
  const { container } = render(<Select />);
  expect(container).toMatchSnapshot();
});

test('it renders correctly with error', () => {
  const { container } = render(<Select error />);
  expect(container).toMatchSnapshot();
});

test('it renders correctly with isFullWidth', () => {
  const { container } = render(<Select isFullWidth />);
  expect(container).toMatchSnapshot();
});
