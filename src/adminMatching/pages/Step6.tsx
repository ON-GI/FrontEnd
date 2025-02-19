import { useNavigate } from 'react-router-dom';

const Step7 = () => {
  const navigate = useNavigate();

  const caregiverInfo = {
    name: '김○○',
    requiredCert: '요양보호사 자격증 (2025-0000000)',
    additionalCert: '사회복지사 자격증 (1-123456)',
    location: '서울특별시 마포구 아현동',
    workDays: '월요일 오전, 오후',
    desiredWage: '11,000원 (시급)',
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-md px-6 pb-6">
      {/* 제목 */}
      <h2 className="text-xl font-bold text-gray-900">
        보호사님의 <br /> 상세 근무 조건이에요.
      </h2>

      {/* 이미지 */}
      <div className="mt-6 flex justify-end">
        <img src="/images/girl.png" alt="보호사 이미지" className="h-24 w-24 rounded-full" />
      </div>

      {/* 정보 카드 */}
      <div className="mt-6 rounded-lg bg-gray-100 p-4 shadow">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">이름</span> {caregiverInfo.name}
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <span className="font-semibold">필수 자격증</span> {caregiverInfo.requiredCert}
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <span className="font-semibold">추가 자격증</span> {caregiverInfo.additionalCert}
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <span className="font-semibold">지역</span> {caregiverInfo.location}
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <span className="font-semibold">근무 요일</span> {caregiverInfo.workDays}
        </p>
        <p className="mt-2 text-sm font-semibold text-gray-900">
          <span className="font-semibold">희망 급여</span> {caregiverInfo.desiredWage}
        </p>
      </div>
    </div>
  );
};

export default Step7;
