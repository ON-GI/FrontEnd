import { useMatchingContext } from '../store/MatchingContext';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Completed = () => {
  const { adjustmentData } = useMatchingContext();
  const navigate = useNavigate();

  // 서버로 데이터 전송 함수. API 엔드 포인트 아직 미정이라 정해지면 넣어야 합니다 !!!
  const submitDataToServer = async () => {
    try {
      const response = await fetch('                  ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adjustmentData),
      });

      if (!response.ok) {
        throw new Error('서버 전송 실패');
      }

      console.log('서버 전송 완료:', adjustmentData);
    } catch (error) {
      console.error('데이터 전송 오류:', error);
    }
  };

  const handleConfirm = () => {
    submitDataToServer(); // 서버 전송
    navigate('/caregiver'); // 메인 페이지로 이동
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pb-6">
      <img src="/images/checked.png" alt="완료" className="mb-6 h-24 w-24" />

      <h1 className="mb-2 text-xl font-bold text-gray-900">수락이 완료되었어요!</h1>
      <p className="text-sm text-gray-600">관리자의 최종 확인 후 최종 수락이 결정됩니다.</p>

      <button className="mt-10 w-full max-w-md rounded-md bg-green-600 py-3 text-white" onClick={handleConfirm}>
        확인
      </button>
    </div>
  );
};

export default Completed;
