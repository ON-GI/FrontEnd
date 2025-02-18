import { useMutation } from '@tanstack/react-query';

import client from '../../../api/instnace';
import { setCookie } from '../../../utils/cookie';

const useLogin = (authority: 'ROLE_CAREGIVER' | 'ROLE_CENTER') => {
  return useMutation({
    mutationFn: async ({ id, password }: { id: string; password: string }) => {
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
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export default useLogin;
