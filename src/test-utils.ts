import { rest } from 'msw';
import { setupServer } from 'msw/node';

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
