import { useNavigate } from 'react-router-dom';

const MatchingConfirm = () => {
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

  const caregiverInfo = {
    name: '김○○',
    requiredCert: '요양보호사 자격증 (2025-0000000)',
    additionalCert: '사회복지사 자격증 (1-123456)',
    location: '서울특별시 마포구 아현동',
    workDays: '월요일 오전, 오후',
    desiredWage: '11,000원 (시급)',
  };

  return (
    <div className="flex h-screen flex-col">
      {/* 제목 */}
      <div className="mx-auto mt-6 w-full px-6">
        <h2 className="text-xl font-bold text-gray-900">
          매칭을 진행할 <br />
          어르신과 보호사님 정보를 <br />
          확인해주세요!
        </h2>
      </div>

      {/* 스크롤 가능한 내용 영역 */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {/* 어르신 정보 */}
        <div className="mx-auto mt-6 mb-12 w-full">
          <div className="flex justify-end">
            <div className="size-[110px] overflow-hidden rounded-full border border-gray-300 p-2">
              <img src="/images/grandf.png" alt="어르신 이미지" />
            </div>
          </div>
          <div className="mt-2 w-full rounded-lg bg-gray-100 p-4 shadow">
            <p className="grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">성별 및 나이</span> <span>{elderlyInfo.genderAge}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">생년월일</span> <span>{elderlyInfo.birthDate}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">요양등급</span> <span>{elderlyInfo.careGrade}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">지역</span> <span>{elderlyInfo.location}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">근무 요일 및 시간</span> <span>{elderlyInfo.workSchedule}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">케어 항목</span> <span>{elderlyInfo.careItems.join(`  ,  `)}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">치매 증상</span> <span>{elderlyInfo.dementia}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">동거인 여부</span> <span>{elderlyInfo.cohabitation}</span>
            </p>
          </div>
        </div>

        {/* 보호사 정보 */}
        <div className="mx-auto mt-6 w-full">
          <div className="flex justify-end">
            <div className="size-[110px] overflow-hidden rounded-full border border-gray-300 p-2">
              <img src="/images/girl.png" alt="어르신 이미지" />
            </div>
          </div>
          <div className="mt-2 w-full rounded-lg bg-gray-100 p-4 shadow">
            <p className="grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">이름</span>
              <span> {caregiverInfo.name}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">필수 자격증</span> <span>{caregiverInfo.requiredCert}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">추가 자격증</span> <span>{caregiverInfo.additionalCert}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">지역</span> <span>{caregiverInfo.location}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base text-gray-700">
              <span className="font-semibold">근무 요일</span>
              <span> {caregiverInfo.workDays}</span>
            </p>
            <p className="mt-2 grid grid-cols-2 text-base font-semibold text-gray-700">
              <span className="font-semibold">희망 급여</span> <span>{caregiverInfo.desiredWage}</span>
            </p>
          </div>
        </div>
      </div>

      {/* 버튼 그룹 - 하단 고정 */}
      <div className="fixed right-0 bottom-0 left-0 w-full bg-white px-6 pt-4 pb-6 shadow-md">
        <div className="mx-auto flex max-w-[546px]">
          <button
            onClick={() => navigate('/center/matching/complete')}
            className="bg-primary-400 w-full cursor-pointer rounded-lg px-4 py-3 font-semibold text-white"
          >
            매칭 요청 보내기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchingConfirm;
