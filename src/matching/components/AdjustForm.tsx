import { useState } from 'react';
import { useMatchingContext } from '../store/MatchingContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../signup/components/Button';
import React from 'react';

const AdjustForm = () => {
  const { elderlyInfo, adjustmentData, setAdjustmentData, matchingStatus } = useMatchingContext();
  const [adjustments, setAdjustments] = useState(adjustmentData.adjustments);
  const [additionalRequests, setAdditionalRequests] = useState(adjustmentData.additionalRequests);
  const navigate = useNavigate();
  const isAccepted = matchingStatus.isAccepted;

  const handleNext = () => {
    setAdjustmentData({
      ...adjustmentData,
      adjustments,
      additionalRequests,
    });

    navigate('/caregiver/matching/qualification');
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-10 w-full max-w-md">
        {/* 제목 */}
        <div className="mt-10">
          <h2 className="mb-4 text-left text-xl leading-tight font-bold text-gray-900">
            조율하고 싶은 <br /> 항목이 있으신가요?
          </h2>
        </div>

        {/* 어르신 정보 */}
        <div className="mt-6 rounded-lg bg-gray-100 p-4 text-gray-900">
          <p className="text-sm">
            <strong>근무 요일 및 시간:</strong> {elderlyInfo.schedule}
          </p>
          <p className="text-sm">
            <strong>케어항목:</strong> {elderlyInfo.careItems.join(', ')}
          </p>
          <p className="text-sm">
            <strong>급여:</strong> {elderlyInfo.hourlyWage.toLocaleString()}원
          </p>
          <p className="text-sm">
            <strong>복리후생:</strong> {elderlyInfo.benefits}
          </p>
        </div>

        {/* 입력 영역 (수락한 경우에만 입력 가능) */}
        {isAccepted ? (
          <div className="mt-6 space-y-4">
            {/* 조율 요청 입력 */}
            <div>
              <label className="mb-2 block font-semibold text-gray-900">조율하고 싶은 내용</label>
              <textarea
                className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="조율하고 싶은 내용을 작성해주세요"
                value={adjustments}
                onChange={(e) => setAdjustments(e.target.value)}
              />
            </div>

            {/* 추가 요청 사항 입력 */}
            <div>
              <label className="mb-2 block font-semibold text-gray-900">추가 요청 사항</label>
              <textarea
                className="w-full rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="기타 조율 사항이 있으면 작성해주세요"
                value={additionalRequests}
                onChange={(e) => setAdditionalRequests(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <p className="mt-6 text-center text-gray-600">조율 요청을 진행하려면 먼저 수락해야 합니다.</p>
        )}
      </div>

      {/* 다음 버튼 */}
      <Button
        text="다음으로"
        onClick={handleNext}
        disabled={!isAccepted || !adjustments.trim()} // 입력 값 없으면 비활성화
        isFixed={true} // 하단 고정
        variant={!isAccepted || !adjustments.trim() ? 'disabled' : 'primary'} // 입력값 없으면 disabled 스타일 적용
      />
    </div>
  );
};

export default AdjustForm;
