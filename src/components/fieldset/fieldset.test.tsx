import React from 'react';
import { render } from '@testing-library/react';

import { FormGroup, Input } from '..';
import { testA11y } from '../../test-utils';
import { Fieldset } from './fieldset';

test('it renders correctly', async () => {
  const { container } = render(
    <Fieldset heading="Group name">
      <FormGroup id="test" label="Test" name="test">
        <Input />
      </FormGroup>
    </Fieldset>
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test('it renders correctly with an h tag', async () => {
  const { container } = render(
    <Fieldset heading={<h1>Heading</h1>}>
      <FormGroup id="test" label="Test" name="test">
        <Input />
      </FormGroup>
    </Fieldset>
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test('it applies the correct variant styling', () => {
  const { container } = render(
    <Fieldset variant="large" heading={<h1>Heading</h1>}>
      <FormGroup id="test" label="Test" name="test">
        <Input />
      </FormGroup>
    </Fieldset>
  );
  expect(container).toMatchSnapshot();
});
