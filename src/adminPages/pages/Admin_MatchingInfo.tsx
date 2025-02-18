import { useState } from 'react';

const MatchingPending = () => {
  const dummyData = Array(5).fill({
    name: '김OO 어르신',
    schedule: '월요일 ~ 토요일 (오전, 오후)',
    workingHours: '09:00 ~ 18:00',
    careItems: ['식사보조', '배변보조', '이동보조'],
    hourlyWage: 15000,
  });

  return (
    <div className="mx-auto mt-6 w-full max-w-md px-6">
      <h2 className="text-xl font-bold text-gray-900">
        확인하지 않은 <br /> <span className="text-green-600">매칭 {dummyData.length}건</span>
      </h2>

      <div className="mt-4 space-y-4">
        {dummyData.map((match, index) => (
          <div key={index} className="w-full max-w-md rounded-lg bg-green-50 p-4 shadow-md">
            <p className="text-lg font-semibold">{match.name}</p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">근무요일</span> {match.schedule}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">근무시간</span> {match.workingHours}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">케어항목</span> {match.careItems.join(', ')}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              <span className="font-semibold">시급</span> {match.hourlyWage.toLocaleString()}원
            </p>

            <button className="mt-3 w-[90%] rounded-md bg-green-600 py-2 text-white shadow-md">상세 내용 확인 →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingPending;
