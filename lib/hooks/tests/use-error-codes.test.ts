import { renderHook } from '@testing-library/react-hooks';
import locale from '../../locale';
import { useErrorCodes } from '../use-error-codes';

const { hooks } = locale;

describe('useErrorCodes', () => {
  test('it returns the default error codes and messages', () => {
    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toBe(hooks.errorCodes);
  });
});
