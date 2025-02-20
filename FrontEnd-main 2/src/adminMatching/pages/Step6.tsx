import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/common/BaseButton';

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
    <section className="flex min-h-[100svh] flex-col justify-between p-5">
      <div>
        <header>
          <h3 className="text-2xl font-semibold">
            보호사님의 <br />
            상세 근무 조건이에요
          </h3>
        </header>
        <div className="mb-5 flex justify-end">
          <div className="size-[110px] overflow-hidden rounded-full border border-gray-300 p-2 text-right">
            <img src="/images/girl.png" alt="프로필 이미지" className="block" />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 rounded-lg bg-gray-100 p-4">
          <p className="grid grid-cols-2 text-base text-gray-700">
            <span className="font-semibold">이름</span> <span>{caregiverInfo.name}</span>
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
            <span className="font-semibold">근무 요일</span> <span>{caregiverInfo.workDays}</span>
          </p>
          <p className="mt-2 grid grid-cols-2 text-base font-semibold text-gray-700">
            <span className="font-semibold">희망 급여</span> <span>{caregiverInfo.desiredWage}</span>
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/center/matching/step5')}
          className="bg-gray-150 w-[25%] cursor-pointer rounded-lg py-3"
        >
          뒤로가기
        </button>
        <BaseButton onClick={() => navigate('/center/matching/step7')}>이 보호사님으로 할게요</BaseButton>
      </div>
    </section>

    // <div className="mx-auto w-full p-5">
    //   {/* 제목 */}
    //   <h2 className="text-xl font-bold text-gray-900">
    //     보호사님의 <br /> 상세 근무 조건이에요.
    //   </h2>

    //   {/* 이미지 */}
    //   <div className="mt-6 flex justify-end">
    //     <img src="/images/girl.png" alt="보호사 이미지" className="h-24 w-24 rounded-full" />
    //   </div>

    //   {/* 정보 카드 */}

    // </div>
  );
};

export default Step7;
