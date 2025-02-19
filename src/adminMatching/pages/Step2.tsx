import { useNavigate } from 'react-router-dom';
import { DUMMY } from '../../routes/pages/center/senior/SeniorDetailInfoPage';
import BaseButton from '../../components/common/BaseButton';

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[100svh] flex-col justify-between p-5">
      <div>
        <header>
          <h3 className="text-2xl font-semibold">
            선택한 어르신이 맞는지 <br />
            확인해주세요
          </h3>
        </header>
        <div className="mb-5 flex justify-end">
          <div className="size-[110px] overflow-hidden rounded-full border border-gray-300 p-2 text-right">
            <img src="/images/grandf.png" alt="프로필 이미지" className="block" />
          </div>
        </div>
        <ul className="flex flex-col gap-4 rounded-lg bg-gray-50 p-3">
          {DUMMY.map((item) => (
            <li key={item.value} className="grid grid-cols-2">
              <span className="text-gray-600">{item.label}</span>
              <p className="text-gray-900">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <button onClick={() => navigate('/center/matching')} className="bg-gray-150 w-[25%] rounded-lg py-3">
          뒤로가기
        </button>
        <BaseButton onClick={() => navigate('/center/matching/step3')}>확인</BaseButton>
      </div>
    </section>
  );
};

export default Step2;
