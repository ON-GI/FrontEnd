import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSignupContext } from '../store/SignupContext';

const StepIdPassword = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({ loginId: false, password: false, confirmPassword: false });
  const [isIdConfirmed, setIsIdConfirmed] = useState(false); // ✅ 중복 확인 기능 제거
  const { signupData, setSignupData } = useSignupContext();

  const isValidLoginId = (id: string) => /^[a-zA-Z0-9]{4,12}$/.test(id);

  const isValidPassword = (pwd: string) => /^[a-zA-Z0-9]{4,8}$/.test(pwd);

  const isLoginIdValid = isValidLoginId(loginId);
  const isPasswordValid = isValidPassword(password);
  const isPasswordMatch = password === confirmPassword;
  const isNextDisabled = !(isLoginIdValid && isPasswordValid && isPasswordMatch && isIdConfirmed);

  // 중복 확인 버튼 클릭 시 (서버 요청 없이 로컬 상태만 변경)
  const handleIdConfirm = () => {
    if (isLoginIdValid) {
      setIsIdConfirmed(true);
    }
  };

  // 다음 페이지 이동
  const handleNext = () => {
    // 현재 URL을 확인하여 'caregiver' 또는 'admin'을 자동으로 감지
    const basePath = window.location.pathname.includes('admin') ? '/signup/admin' : '/signup/caregiver';

    setSignupData({
      ...signupData,
      loginId,
      password,
    });

    navigate(`${basePath}/step2`); // 경로를 caregiver/admin에 맞게 설정
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      {/* 타이틀 */}
      <div className="mx-auto mt-10 w-full max-w-md">
        <h1 className="mb-6 text-left text-xl leading-tight font-bold text-gray-900">
          사용하실 아이디와 <br /> 비밀번호를 적어주세요.
          <br /> 서버 api만들어지면 중복검사 코드 변경하기.
        </h1>

        {/* 아이디 */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="아이디"
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value);
              setIsIdConfirmed(false); // 아이디 수정 시 중복확인 상태 초기화
            }}
            onBlur={() => setTouched({ ...touched, loginId: true })}
            className={`focus:border-primary-500 flex-1 rounded-md border px-4 py-3 text-left placeholder-gray-400 focus:outline-none ${
              touched.loginId && loginId && !isLoginIdValid ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {!isIdConfirmed && (
            <button
              onClick={handleIdConfirm}
              className={`rounded-md border px-4 py-3 transition ${
                isLoginIdValid
                  ? 'bg-primary-100 text-primary-600 border-primary-500'
                  : 'bg-primary-100 text-primary-500 border-primary-500'
              }`}
              disabled={!isLoginIdValid}
            >
              중복 확인
            </button>
          )}
        </div>

        {/* 아이디 검증 결과 메시지 */}
        {touched.loginId && loginId && !isLoginIdValid && (
          <p className="mt-1 text-sm text-red-500">영문, 숫자 조합 / 최소 4자, 최대 12자로 입력해주세요!</p>
        )}
        {isIdConfirmed && <p className="text-primary-500 mt-1 text-sm">사용가능한 아이디입니다!</p>}

        {/* 비밀번호 */}
        <div className="mt-4">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched({ ...touched, password: true })}
            className={`focus:border-primary-500 w-full rounded-md border px-4 py-3 text-left placeholder-gray-400 focus:outline-none ${
              touched.password && password && !isPasswordValid ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {touched.password && password && !isPasswordValid && (
            <p className="mt-1 text-sm text-red-500">영문, 숫자 조합으로 4~8자로 입력해주세요!</p>
          )}
          {touched.password && password && isPasswordValid && (
            <p className="text-primary-500 mt-1 text-sm">올바른 비밀번호 양식입니다!</p>
          )}
        </div>

        {/* 비밀번호 재입력 */}
        <div className="mt-4">
          <input
            type="password"
            placeholder="비밀번호 재입력"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouched({ ...touched, confirmPassword: true })}
            className={`focus:border-primary-500 w-full rounded-md border px-4 py-3 text-left placeholder-gray-400 focus:outline-none ${
              touched.confirmPassword && confirmPassword && !isPasswordMatch ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {touched.confirmPassword && confirmPassword && !isPasswordMatch && (
            <p className="mt-1 text-sm text-red-500">비밀번호가 일치하지 않습니다! </p>
          )}
          {touched.confirmPassword && confirmPassword && isPasswordMatch && (
            <p className="text-primary-500 mt-1 text-sm">비밀번호가 일치합니다!</p>
          )}
        </div>
      </div>

      {/* 다음으로 버튼 */}
      <Button text="다음으로" onClick={handleNext} disabled={isNextDisabled} isFixed={true} />
    </div>
  );
};

export default StepIdPassword;
