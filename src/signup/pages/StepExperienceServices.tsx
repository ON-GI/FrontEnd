import { useState } from 'react';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

// 🔹 경험 서비스 항목 정의
const EXPERIENCE_CATEGORIES = {
  배변보조: ['스스로 배변 가능', '가끔 대소변 실수 시 도움', '기저귀 케어 필요', '유치도뇨/방광루/장루 관리'],
  식사보조: ['스스로 식사 가능', '식사 차려드리기', '죽, 반찬 등 요리 필요', '경관식 보조'],
};

// 🔹 배변보조 (toiletingAssistance) - 한글 → 영어 변환 맵
const toiletingAssistanceMap: { [key: string]: string } = {
  '스스로 배변 가능': 'INDEPENDENT',
  '가끔 대소변 실수 시 도움': 'OCCASIONAL_HELP',
  '기저귀 케어 필요': 'DIAPER_CARE',
  '유치도뇨/방광루/장루 관리': 'CATHETER_OR_COLOSTOMY',
  '해당 없음': 'NOT_APPLICABLE',
};

// 🔹 식사보조 (feedingAssistance) - 한글 → 영어 변환 맵
const feedingAssistanceMap: { [key: string]: string } = {
  '스스로 식사 가능': 'INDEPENDENT',
  '식사 차려드리기': 'MEAL_PREPARATION',
  '죽, 반찬 등 요리 필요': 'COOKING_REQUIRED',
  '경관식 보조': 'TUBE_FEEDING',
  '해당 없음': 'NOT_APPLICABLE',
};

const StepExperienceServices = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();

  // 🔹 기존 데이터가 있으면 한글로 변환하여 사용, 없으면 초기화
  const [experienceServices, setExperienceServices] = useState<{ [key: string]: string[] }>(
    signupData.information
      ? {
          배변보조: signupData.information.toiletingAssistance.map(
            (item) => Object.keys(toiletingAssistanceMap).find((key) => toiletingAssistanceMap[key] === item) || item,
          ),
          식사보조: signupData.information.feedingAssistance.map(
            (item) => Object.keys(feedingAssistanceMap).find((key) => feedingAssistanceMap[key] === item) || item,
          ),
        }
      : { 배변보조: [], 식사보조: [] },
  );
  const toggleService = (category: string, service: string) => {
    setExperienceServices((prev) => {
      let selected = prev[category] || [];

      if (service === '해당 없음') {
        // ✅ "해당 없음" 선택 시 기존 선택된 모든 값 제거 후 "해당 없음"만 저장
        selected = selected.includes('해당 없음') ? [] : ['해당 없음'];
      } else {
        // ✅ 일반 항목 선택 시, "해당 없음" 제거하고 추가/삭제 처리
        selected = selected.includes(service)
          ? selected.filter((item) => item !== service)
          : [...selected.filter((item) => item !== '해당 없음'), service];
      }

      return { ...prev, [category]: selected };
    });
  };

  // 🔹 다음 버튼 활성화 조건
  const isNextEnabled = Object.keys(EXPERIENCE_CATEGORIES).every(
    (category) => (experienceServices[category] || []).length > 0,
  );

  // 🔹 "다음으로" 버튼 클릭 시 저장 및 이동
  const handleNext = () => {
    // 🔹 선택된 항목을 Enum 값으로 변환
    const toiletingAssistance = (experienceServices['배변보조'] || [])
      .map((item) => toiletingAssistanceMap[item])
      .filter(Boolean); // 빈 값 제거

    const feedingAssistance = (experienceServices['식사보조'] || [])
      .map((item) => feedingAssistanceMap[item])
      .filter(Boolean);

    setSignupData((prev) => ({
      ...prev,
      information: {
        ...prev.information, // 기존 정보 유지
        toiletingAssistance, // 변환된 데이터 저장
        feedingAssistance,
      },
    }));

    // 🔹 콘솔 확인 (디버깅용)
    console.log('✅ 변환된 데이터:', {
      toiletingAssistance,
      feedingAssistance,
    });

    navigate(`/signup/caregiver/step6`);
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
            </div>

            {/* 🔹 "해당 없음" 버튼은 카테고리마다 1개씩 별도로 추가 */}
            <button
              type="button"
              onClick={() => toggleService(category, '해당 없음')}
              className={`mt-2 w-full rounded-md border px-4 py-3 text-center ${
                (experienceServices[category] || []).includes('해당 없음')
                  ? 'border-primary-500 bg-primary-100 text-primary-600'
                  : 'border-gray-300'
              }`}
            >
              해당 없음
            </button>
          </div>
        ))}
      </div>

      <Button text="다음으로" onClick={handleNext} disabled={!isNextEnabled} isFixed={true} />
    </div>
  );
};

export default StepExperienceServices;
