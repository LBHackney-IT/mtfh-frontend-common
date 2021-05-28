import React, { useEffect } from 'react';
import { render } from '@testing-library/react';

import { Spinner } from './spinner';

test('it renders correctly', () => {
  const { container } = render(<Spinner />);
  expect(container).toMatchSnapshot();
});

test('it accepts a ref', () => {
  const callback = jest.fn();
  const Comp = () => {
    const ref = React.createRef<SVGSVGElement>();

    useEffect(() => {
      if (ref.current) {
        callback(ref.current);
      }
    }, [ref]);
    return <Spinner ref={ref} />;
  };
  render(<Comp />);
  expect(callback).toBeCalledTimes(1);
});
