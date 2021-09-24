import { useState } from 'react';
import locale from '../locale';

export const useErrorCodes = () => {
  const [errors] = useState(locale.hooks.errorCodes);

  return errors;
};
