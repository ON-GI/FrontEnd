import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step6 = () => {
  const navigate = useNavigate();
  const [caregivers, setCaregivers] = useState(
    Array(5).fill({
      name: '김OO 어르신',
      schedule: '월요일 ~ 토요일 (오전, 오후)',
      workingHours: '09:00 ~ 18:00',
      careItems: ['식사보조', '배변보조', '이동보조'],
      hourlyWage: 15000,
    }),
  );

  const handleRematch = () => {
    window.location.reload();
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-md px-6">
      {/* 제목 및 재매칭 버튼 */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          온기가 추천드리는 <br />
          요양보호사님들이에요!
        </h2>
        <button
          onClick={handleRematch}
          className="rounded-md border border-gray-300 bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
        >
          재매칭하기
        </button>
      </div>

      {/* 보호사 리스트 */}
      <div className="mt-4 space-y-4">
        {caregivers.map((caregiver, index) => (
          <div key={index} className="w-full max-w-md rounded-lg border-gray-300 bg-white p-4 shadow-md">
            <p className="text-lg font-semibold">{caregiver.name}</p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">근무요일</span> {caregiver.schedule}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">근무시간</span> {caregiver.workingHours}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">케어항목</span> {caregiver.careItems.join(', ')}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              <span className="font-semibold">시급</span> {caregiver.hourlyWage.toLocaleString()}원
            </p>

            <button
              className="mt-3 w-full rounded-md bg-green-600 py-2 text-white shadow-md"
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
