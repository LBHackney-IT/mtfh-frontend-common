import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { navigateToUrl } from 'single-spa';

import { testA11y } from '../../test-utils';
import { ButtonLink } from './button-link';

jest.mock('single-spa');

test('it renders correctly', async () => {
  const { container } = render(
    <ButtonLink href="http://localhost">Test Button</ButtonLink>
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test('it renders the correct variant', () => {
  const { container } = render(
    <ButtonLink variant="secondary">Test Link</ButtonLink>
  );
  expect(container).toMatchSnapshot();
});

test('it can be made disabled', async () => {
  const { container } = render(<ButtonLink isDisabled>Test Link</ButtonLink>);
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test('it uses internal navigation', () => {
  (navigateToUrl as jest.Mock).mockReset();
  render(<ButtonLink href="http://localhost">Test Button</ButtonLink>);
  const link = screen.getByText('Test Button');
  fireEvent.click(link);
  expect(navigateToUrl).toHaveBeenCalledTimes(1);
});

test('it does not use internal navigation when marked external', () => {
  (navigateToUrl as jest.Mock).mockReset();
  render(
    <ButtonLink href="http://localhost" isExternal>
      Test Button
    </ButtonLink>
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
    return <ButtonLink ref={ref}>Test Button</ButtonLink>;
  };
  render(<Comp />);
  expect(callback).toBeCalledTimes(1);
});
