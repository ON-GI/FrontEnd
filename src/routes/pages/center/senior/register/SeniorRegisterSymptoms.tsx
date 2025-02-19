import React, { useContext, useEffect, useState } from 'react';
import BaseButton from '../../../../../components/common/BaseButton';
import { SeniorRegisterContext } from './SeniorRegisterLayout';
import { useNavigate } from 'react-router-dom';
import CheckBox from '../../../../../components/common/CheckBox';

const DementiaSymptomOptions = [
  {
    label: '정상 (치매 증상 없음)',
    value: 'NONE',
  },
  {
    label: '집 밖을 나감',
    value: 'WANDERING',
  },
  {
    label: '단기 기억 장애',
    value: 'MEMORY_LOSS',
  },
  {
    label: '가족을 알아보지 못함',
    value: 'CANNOT_RECOGNIZE_FAMILY',
  },
  {
    label: '길을 잃거나 자주 가던 곳을 헤맴',
    value: 'GETTING_LOST',
  },
  {
    label: '사람을 의심하는 망상',
    value: 'DELUSIONS',
  },
  {
    label: '어린아이 같은 행동',
    value: 'CHILDISH_BEHAVIOR',
  },
  {
    label: '때리거나 욕설 등 공격적인 행동',
    value: 'AGGRESSIVE_BEHAVIOR',
  },
];

const SeniorRegisterSymptoms = () => {
  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [additionalSymptoms, setAdditionalSymptoms] = useState('');
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);

  const isFormValid = symptoms.length > 0;

  const onSubmit = () => {
    setSeniorInfo({
      ...seniorInfo,
      diseaseCondition: {
        dementiaSymptoms: symptoms[0] === 'NONE' ? [] : symptoms,
        additionalSymptoms: additionalSymptoms,
      },
    });

    navigate('/center/senior/register/cohabitant');
  };

  const handleSymptomOptionChange = (value: string) => {
    if (value === 'NONE') {
      setSymptoms(['NONE']);
    } else {
      setSymptoms((prev) =>
        prev.includes('NONE')
          ? [value]
          : prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value],
      );
    }
  };

  return (
    <section className="flex h-full flex-col justify-between p-5">
      <div>
        <h3 className="mb-5 text-2xl font-semibold">
          어르신의 치매 증상을 <br />
          선택해주세요
        </h3>

        <p className="mb-2 block font-medium">
          치매증상 (복수선택 가능) <span className="text-[#FF0000]">*</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {DementiaSymptomOptions.map((item) => (
            <CheckBox
              label={item.label}
              value={item.value}
              key={item.value}
              className="text-sm"
              onChange={handleSymptomOptionChange}
              checked={symptoms.includes(item.value)}
            />
          ))}
        </div>

        <div className="pt-4">
          <label htmlFor="additionalSymptoms" className="mb-2 block">
            기타
          </label>
          <textarea
            className="focus:border-primary-400 min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-3 outline-0 transition-colors"
            placeholder="어르신이 보유하신 질병/질환을 작성해주세요"
            onChange={(e) => setAdditionalSymptoms(e.target.value)}
            value={additionalSymptoms}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/nursing-grade')}
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

export default SeniorRegisterSymptoms;
