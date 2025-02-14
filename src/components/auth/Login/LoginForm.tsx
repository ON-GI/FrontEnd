import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import useLogin from './useLogin';

import BaseInput from '../../common/BaseInput';

const LoginForm = () => {
  const idInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { mutate, error, isError } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ id: idInputRef.current!.value, password: passwordInputRef.current!.value });
  };

  return (
    <>
      <div>
        <p className="mb-10 text-2xl font-semibold">
          로그인 후<br /> 온기의 모든 기능을
          <br /> 이용해보세요!
        </p>
        <form onSubmit={handleSubmit} id="login" className="flex h-full flex-col justify-between">
          <BaseInput ref={idInputRef} type="text" id="id" placeholder="아이디" className="mb-4" />

          <BaseInput
            inputState={isError ? 'invalid' : 'default'}
            error={error?.message}
            ref={passwordInputRef}
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
          <Link to="sign-up" className="text-primary-400">
            회원가입 하기
          </Link>
        </p>
        <button form="login" type="submit" className="bg-primary-400 w-full rounded-lg p-3 text-white">
          로그인
        </button>
      </div>
    </>
  );
};

export default LoginForm;
