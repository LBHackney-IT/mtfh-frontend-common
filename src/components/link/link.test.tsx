import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { navigateToUrl } from 'single-spa';

import { Link } from './link';

jest.mock('single-spa');

test('it renders correctly', () => {
  const { container } = render(
    <Link href="http://localhost">Test Button</Link>
  );
  expect(container).toMatchSnapshot();
});

test('it renders a variant', () => {
  const { container } = render(
    <Link href="http://localhost" variant="muted">
      Test Button
    </Link>
  );
  expect(container).toMatchSnapshot();
});

test('it renders a back link', () => {
  const { container } = render(
    <Link href="http://localhost" variant="back-link">
      Test Button
    </Link>
  );
  expect(container).toMatchSnapshot();
});

test('it does not use the navigation when marked as external', () => {
  (navigateToUrl as jest.Mock).mockReset();
  render(
    <Link href="http://localhost" isExternal>
      Test Button
    </Link>
  );
  const link = screen.getByText('Test Button');
  fireEvent.click(link);
  expect(navigateToUrl).toHaveBeenCalledTimes(0);
});

test('it accepts a ref', () => {
  const callback = jest.fn();
  const Comp = () => {
    const ref = React.createRef<HTMLAnchorElement>();

    useEffect(() => {
      if (ref.current) {
        callback(ref.current);
      }
    }, [ref]);
    return (
      <Link ref={ref} href="http://localhost">
        Test Button
      </Link>
    );
  };
  render(<Comp />);
  expect(callback).toBeCalledTimes(1);
});
