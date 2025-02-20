import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMatchingContext } from '../store/MatchingContext';
import React from 'react';

const ElderlyInfo = () => {
  const { elderlyInfo, setMatchingStatus } = useMatchingContext();
  const navigate = useNavigate();
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleNext = (isAccepted: boolean, isRejected: boolean) => {
    setMatchingStatus({
      isAccepted,
      isRejected,
    });

    if (isAccepted) {
      navigate('/caregiver/matching/adjustment');
    } else {
      navigate('/'); // 임의 작성. 어디로 연결될지 경로만 적으면 됩니다 !!!!!!!!
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-6 pb-6">
      {/* 타이틀 */}
      <div className="mt-10 w-full max-w-md">
        <h1 className="mb-6 text-left text-xl font-bold text-gray-900">
          {elderlyInfo.name} <br /> 정보를 확인해주세요
        </h1>

        {/* 어르신 정보 카드 */}
        <div className="rounded-lg bg-gray-100 p-4">
          <p>
            <strong>지역:</strong> {elderlyInfo.region}
          </p>
          <p>
            <strong>근무 요일 및 시간:</strong> {elderlyInfo.schedule}
          </p>
          <p>
            <strong>케어항목:</strong> {elderlyInfo.careItems.join(', ')}
          </p>
          <p>
            <strong>급여:</strong> {elderlyInfo.hourlyWage.toLocaleString()}원
          </p>
          <p>
            <strong>복리후생:</strong> {elderlyInfo.benefits}
          </p>
          <p>
            <strong>어르신 정보:</strong> {elderlyInfo.birthYear}년생, {elderlyInfo.gender},{' '}
            {elderlyInfo.longTermCareGrade ?? '없음'}
          </p>
          <p>
            <strong>치매 증상:</strong> {elderlyInfo.dementia}
          </p>
          <p>
            <strong>동거인 여부:</strong> {elderlyInfo.cohabitation}
          </p>
          <p>
            <strong>담당 기관:</strong> {elderlyInfo.institution}
          </p>
        </div>
      </div>

      {/* 버튼 영역 (하단 중앙 정렬) */}
      <div className="fixed bottom-6 flex w-full max-w-md px-6">
        {isRejected ? (
          // 거절 완료 상태면 "뒤로가기" 버튼만 표시
          <button className="w-full rounded-md bg-green-600 py-3 text-white" onClick={() => navigate('/')}>
            뒤로가기
          </button>
        ) : (
          <div className="flex w-full gap-4">
            <button
              className="w-1/2 rounded-md bg-gray-300 py-2 text-sm text-gray-900"
              onClick={() => setIsRejectModalOpen(true)}
            >
              거절하기
            </button>
            <button
              className="w-1/2 rounded-md bg-green-600 py-2 text-sm text-white"
              onClick={() => handleNext(true, false)}
            >
              수락 / 조율 요청
            </button>
          </div>
        )}
      </div>

      {isRejectModalOpen && (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-6 text-center text-lg font-semibold text-gray-900">
              어르신의 요청을 <br /> 거절하는게 맞으신가요?
            </p>
            <div className="flex gap-4">
              <button
                className="w-32 rounded-md bg-gray-300 py-2 text-gray-900"
                onClick={() => setIsRejectModalOpen(false)}
              >
                아니요
              </button>
              <button
                className="w-32 rounded-md bg-green-600 py-2 text-white"
                onClick={() => {
                  setIsRejected(true);
                  setIsRejectModalOpen(false);
                }}
              >
                네
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElderlyInfo;
