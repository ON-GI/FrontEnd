import axios from 'axios';
import { getCookie } from '../utils/cookie';

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
    console.log(accessToken);
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
