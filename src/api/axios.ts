import axios, { AxiosError, CancelTokenSource } from 'axios';

import { $auth, logout } from '../auth';

const axiosInstance = axios.create({
  responseType: 'json',
});

axiosInstance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...(config.headers as Headers),
    Authorization: `Bearer ${$auth.getValue().token}`,
  },
}));

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
