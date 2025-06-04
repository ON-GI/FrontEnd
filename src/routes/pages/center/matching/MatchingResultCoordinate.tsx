import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MatchingResultCoordinate = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  useEffect(() => {
    if (value.trim().length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value]);

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
        <div className="py-4">
          <label htmlFor="additionalSymptoms" className="mb-2 block">
            김OO 보호사님
          </label>
          <textarea
            className="focus:border-primary-400 min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-3 outline-0 transition-colors"
            disabled
            value="시급을 14000원으로 인상해주세요 !"
          />
        </div>
        <div className="pt-4">
          <label htmlFor="additionalSymptoms" className="mb-2 block">
            조율하고자 하는 내용을 작성해주세요
          </label>
          <textarea
            className="focus:border-primary-400 min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-3 outline-0 transition-colors"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          disabled={!valid}
          className="bg-primary-400 disabled:bg-primary-200 w-full cursor-pointer rounded-lg py-3 text-center text-white transition-colors"
          onClick={() => navigate('/center/matching/result/coordinate/complete')}
        >
          요양보호사에게 전송하기
        </button>
      </div>
    </section>
  );
};

export default MatchingResultCoordinate;
