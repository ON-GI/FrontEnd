import client from '../instnace';
import { setCookie } from '../../utils/cookie';
import axios, { AxiosError } from 'axios';

type Role = 'ROLE_CAREGIVER' | 'ROLE_CENTER';

const onLogin = async ({ id, password, authority }: { id: string; password: string; authority: Role }) => {
  try {
    const response = await client.post('/auth/login', {
      loginId: id,
      password: password,
      authority,
    });

    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    const token = response.data.data.accessToken.split(' ')[1];

    setCookie('accessToken', token);
    setCookie('role', authority);
    return response.status;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // ✅ `error.message`에 안전하게 접근 가능
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.'); // ✅ 기본 메시지 설정
    }
  }
};

export default onLogin;
