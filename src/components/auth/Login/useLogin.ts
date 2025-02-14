import { useMutation } from '@tanstack/react-query';

import client from '../../../api/instnace';

const useLogin = () => {
  return useMutation({
    mutationFn: async ({ id, password }: { id: string; password: string }) => {
      const response = await client.post('/caregiver/auth/login', {
        id,
        password,
      });

      if (response.status !== 200) {
        throw new Error(response.data.message);
      }

      // 로그인 성공 후속처리 필요
    },
  });
};

export default useLogin;
