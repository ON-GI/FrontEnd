import { useState } from 'react';
import { useSignupContext } from '../store/SignupContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CAREER_OPTIONS = [
  { label: '아직 경력이 없어요', value: 'NO_EXPERIENCE' },
  { label: '나중에 입력할래요', value: 'LATER' },
  { label: '1년 이하', value: 'LESS_THAN_ONE_YEAR' },
  { label: '1년 ~ 3년 미만', value: 'ONE_TO_THREE_YEARS' },
  { label: '3년 ~ 5년 미만', value: 'THREE_TO_FIVE_YEARS' },
  { label: '5년 이상', value: 'MORE_THAN_FIVE_YEARS' },
];

const StepOptionalInfo = () => {
  const { signupData, setSignupData } = useSignupContext();
  const navigate = useNavigate();

  const [career, setCareer] = useState(signupData.career || 'NO_EXPERIENCE');
  const [description, setDescription] = useState(signupData.description || '');

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 40) {
      setDescription(e.target.value);
    }
  };
  const handleComplete = (skip = false) => {
    // 현재 URL을 확인하여 'caregiver' 또는 'admin'을 자동으로 감지
    const basePath = window.location.pathname.includes('admin') ? '/signup/admin' : '/signup/caregiver';

    setSignupData((prev) => ({
      ...prev,
      career: skip ? '' : career, //"다음에 하기"를 누르면 공백으로 보냄
      description: skip ? '' : description, //"다음에 하기"를 누르면 공백으로 보냄
    }));

    navigate(`${basePath}/step5`); // 경로를 caregiver/admin에 맞게 설정
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        {/* 제목 */}
        <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
          여기서부터는 <br /> 선택 입력 사항들이에요
        </h2>

        {/* 경력 기간 선택 */}
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

        {/* 한 줄 소개 입력 */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-900">한 줄 소개</label>
          <textarea
            placeholder="간단한 자기 소개를 입력해주세요."
            value={description}
            onChange={handleDescriptionChange}
            maxLength={40} //최대 40자 입력 제한
            className="focus:border-primary-500 mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
            rows={3}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button text="다음에 하기" onClick={() => handleComplete(true)} variant="secondary" className="flex-1" />
        <Button text="입력 완료" onClick={() => handleComplete()} disabled={!description.trim()} className="flex-1" />
      </div>
    </div>
  );
};

export default StepOptionalInfo;
