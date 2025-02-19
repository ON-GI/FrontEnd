import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const navigate = useNavigate();

  const elderlyInfo = {
    name: '김OO 어르신',
    genderAge: '남성, 80세',
    birthDate: 'XXXX년 XX월 XX일',
    careGrade: '1등급',
    location: '서울시 서대문구 연희동',
    workSchedule: '월요일 9:00 ~ 10:00',
    careItems: ['식사 보조 - 같이 밥 먹기', '배변 보조'],
    dementia: '없음 (정상)',
    cohabitation: '독거',
  };

  return (
    <div className="flex min-h-screen flex-col justify-between px-6 pb-6">
      <div className="mx-auto mt-6 flex w-full max-w-md items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">선택한 어르신이 맞는지 확인해주세요</h2>
        <img src="/images/grandf.png" alt="어르신 이미지" className="h-24 w-24 rounded-full" />
      </div>

      <div className="mx-auto w-full max-w-md rounded-lg bg-gray-100 p-4 shadow">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">성별 및 나이</span> {elderlyInfo.genderAge}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">생년월일</span> {elderlyInfo.birthDate}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">요양등급</span> {elderlyInfo.careGrade}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">지역</span> {elderlyInfo.location}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">근무 요일 및 시간</span> {elderlyInfo.workSchedule}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">케어 항목</span> {elderlyInfo.careItems.join(', ')}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">치매 증상</span> {elderlyInfo.dementia}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">동거인 여부</span> {elderlyInfo.cohabitation}
        </p>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-md gap-2">
        <button
          onClick={() => navigate('/center/matching/step1')}
          className="w-1/3 rounded-md border border-gray-300 bg-gray-300 px-4 py-3 font-semibold text-gray-700"
        >
          뒤로가기
        </button>
        <button
          onClick={() => navigate('/center/matching/step3')}
          className="bg-primary-500 w-2/3 rounded-md px-4 py-3 font-semibold text-white"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Step2;
