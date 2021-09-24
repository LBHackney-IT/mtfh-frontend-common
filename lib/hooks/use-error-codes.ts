import { useEffect, useState } from 'react';
import { useReferenceData } from '../api/reference-data/v1';
import locale from '../locale';

export const useErrorCodes = () => {
  const [errors, setErrors] = useState<any>(locale.hooks.errorCodes);

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
    setErrors(data);
  }, [data]);

  return errors;
};
