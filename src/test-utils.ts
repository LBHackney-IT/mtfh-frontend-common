import { isValidElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { RunOptions } from 'axe-core';
import { axe, toHaveNoViolations } from 'jest-axe';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { queries } from './hooks/use-breakpoint';

expect.extend(toHaveNoViolations);

export { queries };
export const server = setupServer();

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export { axe };

type UI = Parameters<typeof render>[0];
type TestA11YOptions = RenderOptions & { axeOptions?: RunOptions };

export const testA11y = async (
  ui: UI | Element,
  { axeOptions, ...options }: TestA11YOptions = {}
): Promise<void> => {
  const container = isValidElement(ui) ? render(ui, options).container : ui;

  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};

export const getSuccess = (data: unknown, url = ''): void => {
  server.use(
    rest.get(`/api/${url}`, (req, res, ctx) => {
      if (req.headers?.has('Authorization')) {
        return res.once(ctx.status(200), ctx.json(data));
      }
      return res.once(
        ctx.status(403),
        ctx.json({ message: 'UNAUTHENTICATED' })
      );
    })
  );
};

export const getFailure = (data: unknown, code = 500): void => {
  server.use(
    rest.get('/api', (req, res, ctx) =>
      res.once(ctx.status(code), ctx.json(data))
    )
  );
};

export const getNetworkFailure = (): void => {
  server.use(
    rest.get('/api', (req, res) => res.networkError('FAILED TO CONNECT'))
  );
};

window.HTMLElement.prototype.scrollIntoView = jest.fn();
