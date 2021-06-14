import axios, { AxiosError, CancelTokenSource } from 'axios';
import { v4 as uuid } from 'uuid';

import { $auth, logout } from '../auth';

const axiosInstance = axios.create({
  responseType: 'json',
});

axiosInstance.interceptors.request.use((config) => {
  const auth = $auth.getValue();
  return {
    ...config,
    headers: {
      ...(config.headers as Headers),
      Authorization: `Bearer ${auth.token}`,
      'X-Correlation-ID': uuid(),
      'X-User-ID': auth.sub,
    },
  };
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error.response?.status === 403) {
      logout();
    }
    throw error;
  }
);

const createCancelToken = (): CancelTokenSource => axios.CancelToken.source();

export { axiosInstance, createCancelToken };
