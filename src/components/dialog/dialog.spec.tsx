import React from 'react';
import { render } from '@testing-library/react';

import { CustomDialog } from './dialog';

test('it renders correctly', async () => {
  const { container } = render(
    <CustomDialog title="test">
      <h1>Test</h1>
      <button>Test Button</button>
    </CustomDialog>
  );
  expect(container).toMatchSnapshot();
});
