import { useState } from 'react';
import { useMatchingContext } from '../store/MatchingContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../signup/components/Button';

const QualificationForm = () => {
  const navigate = useNavigate();
  const { adjustmentData, setAdjustmentData } = useMatchingContext();
  const [selectedQualifications, setSelectedQualifications] = useState<string[]>([]);
  const [workHistory, setWorkHistory] = useState([
    { category: '배변보조', detail: '스스로 배변 가능' },
    { category: '식사보조', detail: '스스로 식사 가능' },
    { category: '이동보조', detail: '스스로 거동 가능' },
    { category: '일상생활', detail: '청소, 빨래 보조' },
  ]);

  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 추가

  const toggleQualification = (qualification: string) => {
    setSelectedQualifications((prev) =>
      prev.includes(qualification) ? prev.filter((q) => q !== qualification) : [...prev, qualification],
    );
  };

  const isNextEnabled = selectedQualifications.includes('요양보호사 자격증(필수)');

  const handleNext = () => {
    setAdjustmentData({
      ...adjustmentData,
      selectedQualifications,
      workHistory,
    });

    //서버로 보내기 전 확인 하려고 console 마지막에 하나 달았습니다. 지워도 되는 코드
    console.log('저장된 데이터:', {
      adjustments: adjustmentData.adjustments,
      additionalRequests: adjustmentData.additionalRequests,
      selectedQualifications,
      workHistory,
    });

    navigate('/caregiver/matching/completed');
  };

  const handleDeleteWorkHistory = (category: string) => {
    setWorkHistory((prev) => prev.filter((item) => item.category !== category));
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        <h2 className="mb-4 text-left text-xl font-bold text-gray-900">
          관리자에게 보낼 <br /> 경력 사항을 선택해주세요
        </h2>

        {/* 자격증 선택 */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-gray-900">자격증</h3>
          {['요양보호사 자격증(필수)', '간호조무사 자격증', '사회복지사 자격증'].map((qualification) => {
            const isSelected = selectedQualifications.includes(qualification);
            const isRequired = qualification.includes('(필수)');

            return (
              <button
                key={qualification}
                className={`mb-2 w-full rounded-md border px-4 py-3 text-left ${
                  isSelected ? 'border-green-600 bg-green-100 text-green-600' : 'border-gray-300 text-gray-900'
                }`}
                onClick={() => toggleQualification(qualification)}
              >
                {qualification.replace('(필수)', '')}{' '}
                {isRequired && (
                  <span className={isSelected ? 'text-green-600' : 'text-gray-900'}>
                    (필수) <span className="text-red-500">*</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 근무 이력 */}
        <h3 className="mt-6 font-semibold text-gray-900">근무 이력</h3>
        <div className="mt-2 rounded-lg bg-gray-100 p-4">
          {workHistory.map((item) => (
            <div key={item.category} className="flex items-center justify-between text-sm text-gray-700">
              <span>{item.category}</span>
              <div className="flex items-center gap-2">
                <span>{item.detail}</span>
                {isEditing && (
                  <button
                    className="ml-2 font-bold text-red-500"
                    onClick={() => handleDeleteWorkHistory(item.category)}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 수정하기 버튼 (기능 추가됨) */}
        <button
          className={`mt-4 w-full rounded-md border py-3 ${isEditing ? 'bg-green-600 text-white' : 'border-green-600 text-green-600'}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '수정완료' : '수정하기'}
        </button>
      </div>

      {/* 다음으로 버튼 */}
      <Button
        text="다음으로"
        onClick={handleNext}
        disabled={!isNextEnabled}
        isFixed={true}
        variant={isNextEnabled ? 'primary' : 'disabled'}
      />
    </div>
  );
};

export default QualificationForm;
