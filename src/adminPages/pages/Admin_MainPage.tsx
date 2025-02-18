import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 React Router 추가

// 유저 프로필 컴포넌트
const UserProfile = ({ userName }: { userName: string }) => {
  return (
    <div className="flex w-full max-w-[335px] items-center justify-between">
      {/* 왼쪽 로고 및 텍스트 */}
      <div className="flex flex-col justify-between">
        <img src="/images/logo.png" alt="Logo" className="h-[40px] w-[55px]" />
        <div className="mt-3">
          <p className="text-[24px] leading-[28.8px] font-normal text-gray-900">안녕하세요</p>
          <p className="text-[24px] leading-[33.6px] font-semibold text-gray-900">{userName}님</p>
        </div>
      </div>
      {/* 프로필 이미지 및 마이페이지 버튼 */}
      <div className="flex flex-col items-center">
        <img
          src="/images/girl.png"
          alt="Profile"
          className="h-[100px] w-[100px] rounded-full border-[1.25px] border-gray-200"
        />
        <button className="mt-2 h-[33px] w-[100px] rounded-md bg-gray-100 px-4 py-1 text-[14px] text-gray-700 shadow">
          마이페이지
        </button>
      </div>
    </div>
  );
};

// 🔹 카드 공통 컴포넌트
const Card = ({ title, description, image, buttonText, buttonColor, titleColor }: any) => {
  return (
    <div className="w-[335px] rounded-lg border border-[#E5E5E5] bg-white p-6 shadow-md">
      <div className="flex items-start justify-between">
        <p className={`text-lg font-bold ${titleColor}`}>{title}</p>
        <img src={image} alt="Card Icon" className="h-12 w-12 opacity-90" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">
        {description.split('\n').map((line: string, index: number) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <button className={`mt-4 w-full rounded-md py-3 text-white shadow-md transition ${buttonColor}`}>
        {buttonText}
      </button>
    </div>
  );
};

// 🔹 매칭 카드 공통 컴포넌트 (onClick 추가)
const MatchCard = ({ title, description, image, onClick }: any) => {
  return (
    <div className="h-[117px] w-[162px] cursor-pointer rounded-lg bg-white p-4 shadow-md" onClick={onClick}>
      <div className="flex flex-col items-start">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="mt-1 text-xs leading-snug text-gray-600">{description}</p>
        <img src={image} alt="Matching Icon" className="mt-3 h-8 w-8 self-end" />
      </div>
    </div>
  );
};

// 🔹 메인 페이지 컴포넌트
const MainPage = () => {
  const navigate = useNavigate(); // 🔹 네비게이션 훅 추가

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[335px] flex-col items-center px-5 py-6">
      {/* 유저 프로필 */}
      <UserProfile userName="김OO" />

      {/* 카드 컨테이너 */}
      <div className="mt-6 flex w-full flex-col gap-4">
        <Card
          title="어르신 등록 및 수정"
          titleColor="text-[#FEA65E]"
          description="어르신에게 필요한 서비스 또는 수정사항을 입력해주세요!"
          image="/images/paper.png"
          buttonText="등록 및 수정하러 가기 →"
          buttonColor="bg-[#F2994A] hover:bg-[#E0873A]"
        />

        <Card
          title="어르신별 요양보호사 모집 요건 설정"
          titleColor="text-[#497FE2]"
          description="어르신별 요건을 설정하고 등록해주세요."
          image="/images/lens.png"
          buttonText="모집 요건 설정하러 가기 →"
          buttonColor="bg-[#2F80ED] hover:bg-[#2563EB]"
        />
      </div>

      {/* 매칭 버튼 컨테이너 */}
      <div className="mx-auto mt-6 flex w-[335px] justify-center gap-3">
        <MatchCard
          title="매칭 진행하기"
          description="어르신에게 딱 맞는 요양보호사를 찾아드릴게요"
          image="/images/peopleheart.png"
          onClick={() => navigate('/center/matching-info')} // 🔹 클릭 시 matchingInfo로 이동
        />
        <MatchCard
          title="매칭 결과 확인하기"
          description="매칭을 넣은 결과를 한눈에 확인할 수 있어요"
          image="/images/card.png"
          onClick={() => navigate('/center/matching-filtering')} // 🔹 클릭 시 matchingFiltering로 이동
        />
      </div>
    </div>
  );
};

export default MainPage;
