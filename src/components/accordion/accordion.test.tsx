import React from 'react';
import { render, screen } from '@testing-library/react';

import { testA11y } from '../../test-utils';
import { Accordion, AccordionItem } from './accordion';

test('it passes a11y', async () => {
  const { container } = render(
    <Accordion id="test">
      <AccordionItem id="test-1" title="Test">
        Hello
      </AccordionItem>
      <AccordionItem id="test-2" title="Next">
        Hello
      </AccordionItem>
    </Accordion>
  );

  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test('it renders correctly', () => {
  render(
    <Accordion id="test">
      <AccordionItem id="test-1" title="Test">
        Hello
      </AccordionItem>
      <AccordionItem id="test-2" title="Next">
        Hello
      </AccordionItem>
    </Accordion>
  );

  expect(screen.getAllByRole('button')).toHaveLength(3);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('it sets the defaultIndex to be expanded', () => {
  const { container } = render(
    <Accordion id="test" defaultIndex={1}>
      <AccordionItem id="test-1" title="Test">
        Hello
      </AccordionItem>
      <AccordionItem id="test-2" title="Next">
        Hello
      </AccordionItem>
    </Accordion>
  );

  const button = container.querySelector('#accordion-heading-test-2');
  expect(button?.getAttribute('aria-expanded')).toBe('true');
});
