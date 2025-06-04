import React from 'react';
import { useNavigate } from 'react-router-dom';

const MatchingFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <img src="/images/Vector.png" alt="체크 아이콘" className="h-20 w-20" />

      <p className="mt-6 text-lg font-semibold text-gray-900">매칭이 성사되지 않았습니다</p>

      <div className="fixed bottom-0 left-0 w-full bg-white px-6 pt-4 pb-6 shadow-md">
        <div className="mx-auto flex w-full max-w-[546px] gap-2">
          <button
            onClick={() => navigate('/center/matching/result')}
            className="bg-primary-400 w-full cursor-pointer rounded-lg px-4 py-3 text-white"
          >
            매칭 결과 목록 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchingFailed;
