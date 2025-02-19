import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../signup/components/Button';
import { useAdminSignupContext } from '../store/AdminSignupContext';

const AdminSignupStep1 = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({ adminId: false, adminPassword: false, confirmPassword: false });
  const [isIdConfirmed, setIsIdConfirmed] = useState(false);
  const { adminSignupData, setAdminSignupData } = useAdminSignupContext();

  // 아이디 & 비밀번호 유효성 검사
  const isValidAdminId = (id: string) => /^[a-zA-Z0-9]{4,12}$/.test(id);
  const isValidPassword = (pwd: string) => /^[a-zA-Z0-9]{4,12}$/.test(pwd);

  const isAdminIdValid = isValidAdminId(adminId);
  const isPasswordValid = isValidPassword(adminPassword);
  const isPasswordMatch = adminPassword === confirmPassword;
  const isNextDisabled = !(isAdminIdValid && isPasswordValid && isPasswordMatch && isIdConfirmed);

  // 중복 확인 (서버 API 요청)
  const handleIdConfirm = async () => {
    if (!isAdminIdValid) return;

    try {
      // 서버 요청 대신 프론트에서 임시 성공 처리 서버 열리면 아래 fetch 코드 활성화 시키기
      console.log('[예외 처리] 서버 없이 중복 확인 통과됨');

      setTimeout(() => {
        setIsIdConfirmed(true);
      }, 500);

      /*
      const response = await fetch('/api/v1/admin/users/validate-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminId }),
      });
  
      const data = await response.json();
      if (response.ok && data.available) {
        setIsIdConfirmed(true);
      } else {
        alert('중복된 아이디입니다.');
        setIsIdConfirmed(false);
      }
      */
    } catch (error) {
      console.error('아이디 중복 확인 오류:', error);
    }
  };

  const handleNext = () => {
    setAdminSignupData({
      ...adminSignupData,
      adminId,
      adminPassword,
    });
    navigate('/center/signup/step2');
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h1 className="mb-6 text-left text-xl leading-tight font-bold text-gray-900">
          사용하실 아이디와 <br /> 비밀번호를 적어주세요.
        </h1>

        {/* 아이디 입력 */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="아이디"
            value={adminId}
            onChange={(e) => {
              setAdminId(e.target.value);
              setIsIdConfirmed(false);
            }}
            onBlur={() => setTouched({ ...touched, adminId: true })}
            className={`focus:border-primary-500 flex-1 rounded-md border px-4 py-3 placeholder-gray-400 focus:outline-none ${
              touched.adminId && adminId && !isAdminIdValid ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {!isIdConfirmed && (
            <button
              onClick={handleIdConfirm}
              className={`rounded-md border px-4 py-3 transition ${
                isAdminIdValid
                  ? 'bg-primary-100 text-primary-600 border-primary-500'
                  : 'bg-primary-100 text-primary-500 border-primary-500'
              }`}
              disabled={!isAdminIdValid}
            >
              중복 확인
            </button>
          )}
        </div>

        {touched.adminId && adminId && !isAdminIdValid && (
          <p className="mt-1 text-sm text-red-500">영문, 숫자 조합 / 최소 4자, 최대 12자로 입력해주세요!</p>
        )}
        {isIdConfirmed && <p className="text-primary-500 mt-1 text-sm">사용 가능한 아이디입니다!</p>}

        <div className="mt-4">
          <input
            type="password"
            placeholder="비밀번호"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            onBlur={() => setTouched({ ...touched, adminPassword: true })}
            className={`focus:border-primary-500 w-full rounded-md border px-4 py-3 placeholder-gray-400 focus:outline-none ${
              touched.adminPassword && adminPassword && !isPasswordValid ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {touched.adminPassword && adminPassword && !isPasswordValid && (
            <p className="mt-1 text-sm text-red-500">영문, 숫자 조합으로 4~12자로 입력해주세요!</p>
          )}
          {touched.adminPassword && adminPassword && isPasswordValid && (
            <p className="text-primary-500 mt-1 text-sm">올바른 비밀번호 양식입니다!</p>
          )}
        </div>

        <div className="mt-4">
          <input
            type="password"
            placeholder="비밀번호 재입력"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouched({ ...touched, confirmPassword: true })}
            className={`focus:border-primary-500 w-full rounded-md border px-4 py-3 placeholder-gray-400 focus:outline-none ${
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

      <Button text="다음으로" onClick={handleNext} disabled={isNextDisabled} isFixed={true} />
    </div>
  );
};

export default AdminSignupStep1;
