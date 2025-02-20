import { ChangeEvent, useCallback, useMemo, useState } from 'react';

const useLoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // 사용자 아이디
  const handleUserIdChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  // 사용자 비밀번호
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const isFormValid = useMemo(() => {
    return userId.length >= 4 && password.length >= 4;
  }, [userId, password]);

  return {
    userId,
    password,
    isFormValid,
    handleUserIdChange,
    handlePasswordChange,
  };
};

export default useLoginForm;
