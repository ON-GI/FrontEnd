import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSignupContext } from '../store/SignupContext';
import client from '../../api/instnace';

const StepIdPassword = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({ loginId: false, password: false, confirmPassword: false });
  const [isIdConfirmed, setIsIdConfirmed] = useState(false);
  const [idCheckMessage, setIdCheckMessage] = useState<string | null>(null);
  const { signupData, setSignupData } = useSignupContext();

  const isValidLoginId = (id: string) => /^[a-zA-Z0-9]{4,12}$/.test(id);
  const isValidPassword = (pwd: string) => /^[a-zA-Z0-9]{4,8}$/.test(pwd);

  const isLoginIdValid = isValidLoginId(loginId);
  const isPasswordValid = isValidPassword(password);
  const isPasswordMatch = password === confirmPassword;
  const isNextDisabled = !(isLoginIdValid && isPasswordValid && isPasswordMatch && isIdConfirmed);

  // 중복 확인 API 요청 함수 (서버 배포 전이라 임시로 항상 성공 처리)
  const handleIdConfirm = async () => {
    if (!isLoginIdValid) return;

    try {
      // API URL을 환경 변수에서 가져와서 사용
      const response = await client.post(`/caregiver/validate-id`, { loginId });

      if (response.data.message === 'success') {
        setIsIdConfirmed(true);
        setIdCheckMessage('사용 가능한 아이디입니다!');
      } else if (response.data.errorCode === '400') {
        setIsIdConfirmed(false);

        // 오류 메시지에 따라 다르게 설정
        if (response.data.message.includes('이미 존재하는')) {
          setIdCheckMessage('이미 존재하는 아이디입니다.');
        } else if (response.data.message.includes('입력해 주세요')) {
          setIdCheckMessage('아이디를 입력해 주세요.');
        } else {
          setIdCheckMessage(response.data.message || '아이디 중복 확인에 실패했습니다.');
        }
      }
    } catch (error) {
      console.error('중복 확인 요청 오류:', error);
    }
  };

  // 다음 페이지 이동
  const handleNext = () => {
    setSignupData({
      ...signupData,
      loginId,
      password,
    });
    navigate(`/signup/caregiver/step2`);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      {/* 제목 */}
      <div className="mx-auto mt-10 w-full max-w-md">
        <h1 className="mb-6 text-left text-xl leading-tight font-bold text-gray-900">
          사용하실 아이디와 <br /> 비밀번호를 적어주세요.
        </h1>

        {/* 아이디 입력 */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="아이디"
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value);
              setIsIdConfirmed(false); // 아이디 수정 시 중복확인 상태 초기화
              setIdCheckMessage(null); // 메시지도 초기화
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

        {/* 아이디 중복 확인 결과 메시지 */}
        {idCheckMessage && (
          <p className={`mt-1 text-sm ${isIdConfirmed ? 'text-green-600' : 'text-red-500'}`}>{idCheckMessage}</p>
        )}

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
