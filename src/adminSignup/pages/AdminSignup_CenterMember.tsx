import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminSignupContext } from '../store/AdminSignupContext';
import React from 'react';

const AdminSignupStep5 = () => {
  const { adminSignupData, setAdminSignupData } = useAdminSignupContext();
  const [centerCode, setCenterCode] = useState(adminSignupData.centerCode || '');
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  // 센터 코드 유효성 검사 (영문 대문자 + 숫자 6자리)
  const isValidCenterCode = /^[A-Z0-9]{6}$/.test(centerCode);

  // 다음 단계로 이동
  const handleNext = () => {
    if (!isValidCenterCode) return;

    setAdminSignupData({ ...adminSignupData, centerCode });
    console.log({ ...adminSignupData, centerCode });

    navigate('/signup/center/complete');
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h2 className="mb-4 text-left text-xl font-bold text-gray-900">
          센터의 고유 코드를 <br /> 입력해주세요
        </h2>

        {/* 센터 코드 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">
            센터코드<span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500">(센터에서 부여받은 6자리 코드를 입력해주세요)</p>
          <input
            type="text"
            placeholder="영문(대문자)+숫자 조합, 6자리"
            value={centerCode}
            onChange={(e) => setCenterCode(e.target.value.toUpperCase())} // 대문자로 자동 변환
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`mt-2 w-full rounded-md border px-4 py-3 text-gray-900 focus:outline-none ${
              focused ? 'border-primary-500' : centerCode && !isValidCenterCode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {centerCode && !isValidCenterCode && (
            <p className="mt-1 text-sm text-red-500">6자리 영문(대문자) + 숫자로 입력해주세요.</p>
          )}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md gap-2">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate('/signup/center/step2')}
          className="w-1/3 rounded-md border border-gray-300 bg-gray-300 px-4 py-3 font-semibold text-gray-700"
        >
          뒤로가기
        </button>

        {/* 입력 완료 버튼 */}
        <button
          onClick={handleNext}
          disabled={!isValidCenterCode}
          className={`w-2/3 rounded-md px-4 py-3 font-semibold ${
            !isValidCenterCode ? 'bg-primary-100 cursor-not-allowed text-white' : 'bg-primary-500 text-white'
          }`}
        >
          입력 완료
        </button>
      </div>
    </div>
  );
};

export default AdminSignupStep5;
