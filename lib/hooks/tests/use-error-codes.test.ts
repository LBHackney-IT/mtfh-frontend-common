import { renderHook } from '@testing-library/react-hooks';
import { useReferenceData } from '../../api/reference-data/v1';
import locale from '../../locale';
import { useErrorCodes } from '../use-error-codes';


jest.mock('../../api/reference-data/v1');
const { hooks } = locale;

describe('useErrorCodes', () => {
  test('it makes a call to the referenceData API for error codes and returns them', () => {
    const $useReferenceDataMock = useReferenceData as jest.Mock;
    $useReferenceDataMock.mockReturnValueOnce({
      data: hooks.errorCodes,
      error: null,
    });

    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toBe(hooks.errorCodes);
  });

  test('it returns null if call to the referenceData API has not resolved', () => {
    const $useReferenceDataMock = useReferenceData as jest.Mock;
    $useReferenceDataMock.mockReturnValueOnce({
      data: undefined,
      error: undefined,
    });

    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toBe(null);
  });

  test('it returns default hooks error codes if call to the referenceData API has failed', () => {
    const $useReferenceDataMock = useReferenceData as jest.Mock;
    $useReferenceDataMock.mockReturnValueOnce({
      data: undefined,
      error: { status: 404, message: 'Cannot retrieve error code' },
    });

    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toBe(hooks.errorCodes);
  });
});
