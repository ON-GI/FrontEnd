import { useState } from 'react';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const EXPERIENCE_CATEGORIES = {
  배변보조: ['스스로 배변 가능', '가끔 대소변 실수 시 도움', '기저귀 케어 필요', '유치도뇨/방광루/장루 관리'],
  식사보조: ['스스로 식사 가능', '식사 차려드리기', '죽, 반찬 등 요리 필요', '경관식 보조'],
};

const StepExperienceServices = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();

  const [experienceServices, setExperienceServices] = useState<{ [key: string]: string[] }>(
    signupData.experienceServices || {},
  );

  const toggleService = (category: string, service: string) => {
    setExperienceServices((prev) => {
      let selected = prev[category] || [];

      if (service === '해당 없음') {
        //"해당 없음" 선택 시 → 다른 모든 선택지를 해제하고 "해당 없음"만 유지
        selected = selected.includes('해당 없음') ? [] : ['해당 없음'];
      } else {
        //일반 서비스 선택 시 → "해당 없음" 해제 후 해당 옵션 추가/제거
        selected = selected.includes(service)
          ? selected.filter((item) => item !== service)
          : [...selected.filter((item) => item !== '해당 없음'), service];
      }

      return { ...prev, [category]: selected };
    });
  };

  const isNextEnabled = Object.keys(EXPERIENCE_CATEGORIES).every(
    (category) => (experienceServices[category] || []).length > 0,
  );

  const handleNext = () => {
    // 현재 URL을 확인하여 'caregiver' 또는 'admin'을 자동으로 감지
    const basePath = window.location.pathname.includes('admin') ? '/signup/admin' : '/signup/caregiver';

    setSignupData((prev) => ({
      ...prev,
      experienceServices,
    }));

    console.log({ experienceServices });

    navigate(`${basePath}/step6`); // 경로를 caregiver/admin에 맞게 설정
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
                  className={`w-full rounded-md border px-4 py-3 text-center text-gray-900 ${
                    (experienceServices[category] || []).includes(option)
                      ? 'border-primary-500 bg-primary-100 text-primary-600'
                      : 'border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}

              <button
                type="button"
                onClick={() => toggleService(category, '해당 없음')}
                className={`text-grey-900 col-span-2 w-full rounded-md border px-4 py-3 text-center ${
                  (experienceServices[category] || []).includes('해당 없음')
                    ? 'border-primary-500 bg-primary-100 text-primary-600'
                    : 'border-gray-300'
                }`}
              >
                해당 없음
              </button>
            </div>
          </div>
        ))}
      </div>

      <Button text="다음으로" onClick={handleNext} disabled={!isNextEnabled} isFixed={true} />
    </div>
  );
};

export default StepExperienceServices;
