import { useEffect, useState } from 'react';
import { useReferenceData } from '../api/reference-data/v1';
import locale from '../locale';

export const useErrorCodes = () => {
  const [errors, setErrors] = useState<any>(locale.hooks.errorMessages);

  const { data, error } = useReferenceData(
    { category: 'error-code', subCategory: 'mmh' },
    {
      revalidateIfStale: false,
    }
  );

  if (!data && !error) {
    return null;
  }

  if (error) {
    return errors;
  }

  useEffect(() => {
    const fromErrorsDefaultData = Object.entries(errors).map((e, i) => ({
      [e[0]]: e[1],
    }));

    const fromErrorsReferenceData =
      data.map((item) => ({
        [item.code]: item.value,
      })) || [];

    const mergedErrors = [
      ...new Set([...fromErrorsDefaultData, ...fromErrorsReferenceData]),
    ].reduce((obj, item) => {
      const errorCode = Object.keys(item)[0];
      obj[errorCode] = item[errorCode];
      return obj;
    }, {});
    setErrors(mergedErrors);
  }, [data]);

  return errors;
};
