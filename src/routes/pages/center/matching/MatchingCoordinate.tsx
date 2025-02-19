import React from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../../../components/common/BaseButton';

const MatchingCoordinate = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[100svh] flex-col justify-between p-5">
      <div>
        <header>
          <h3 className="text-2xl font-semibold">
            김OO 보호사님이 <br />
            조율을 요청하셨습니다!
          </h3>
        </header>
        <div className="mb-5 flex justify-end">
          <div className="size-[110px] overflow-hidden rounded-full border border-gray-300 p-2 text-right">
            <img src="/images/girl.png" alt="프로필 이미지" className="block" />
          </div>
        </div>
        <div className="pt-4">
          <label htmlFor="additionalSymptoms" className="mb-2 block">
            김OO 보호사님
          </label>
          <textarea
            className="focus:border-primary-400 min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-3 outline-0 transition-colors"
            disabled
            value="시급을 14000원으로 인상해주세요 !"
          />
        </div>
      </div>

      <div>
        <div className="mb-2 flex gap-2">
          <button
            onClick={() => navigate('/center/matching/result/failed')}
            className="w-full cursor-pointer rounded-lg bg-[#FFEAEA] py-3 text-[#FF0000]"
          >
            거절
          </button>
          <button
            className="w-full cursor-pointer rounded-lg bg-[#E1E9FF] py-3 text-[#3386FF]"
            onClick={() => navigate('/center/matching/result/complete')}
          >
            수락
          </button>
        </div>
        <button
          onClick={() => navigate('/center/matching/result/coordinate')}
          className="bg-primary-100 text-primary-400 w-full cursor-pointer rounded-lg py-3 text-center"
        >
          조율요청
        </button>
      </div>
    </section>
  );
};

export default MatchingCoordinate;
