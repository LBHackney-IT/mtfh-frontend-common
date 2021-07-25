import { rest } from 'msw';
import { logout } from '../auth';
import { getFailure, getSuccess, server } from '../test-utils';
import { axiosInstance, createCancelToken } from './axios';

jest.mock('../auth', () => ({
  logout: jest.fn(),
  $auth: {
    getValue: jest.fn(() => ({ token: 'string' })),
  },
}));

describe('axiosInstance', () => {
  test('it calls with Authorization header', async () => {
    getSuccess('success');

    const res = await axiosInstance.get('/api');

    expect(res.data).toBe('success');
  });

  test('it throws an error on bad request', () => {
    getFailure('failure');

    return expect(axiosInstance.get('/api')).rejects.toThrow();
  });

  test('it will logout on 403', async () => {
    getFailure('failure', 403);
    try {
      await axiosInstance.get('/api');
    } catch (e) {
      //
    }
    expect(logout).toBeCalledTimes(1);
  });

  test('it can generate a cancel token', () => {
    const source = createCancelToken();
    expect(source.token).toBeTruthy();
  });

  test('etag is appended to response in get request', async () => {
    getSuccess({ id: '70a8d798-d707-4eee-8c9e-7fe1ecaf42cb' });

    const res = await axiosInstance.get('/api');

    expect(res.data.etag).toBe('1');
  });

  test('etag in patch data is appended to If-Match header', async () => {
    server.use(
      rest.patch('/api', (req, res, ctx) => {
        if (req.headers?.has('If-Match')) {
          return res.once(ctx.status(200), ctx.json(req.body));
        }
        return res.once(ctx.status(500), ctx.json({ error: 'failed' }));
      })
    );

    const res = await axiosInstance.patch('/api', {
      id: '70a8d798-d707-4eee-8c9e-7fe1ecaf42cb',
      etag: '1',
    });

    expect(res.status).toBe(200);
    expect(res.data).toStrictEqual({
      id: '70a8d798-d707-4eee-8c9e-7fe1ecaf42cb',
    });
  });

  test('If-Match header is not sent when no etag is provided', async () => {
    server.use(
      rest.patch('/api', (req, res, ctx) => {
        if (req.headers?.has('If-Match')) {
          return res.once(ctx.status(500), ctx.json({ error: 'failed' }));
        }
        return res.once(ctx.status(200), ctx.json({ success: true }));
      })
    );

    const res = await axiosInstance.patch('/api');

    expect(res.status).toBe(200);
    expect(res.data).toStrictEqual({ success: true });
  });
});
