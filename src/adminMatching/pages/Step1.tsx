import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const dummyData = Array(5).fill({
    name: '김OO 어르신',
    schedule: '월요일 ~ 토요일 (오전, 오후)',
    workingHours: '09:00 ~ 18:00',
    careItems: ['식사보조', '배변보조', '이동보조'],
    hourlyWage: 15000,
  });

  const handleDetailClick = (index: number) => {
    setSelectedIndex(index);
    navigate('/center/matching/step2');
  };

  return (
    <div className="w-full p-5">
      <h2 className="mb-5 text-2xl font-semibold text-gray-900">
        매칭할 <br />
        <span>어르신을 선택해주세요.</span>
      </h2>
      <div className="mt-4 w-full space-y-4">
        {dummyData.map((match, index) => (
          <div
            key={index}
            className={`w-full rounded-lg border p-4 transition-colors ${
              selectedIndex === index ? 'border-primary-400 bg-green-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <p className="mb-2 text-lg font-semibold">{match.name}</p>
            <p className="mb-1 text-sm text-gray-700">
              <span className="font-semibold">근무요일</span> {match.schedule}
            </p>
            <p className="mb-1 text-sm text-gray-700">
              <span className="font-semibold">근무시간</span> {match.workingHours}
            </p>
            <p className="mb-1 text-sm text-gray-700">
              <span className="font-semibold">케어항목</span> {match.careItems.join(', ')}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              <span className="font-semibold">시급</span> {match.hourlyWage.toLocaleString()}원
            </p>

            <button
              className="bg-primary-400 mt-4 w-full cursor-pointer rounded-md py-2 text-white shadow-md"
              onClick={() => handleDetailClick(index)}
            >
              상세 내용 확인 →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1;
