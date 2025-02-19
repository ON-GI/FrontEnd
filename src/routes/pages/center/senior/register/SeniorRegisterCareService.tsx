import BaseButton from '../../../../../components/common/BaseButton';
import { useNavigate } from 'react-router-dom';
import CheckBox from '../../../../../components/common/CheckBox';
import { ChangeEvent, useState } from 'react';

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
  const [] = useState();
  const navigate = useNavigate();
  const onSubmit = () => {};

  const onChange = (selectList: string[]) => {
    console.log(selectList);
  };
  return (
    <section className="flex h-full flex-col justify-between">
      <div className="p-5">
        <div>
          <div>
            <h3 className="mb-5 text-2xl font-semibold">
              어르신에게 필요한 <br />
              서비스를 모두 선택해주세요
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <CheckBox
            resetValue="NOT_APPLICABLE"
            checkBoxList={toiletingCareOptions}
            checkBoxTitle="배변보조(복수선택 가능)"
            required
            lastFill
            onChange={onChange}
          />
          <CheckBox
            resetValue="NOT_APPLICABLE"
            checkBoxList={feedingCareOptions}
            checkBoxTitle="식사보조(복수선택 가능)"
            required
            lastFill
            onChange={onChange}
          />
          <CheckBox
            resetValue="NOT_APPLICABLE"
            checkBoxList={mobilityCareOptions}
            checkBoxTitle="이동보조(복수선택 가능)"
            required
            lastFill
            onChange={onChange}
          />
          <CheckBox
            resetValue="NOT_APPLICABLE"
            checkBoxList={dailyLivingSupportOptions}
            checkBoxTitle="일상생활(복수선택 가능)"
            required
            lastFill
            onChange={onChange}
          />
        </div>
      </div>

      <div className="flex gap-4 p-5">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/care-time')}
        >
          뒤로가기
        </button>
        <BaseButton onClick={onSubmit}>입력완료</BaseButton>
      </div>
    </section>
  );
};

export default SeniorRegisterCareService;
