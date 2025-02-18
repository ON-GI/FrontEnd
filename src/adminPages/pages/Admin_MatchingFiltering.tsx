import { useState } from 'react';

const categories = [
  { key: 'all', label: '전체' },
  { key: 'unconfirmed', label: '미확인 요청' },
  { key: 'completed', label: '매칭 완료' },
  { key: 'inProgress', label: '매칭 진행중' },
  { key: 'latest', label: '최신 요청' },
];

// 더미 데이터
const dummyData = [
  {
    id: 1,
    name: '김OO 어르신',
    schedule: '월요일 ~ 토요일 (오전, 오후)',
    workingHours: '09:00 ~ 18:00',
    careItems: ['식사보조', '배변보조', '이동보조'],
    hourlyWage: 15000,
    status: 'unconfirmed', // 미확인 요청
  },
  {
    id: 2,
    name: '김OO 어르신',
    schedule: '월요일 ~ 토요일 (오전, 오후)',
    workingHours: '09:00 ~ 18:00',
    careItems: ['식사보조', '배변보조', '이동보조'],
    hourlyWage: 15000,
    status: 'completed', // 매칭 완료
  },
  {
    id: 3,
    name: '김OO 어르신',
    schedule: '월요일 ~ 토요일 (오전, 오후)',
    workingHours: '09:00 ~ 18:00',
    careItems: ['식사보조', '배변보조', '이동보조'],
    hourlyWage: 15000,
    status: 'inProgress', // 매칭 진행중
  },
  {
    id: 4,
    name: '김OO 어르신',
    schedule: '월요일 ~ 토요일 (오전, 오후)',
    workingHours: '09:00 ~ 18:00',
    careItems: ['식사보조', '배변보조', '이동보조'],
    hourlyWage: 15000,
    status: 'latest', // 최신 요청
  },
];

const MatchingRequestList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 선택한 카테고리에 맞게 데이터 필터링
  const filteredData =
    selectedCategory === 'all' ? dummyData : dummyData.filter((item) => item.status === selectedCategory);

  return (
    <div className="mx-auto w-full max-w-md px-6">
      {/* 제목 */}
      <h2 className="text-center text-xl font-bold text-gray-900">매칭 요청 목록 조회</h2>

      {/* 필터 버튼 */}
      <div className="scrollbar-hide mt-4 flex w-full space-x-2 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
              selectedCategory === category.key ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 매칭 카드 목록 */}
      <div className="mt-4 space-y-4">
        {filteredData.map((match) => (
          <div
            key={match.id}
            className={`relative w-full max-w-md rounded-lg p-4 shadow-md ${
              match.status === 'unconfirmed' ? 'bg-green-50' : 'bg-white'
            }`}
          >
            {/* 🔹 매칭 진행중인 경우에만 오른쪽 상단 상태 태그 표시 */}
            {match.status === 'inProgress' && (
              <span className="absolute top-4 right-4 rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-800">
                매칭 진행중
              </span>
            )}

            {/* 매칭 정보 */}
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

            {/* 상세 확인 버튼 */}
            <button className="mt-3 w-full rounded-md bg-green-600 py-2 text-white shadow-md">상세 내용 확인 →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingRequestList;
