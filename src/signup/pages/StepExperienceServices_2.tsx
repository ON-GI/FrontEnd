import { useState } from 'react';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const EXPERIENCE_CATEGORIES = {
  이동보조: ['스스로 거동 가능', '이동시 부축 도움', '휠체어 이동 보조', '거동 불가', '해당 없음'],
  일상생활: [
    '청소, 빨래 보조',
    '목욕 보조',
    '병원 동행',
    '산책, 간단한 운동',
    '말벗 등 정서지원',
    '인지자극 활동',
    '해당 없음',
  ],
};

const StepExperienceServices_2 = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();

  const [experienceServices2, setExperienceServices2] = useState<{ [key: string]: string[] }>(
    signupData.experienceServices2 || {},
  );

  const toggleService = (category: string, service: string) => {
    setExperienceServices2((prev) => {
      let selected = prev[category] || [];

      if (service === '해당 없음') {
        //"해당 없음" 선택 시 → 다른 모든 선택지를 해제하고 "해당 없음"만 유지
        selected = selected.includes('해당 없음') ? [] : ['해당 없음'];
      } else {
        //일반 서비스 선택 시 → "해당 없음" 해제 후 해당 옵션 추가/제거
        selected = selected.includes(service)
          ? selected.filter((item) => item !== service) //선택 해제
          : [...selected.filter((item) => item !== '해당 없음'), service]; //"해당 없음" 제거 후 추가
      }

      return { ...prev, [category]: selected };
    });
  };

  const isNextEnabled = Object.keys(EXPERIENCE_CATEGORIES).every(
    (category) => (experienceServices2[category] || []).length > 0,
  );

  const handleNext = () => {
    // 현재 URL을 확인하여 'caregiver' 또는 'admin'을 자동으로 감지
    const basePath = window.location.pathname.includes('admin') ? '/signup/admin' : '/signup/caregiver';

    setSignupData((prev) => ({
      ...prev,
      experienceServices2,
    }));

    navigate(`${basePath}/complete`); // 경로를 caregiver/admin에 맞게 설정
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        {/* 제목 */}
        <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
          근무하면서 경험한 <br /> 서비스를 모두 선택해주세요
        </h2>

        {Object.entries(EXPERIENCE_CATEGORIES).map(([category, options]) => (
          <div key={category} className="mb-4">
            <label className="block text-sm font-semibold text-gray-900">
              {category}(복수선택 가능)<span className="text-red-500">*</span>
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleService(category, option)}
                  className={`w-full rounded-md border px-4 py-3 text-center ${
                    (experienceServices2[category] || []).includes(option)
                      ? 'border-primary-500 bg-primary-100 text-primary-600'
                      : 'border-gray-300 text-gray-900'
                  } ${option === '해당 없음' ? 'col-span-2' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button text="다음으로" onClick={handleNext} disabled={!isNextEnabled} isFixed={true} />
    </div>
  );
};

export default StepExperienceServices_2;
