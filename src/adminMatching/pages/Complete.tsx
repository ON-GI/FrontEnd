import { useNavigate } from 'react-router-dom';

const MatchingComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <img src="/images/checked.png" alt="체크 아이콘" className="h-20 w-20" />

      <p className="mt-6 text-lg font-semibold text-gray-900">매칭 요청 전송이 완료되었어요!</p>

      <div className="fixed bottom-0 left-0 w-full bg-white px-6 pt-4 pb-6 shadow-md">
        <div className="mx-auto flex w-full max-w-[546px] gap-2">
          <button
            onClick={() => navigate('/center/matching')}
            className="w-1/2 cursor-pointer rounded-lg bg-gray-100 px-4 py-3 text-gray-700"
          >
            다른 매칭 진행하기
          </button>
          <button
            onClick={() => navigate('/center')}
            className="bg-primary-400 w-1/2 cursor-pointer rounded-lg px-4 py-3 text-white"
          >
            매칭 목록 확인하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchingComplete;
