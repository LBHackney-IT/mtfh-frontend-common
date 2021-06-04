import React from 'react';
import { render } from '@testing-library/react';

import { DateInput } from './date-input';

test('it renders correctly', () => {
  const { container } = render(<DateInput />);
  expect(container).toMatchSnapshot();
});
