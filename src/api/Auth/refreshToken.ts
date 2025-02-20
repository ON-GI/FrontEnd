import { removeCookie, setCookie } from '../../utils/cookie';
import client from '../instnace';

const refreshToken = async () => {
  try {
    const response = await client.post('/auth/refresh');

    const token = response.data.data.accessToken.split(' ')[1];

    setCookie('accessToken', token);
  } catch (error) {
    removeCookie('accessToken');
    removeCookie('role');
    window.location.replace('/');
  }
};

export default refreshToken;
