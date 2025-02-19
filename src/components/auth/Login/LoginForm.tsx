import { FormEvent, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import BaseInput from '../../common/BaseInput';
import useLoginForm from './useLoginForm';
import BaseButton from '../../common/BaseButton';
import onLogin from '../../../api/Auth/Login';
import useAuthStore from '../../../store/useAuthStore';

const LoginForm = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const q = searchParams.get('q')!;
  console.log(error);
  const authority = q === 'caregiver' ? 'ROLE_CAREGIVER' : 'ROLE_CENTER';

  const { userId, password, handlePasswordChange, handleUserIdChange, isFormValid } = useLoginForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await onLogin({ id: userId, password: password, authority });
      if (response === 200) {
        login(authority);
        navigate(`/${q}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    }
  };

  return (
    <>
      <div>
        <p className="mb-10 text-2xl font-semibold">
          로그인 후<br /> 온기의 모든 기능을
          <br /> 이용해보세요!
        </p>
        <form onSubmit={handleSubmit} id="login" className="flex h-full flex-col justify-between">
          <BaseInput
            value={userId}
            onChange={handleUserIdChange}
            type="text"
            id="id"
            placeholder="아이디"
            className="mb-4"
          />

          <BaseInput
            inputState={error ? 'invalid' : 'default'}
            error={error}
            onChange={handlePasswordChange}
            value={password}
            type="password"
            id="password"
            placeholder="비밀번호"
          />
          <p className="pt-4 text-gray-500">아이디 찾기/ 비밀번호 찾기</p>
        </form>
      </div>
      <div>
        <p className="mb-4 text-center text-gray-900">
          아직 회원이 아니신가요?{' '}
          <Link to={q === 'caregiver' ? '/signup/caregiver/step1' : '/adminSignup/step1'} className="text-primary-400">
            회원가입 하기
          </Link>
        </p>
        <BaseButton
          disabled={!isFormValid}
          form="login"
          type="submit"
          className="bg-primary-400 w-full rounded-lg p-3 text-white"
        >
          로그인
        </BaseButton>
      </div>
    </>
  );
};

export default LoginForm;
