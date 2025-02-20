import axios from 'axios';
import { getCookie, removeCookie } from '../utils/cookie';
import refreshToken from './Auth/refreshToken';

const accessToken = getCookie('token');

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': `application/json`,
    Accept: '*/*',
  },
  withCredentials: true,
});

export default client;

client.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,

  async (error) => {
    console.log(error.response?.data);

    const originalRequest = error.config;

    // 401 에러가 발생하고, 재시도를 한 적이 없는 경우만 처리
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        return client(originalRequest); // 원래 요청 재시도
      } catch {
        if (axios.isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        } // refreshToken 실패 시 오류 반환
      }
    }

    // 401이 아닌 경우 일반적으로 오류 반환
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
  },
);
