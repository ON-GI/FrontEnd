import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Step6 = () => {
  const navigate = useNavigate();
  const [caregivers] = useState(
    Array(5).fill({
      name: '김OO 보호사님',
      schedule: '월요일 ~ 토요일 (오전, 오후)',
      workingHours: '09:00 ~ 18:00',
      careItems: ['식사보조', '배변보조', '이동보조'],
      hourlyWage: 15000,
    }),
  );

  const handleRematch = () => {
    navigate('/center/matching/search');
  };

  return (
    <div className="p-5">
      {/* 제목 및 재매칭 버튼 */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          온기가 추천드리는 <br />
          요양보호사님들이에요!
        </h2>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleRematch}
          className="cursor-pointer rounded-md border border-gray-300 bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition-opacity hover:animate-pulse"
        >
          재매칭하기
        </button>
      </div>

      {/* 보호사 리스트 */}
      <div className="mt-4 space-y-4">
        {caregivers.map((caregiver, index) => (
          <div
            key={index}
            className="w-full rounded-lg border-gray-300 bg-white p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]"
          >
            <div className="mb-4 flex flex-col gap-1">
              <p className="mb-2 text-lg font-semibold">{caregiver.name}</p>
              <p className="grid grid-cols-2 text-sm text-gray-700">
                <span className="font-semibold">근무요일</span> <span>{caregiver.schedule}</span>
              </p>
              <p className="grid grid-cols-2 text-sm text-gray-700">
                <span className="font-semibold">근무시간</span> <span>{caregiver.workingHours}</span>
              </p>
              <p className="grid grid-cols-2 text-sm text-gray-700">
                <span className="font-semibold">케어항목</span> <span>{caregiver.careItems.join(', ')}</span>
              </p>
              <p className="grid grid-cols-2 text-sm text-gray-700">
                <span className="font-semibold">시급</span> <span>{caregiver.hourlyWage.toLocaleString()}원</span>
              </p>
            </div>

            <button
              className="bg-primary-400 w-full cursor-pointer rounded-lg py-2 text-white"
              onClick={() => navigate(`/center/matching/step6`)}
            >
              상세 내용 확인 →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step6;
