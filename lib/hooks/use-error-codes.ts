import { useEffect, useState } from 'react';
import { useReferenceData } from '../api/reference-data/v1';
import locale from '../locale';

interface ErrorMessages {
  [key: string]: string;
}

export const useErrorCodes = () => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>(
    locale.hooks.errorMessages
  );

  const { data, error } = useReferenceData(
    { category: 'error-code', subCategory: 'mmh' },
    {
      revalidateIfStale: false,
    }
  );

  useEffect(() => {
    if (data) {
      const fromErrorsDefaultData = Object.entries(errorMessages).map(
        ([key, value]) => ({
          [key]: value,
        })
      );

      const fromErrorsReferenceData =
        // @ts-ignore
        data.map((item: any) => ({
          [item.code]: item.value,
        })) || [];

      const mergedErrors = [
        ...new Set([...fromErrorsDefaultData, ...fromErrorsReferenceData]),
      ].reduce((obj, item) => {
        const errorCode = Object.keys(item)[0];
        obj[errorCode] = item[errorCode];
        return obj;
      }, {});
      setErrorMessages(mergedErrors);
    }
  }, [data]);

  if (!data && !error) {
    return null;
  }

  if (error) {
    return errorMessages;
  }

  return errorMessages;
};
