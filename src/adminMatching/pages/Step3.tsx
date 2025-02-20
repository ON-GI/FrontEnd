import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Step3 = () => {
  const navigate = useNavigate();
  const [caregiverCount, setCaregiverCount] = useState('');

  // 입력값이 양수일 때만 버튼 활성화
  const isValid = caregiverCount !== '' && Number(caregiverCount) > 0;

  return (
    <div className="mx-auto mt-6 w-full max-w-md px-6">
      {/* 제목 */}
      <h2 className="text-xl font-bold text-gray-900">입력하신 내용이 맞는지 확인해주세요.</h2>

      {/* 정보 카드 */}
      <div className="mt-6 flex flex-col gap-5 rounded-lg bg-gray-100 p-4">
        <p className="grid grid-cols-2 text-sm text-gray-700">
          <span className="font-semibold">설정 근무 시간</span>
          <span>
            월요일 09:00 ~ 10:00 <br />
            월요일 13:00 ~ 14:00
          </span>
        </p>
        <p className="mt-2 grid grid-cols-2 text-sm text-gray-700">
          <span className="font-semibold">케어 시작일 (선택)</span> <span>없음</span>
        </p>
        <p className="mt-2 grid grid-cols-2 text-sm text-gray-700">
          <span className="font-semibold">케어 종료일 (선택)</span> <span>2025. 08. 31</span>
        </p>
        <p className="mt-2 grid grid-cols-2 text-sm text-gray-700">
          <span className="font-semibold">시급</span> <span>12,000원</span>
        </p>
        <p className="mt-2 grid grid-cols-2 text-sm text-gray-700">
          <span className="font-semibold">예상 월급</span> <span>300,000원</span>
        </p>
      </div>

      {/* 입력 필드 */}
      <div className="mx-auto mt-4 w-full max-w-md">
        <p className="text-sm font-semibold text-gray-900">필요한 요양보호사분은 몇 명인가요?</p>
        <div className="relative mt-2 flex w-full items-center rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm">
          <input
            type="number"
            min="1"
            className="flex-1 border-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="인원 수를 입력해주세요."
            value={caregiverCount}
            onChange={(e) => {
              const value = e.target.value;
              // 양수만 입력 가능하도록 필터링
              if (/^\d*$/.test(value) && Number(value) > 0) {
                setCaregiverCount(value);
              } else if (value === '') {
                setCaregiverCount('');
              }
            }}
          />
          <span className="text-gray-500">명</span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white px-6 pt-4 pb-6 shadow-md">
        {' '}
        <div className="mx-auto mt-6 flex w-full max-w-md gap-2">
          <button
            onClick={() => navigate('/center/matching/step2')}
            className="w-1/3 rounded-lg border border-gray-300 bg-gray-300 px-4 py-2 font-semibold text-gray-700"
          >
            뒤로가기
          </button>
          <button
            onClick={() => navigate('/center/matching/search')}
            disabled={!isValid} // 양수 입력 전까지 비활성화
            className={`w-2/3 rounded-lg px-4 py-2 font-semibold text-white transition-colors ${
              isValid ? 'bg-primary-400' : 'bg-primary-300 cursor-not-allowed'
            }`}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
