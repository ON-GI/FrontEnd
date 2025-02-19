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

// 🔹 이동 보조(mobilityAssistance) - 한글 → 영어 변환 맵
const mobilityAssistanceMap: { [key: string]: string } = {
  '스스로 거동 가능': 'INDEPENDENT',
  '이동시 부축 도움': 'SUPPORT_WALKING',
  '휠체어 이동 보조': 'WHEELCHAIR_ASSIST',
  '거동 불가': 'IMMOBILE',
  '해당 없음': 'NOT_APPLICABLE',
};

// 🔹 일상생활 보조(dailyLivingAssistance) - 한글 → 영어 변환 맵
const dailyLivingAssistanceMap: { [key: string]: string } = {
  '청소, 빨래 보조': 'HOUSEKEEPING',
  '목욕 보조': 'BATHING_ASSIST',
  '병원 동행': 'HOSPITAL_COMPANION',
  '산책, 간단한 운동': 'WALKING_EXERCISE',
  '말벗 등 정서지원': 'EMOTIONAL_SUPPORT',
  '인지자극 활동': 'COGNITIVE_STIMULATION',
  '해당 없음': 'NOT_APPLICABLE',
};

const StepExperienceServices_2 = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();

  const [experienceServices2, setExperienceServices2] = useState<{ [key: string]: string[] }>(
    signupData.information
      ? {
          이동보조: signupData.information.mobilityAssistance.map(
            (item) => Object.keys(mobilityAssistanceMap).find((key) => mobilityAssistanceMap[key] === item) || item,
          ),
          일상생활: signupData.information.dailyLivingAssistance.map(
            (item) =>
              Object.keys(dailyLivingAssistanceMap).find((key) => dailyLivingAssistanceMap[key] === item) || item,
          ),
        }
      : {},
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
    // 🔹 선택된 한글 값을 영어 Enum 값으로 변환
    const mobilityAssistance = (experienceServices2['이동보조'] || []).map(
      (item) => mobilityAssistanceMap[item] || item,
    );

    const dailyLivingAssistance = (experienceServices2['일상생활'] || []).map(
      (item) => dailyLivingAssistanceMap[item] || item,
    );

    const updatedData = {
      ...signupData,
      information: {
        ...signupData.information,
        mobilityAssistance,
        dailyLivingAssistance,
      },
    };

    // ✅ 네비게이션 전에 로그 찍기
    console.log('업데이트된 데이터:', updatedData);

    // 🔹 기존 signupData의 information에 추가
    setSignupData(updatedData);

    navigate(`/caregiver/signup/complete`);
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
