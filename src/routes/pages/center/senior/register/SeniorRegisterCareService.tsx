import BaseButton from '../../../../../components/common/BaseButton';
import { useNavigate } from 'react-router-dom';

import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import CheckBox from '../../../../../components/common/CheckBox';
import { SeniorRegisterContext } from './SeniorRegisterLayout';

const toiletingCareOptions = [
  // 배변 보조
  { value: 'TOILETING_INDEPENDENT', label: '스스로 배변 가능' },
  { value: 'TOILETING_ASSISTANCE', label: '가끔 대소변 실수 시 도움' },
  { value: 'TOILETING_BED_CARE', label: '기저귀 케어 필요' },
  { value: 'TOILETING_DEVICE', label: '유치도뇨/방광루/장루' },
  { value: 'NOT_APPLICABLE', label: '해당 없음' },
];

const feedingCareOptions = [
  // 식사보조
  { value: 'FEEDING_SELF', label: '스스로 식사 가능' },
  { value: 'FEEDING_ASSIST', label: '식사 차려드리기' },
  { value: 'FEEDING_COOKING', label: '죽, 반찬 등 요리 필요' },
  { value: 'FEEDING_TUBE', label: '경관식 보조' },
  { value: 'NOT_APPLICABLE', label: '해당 없음' },
];
const mobilityCareOptions = [
  // 아동보조
  { value: 'MOBILITY_SELF', label: '스스로 거동 가능' },
  { value: 'MOBILITY_ASSIST', label: '이동 시 보조 필요' },
  { value: 'MOBILITY_WHEELCHAIR', label: '휠체어 이동 보조' },
  { value: 'MOBILITY_IMMOBILE', label: '거동 불가' },
  { value: 'NOT_APPLICABLE', label: '해당 없음' },
];

const dailyLivingSupportOptions = [
  // 일상생활 지원보조
  { value: 'DAILY_CLEANING', label: '청소, 빨래 보조' },
  { value: 'DAILY_BATHING', label: '목욕 보조' },
  { value: 'DAILY_HOSPITAL', label: '병원 동행' },
  { value: 'DAILY_EXERCISE', label: '산책, 간단한 운동' },
  { value: 'DAILY_EMOTIONAL_SUPPORT', label: '말벗 등 정서 지원' },
  { value: 'DAILY_COGNITIVE', label: '인지자극 활동' },
  { value: 'NOT_APPLICABLE', label: '해당 없음' },
];

const SeniorRegisterCareService = () => {
  const navigate = useNavigate();
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);

  const [toiletingCare, setToiletingCare] = useState<string[]>([]);
  const [feedingCare, setFeedingCare] = useState<string[]>([]);
  const [mobilityCare, setMobilityCare] = useState<string[]>([]);
  const [dailyLivingSupport, setDailyLivingSupport] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // 기존 선택된 항목 불러오기
  useEffect(() => {
    const careDetails =
      seniorInfo.careCondition && 'careDetails' in seniorInfo.careCondition ? seniorInfo.careCondition.careDetails : [];
    if (Array.isArray(careDetails)) {
      setToiletingCare(careDetails.filter((item) => toiletingCareOptions.some((opt) => opt.value === item)));
      setFeedingCare(careDetails.filter((item) => feedingCareOptions.some((opt) => opt.value === item)));
      setMobilityCare(careDetails.filter((item) => mobilityCareOptions.some((opt) => opt.value === item)));
      setDailyLivingSupport(careDetails.filter((item) => dailyLivingSupportOptions.some((opt) => opt.value === item)));
    }
  }, [seniorInfo]);

  // 폼 활성화 여부 체크
  useEffect(() => {
    setIsFormValid(
      toiletingCare.length > 0 && feedingCare.length > 0 && mobilityCare.length > 0 && dailyLivingSupport.length > 0,
    );
  }, [toiletingCare, feedingCare, mobilityCare, dailyLivingSupport]);

  // 카테고리별 상태 변경 로직
  const handleCategoryChange = (prev: string[], value: string, setState: (newState: string[]) => void) => {
    if (value === 'NOT_APPLICABLE') {
      setState(['NOT_APPLICABLE']);
    } else {
      setState(
        prev.includes('NOT_APPLICABLE')
          ? [value]
          : prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value],
      );
    }
  };

  // 제출 시 선택된 항목을 seniorInfo에 저장 후 페이지 이동
  const onSubmit = () => {
    const selectedCareDetails = [...toiletingCare, ...feedingCare, ...mobilityCare, ...dailyLivingSupport].filter(
      (item) => item !== 'NOT_APPLICABLE',
    );

    setSeniorInfo((prev) => ({
      ...prev,
      careCondition: { ...prev.careCondition, careDetails: selectedCareDetails },
    }));

    navigate('/center/senior/register/nursing-grade');
  };

  return (
    <section className="flex h-full flex-col justify-between">
      <div className="p-5">
        <h3 className="mb-5 text-2xl font-semibold">
          어르신에게 필요한 <br /> 서비스를 모두 선택해주세요
        </h3>

        <div className="space-y-4">
          {[
            { label: '배변보조', options: toiletingCareOptions, state: toiletingCare, setter: setToiletingCare },
            { label: '식사보조', options: feedingCareOptions, state: feedingCare, setter: setFeedingCare },
            { label: '이동보조', options: mobilityCareOptions, state: mobilityCare, setter: setMobilityCare },
            {
              label: '일상생활 지원',
              options: dailyLivingSupportOptions,
              state: dailyLivingSupport,
              setter: setDailyLivingSupport,
            },
          ].map(({ label, options, state, setter }) => (
            <div key={label}>
              <p className="mb-2 block font-medium">
                {label} (복수선택 가능) <span className="text-[#FF0000]">*</span>
              </p>
              <div className="grid grid-cols-2 gap-2">
                {options.map((item) => (
                  <CheckBox
                    label={item.label}
                    value={item.value}
                    key={item.value}
                    className="last:col-span-2"
                    onChange={() => handleCategoryChange(state, item.value, setter)}
                    checked={state.includes(item.value)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 p-5">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/care-time')}
        >
          뒤로가기
        </button>
        <BaseButton onClick={onSubmit} disabled={!isFormValid}>
          입력완료
        </BaseButton>
      </div>
    </section>
  );
};

export default SeniorRegisterCareService;
