import { act, renderHook } from '@testing-library/react-hooks';

import { getSuccess } from '../../test-utils';
import { useAxiosSWR, useAxiosSWRInfinite } from '../use-axios-swr';

describe('useAxiosSWR', () => {
  test('it configures useSWR correctly', async () => {
    getSuccess('request');
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxiosSWR<string>('/api')
    );
    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();
    expect(result.current.data).toBe('request');
  });
});

describe('useAxiosSWRInfinite', () => {
  test('it configures useSWRInfinite correctly', async () => {
    getSuccess('request 1', '1');
    getSuccess('request 2', '2');
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxiosSWRInfinite<string>((index) => `/api/${index + 1}`)
    );
    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual(['request 1']);
    act(() => {
      result.current.setSize(result.current.size + 1).catch((e) => {
        throw e;
      });
    });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(['request 1', 'request 2']);
  });
});
