import { useState } from 'react';
import { useSignupContext } from '../store/SignupContext';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const CAREER_OPTIONS = [
  { label: '경력 없음', value: 'NONE' },
  { label: '1년 이하', value: 'LESS_THAN_ONE_YEAR' },
  { label: '1년 ~ 3년 미만', value: 'ONE_TO_THREE_YEARS' },
  { label: '3년 ~ 5년 미만', value: 'THREE_TO_FIVE_YEARS' },
  { label: '5년 이상', value: 'MORE_THAN_FIVE_YEARS' },
];

const StepOptionalInfo = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();

  const [career, setCareer] = useState(signupData.optional?.career || 'NONE');
  const [description, setDescription] = useState(signupData.optional?.description || '');

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 40) {
      setDescription(e.target.value);
    }
  };

  const handleComplete = (skip = false) => {
    // ✅ 기존 데이터 유지하면서 optional 내부 정보만 업데이트
    const updatedData = {
      ...signupData, // 기존 signupData 유지
      optional: {
        ...signupData.optional, // 기존 optional 내부 데이터 유지
        career: skip ? '' : career, // 선택한 career 업데이트
        description: skip ? '' : description, // 선택한 description 업데이트
      },
    };

    // 🔹 이전에 저장된 signupData 확인
    console.log('🔹 이전 signupData:', signupData);

    // 🔹 업데이트될 데이터 확인
    console.log('✅ 최종 저장되는 데이터:', updatedData);

    setSignupData(updatedData);
    navigate(`/signup/caregiver/step5`);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
          여기서부터는 <br /> 선택 입력 사항들이에요
        </h2>

        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">경력 기간</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {CAREER_OPTIONS.map((option) => (
              <label key={option.value} className="flex cursor-pointer items-center space-x-3">
                <input
                  type="radio"
                  name="career"
                  value={option.value}
                  checked={career === option.value}
                  onChange={() => setCareer(option.value)}
                  className="hidden"
                />
                <div className="flex items-center">
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full border transition ${
                      career === option.value ? 'border-green-500' : 'border-gray-400'
                    }`}
                  >
                    {career === option.value && <div className="h-2 w-2 rounded-full bg-green-500"></div>}
                  </div>
                  <span
                    className={`ml-2 text-gray-900 ${career === option.value ? 'font-semibold text-green-600' : ''}`}
                  >
                    {option.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">한 줄 소개</label>
          <textarea
            placeholder="간단한 자기 소개를 입력해주세요."
            value={description}
            onChange={handleDescriptionChange}
            maxLength={40}
            className="focus:border-primary-500 mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
            rows={3}
          />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md gap-2">
        <button
          onClick={() => handleComplete(true)}
          className="w-1/3 rounded-md border border-gray-300 bg-gray-300 px-4 py-3 font-semibold text-gray-700"
        >
          다음에 하기
        </button>
        <button
          onClick={() => handleComplete()}
          disabled={!description.trim()}
          className={`w-2/3 rounded-md px-4 py-3 font-semibold ${
            !description.trim() ? 'bg-primary-100 cursor-not-allowed text-white' : 'bg-primary-500 text-white'
          }`}
        >
          입력 완료
        </button>
      </div>
    </div>
  );
};

export default StepOptionalInfo;
