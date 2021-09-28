import { renderHook } from '@testing-library/react-hooks';
import { useReferenceData } from '@mtfh/common/lib/api/reference-data/v1';

import locale from '../../locale';
import { useErrorCodes } from '../use-error-codes';

jest.mock('../../api/reference-data/v1');
const { hooks } = locale;
const { errorMessages } = hooks;

describe('useErrorCodes', () => {
  const $useReferenceDataMock = useReferenceData as jest.Mock;

  test('it returns null if call to the referenceData API has not resolved', () => {
    $useReferenceDataMock.mockReturnValueOnce({
      data: undefined,
      error: undefined,
    });

    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toBe(null);
  });

  test('it returns default errorMessages if call to the referenceData API has failed', () => {
    $useReferenceDataMock.mockReturnValueOnce({
      data: undefined,
      error: { status: 404, message: 'Cannot retrieve error code' },
    });

    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toBe(errorMessages);
  });

  test('it makes a call to the referenceData API for error codes and returns them', () => {
    const mergedErrorMessages = {
      ...errorMessages,
      W50: 'W50TEXT_TEST',
      W51: 'W51TEXT_TEST',
    };
    $useReferenceDataMock.mockReturnValue({
      data: [
        {
          id: '93344749-2602-451b-5d17-4c3764330203',
          category: 'error-code',
          subCategory: 'mmh',
          code: 'W50',
          value: 'W50TEXT_TEST',
          description: 'Contact type',
          isActive: true,
          createdAt: '2021-09-24T11:13:19.13661',
          tags: ['Housing'],
        },
        {
          id: '7c1954f3-bd74-0d86-fbf5-d72e0c1a912d',
          category: 'error-code',
          subCategory: 'mmh',
          code: 'W51',
          value: 'W51TEXT_TEST',
          description: 'Selection mandatory',
          isActive: true,
          createdAt: '2021-09-24T11:13:16.561198',
          tags: ['Housing'],
        },
      ],
      error: null,
    });

    const { result } = renderHook(() => useErrorCodes());
    expect(result.current).toStrictEqual(mergedErrorMessages);
  });
});
