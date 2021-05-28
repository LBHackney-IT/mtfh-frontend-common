import React from 'react';
import { render } from '@testing-library/react';

import { Link } from '../link';
import { LinkBox, LinkOverlay } from './link-box';

test('it renders correctly', () => {
  const { container } = render(
    <LinkBox>
      <LinkOverlay>
        <Link href="https://localhost">Link</Link>
      </LinkOverlay>
    </LinkBox>
  );

  expect(container).toMatchSnapshot();
});
