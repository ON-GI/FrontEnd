import { useLocation } from 'react-router-dom';
import React from 'react';

const steps = [
  { path: '/signup/step1', label: '아이디 & 비밀번호' },
  { path: '/signup/step2', label: '기본 정보 입력' },
  { path: '/signup/step3', label: '자격증 정보 입력' },
  { path: '/signup/step4', label: '선택 입력 사항' },
];

const ProgressBar = () => {
  const location = useLocation();
  const currentStep = steps.findIndex((step) => step.path === location.pathname) + 1;
  const progressPercent = (currentStep / steps.length) * 100;

  return (
    <div className="my-4 w-full max-w-md">
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div className="bg-primary-500 h-2 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
      </div>
      <p className="mt-2 text-center text-sm">
        {currentStep} / {steps.length} 단계 진행 중
      </p>
    </div>
  );
};

export default ProgressBar;
