import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminSignupContext } from '../store/AdminSignupContext';
import Button from '../../signup/components/Button';

const AdminSignupStep2 = () => {
  const navigate = useNavigate();
  const { adminSignupData, setAdminSignupData } = useAdminSignupContext();
  const [selectedRole, setSelectedRole] = useState<'' | '센터장' | '사회복지사'>(adminSignupData.role || '');

  const handleRoleSelect = (role: '센터장' | '사회복지사') => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    setAdminSignupData({ ...adminSignupData, role: selectedRole });

    if (selectedRole === '센터장') {
      navigate('/center/signup/step3'); // 센터장 정보 입력 페이지로 이동
    } else if (selectedRole === '사회복지사') {
      navigate('/center/signup/step5'); // 사회복지사 센터코드 입력 페이지로 이동
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h1 className="mb-6 text-left text-xl font-bold text-gray-900">
          직급을 <br /> 선택해주세요
        </h1>

        <p className="mb-2 text-sm font-semibold text-gray-900">
          직급 (필수선택) <span className="text-red-500">*</span>
        </p>

        <div className="flex gap-4">
          <button
            className={`flex-1 rounded-md border px-4 py-3 text-center ${
              selectedRole === '센터장'
                ? 'bg-primary-100 text-primary-500 border-primary-500'
                : 'border-gray-300 text-gray-900'
            }`}
            onClick={() => handleRoleSelect('센터장')}
          >
            센터장
          </button>
          <button
            className={`flex-1 rounded-md border px-4 py-3 text-center ${
              selectedRole === '사회복지사'
                ? 'bg-primary-100 text-primary-500 border-primary-500'
                : 'border-gray-300 text-gray-900'
            }`}
            onClick={() => handleRoleSelect('사회복지사')}
          >
            사회복지사
          </button>
        </div>
      </div>

      {/* 다음으로 버튼 */}
      <Button text="다음으로" onClick={handleNext} disabled={!selectedRole} isFixed={true} />
    </div>
  );
};

export default AdminSignupStep2;
