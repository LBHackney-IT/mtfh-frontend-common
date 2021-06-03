import React from 'react';
import { render } from '@testing-library/react';

import { SimplePagination, SimplePaginationButton } from './simple-pagination';

test('it renders the nav with buttons', () => {
  const { container } = render(
    <SimplePagination>
      <SimplePaginationButton variant="previous">Prev</SimplePaginationButton>
      <SimplePaginationButton variant="next">Next</SimplePaginationButton>
    </SimplePagination>
  );
  expect(container).toMatchSnapshot();
});

test('it renders the nav with buttons and titles', () => {
  const { container } = render(
    <SimplePagination>
      <SimplePaginationButton variant="previous" title="1 of 3">
        Prev
      </SimplePaginationButton>
      <SimplePaginationButton variant="next" title="3 of 3">
        Next
      </SimplePaginationButton>
    </SimplePagination>
  );
  expect(container).toMatchSnapshot();
});
