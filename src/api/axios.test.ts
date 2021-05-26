import { logout } from '../auth';
import { getFailure, getSuccess } from '../test-utils';
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
});
