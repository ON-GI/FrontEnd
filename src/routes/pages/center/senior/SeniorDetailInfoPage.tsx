import { useNavigate } from 'react-router-dom';
import BaseButton from '../../../../components/common/BaseButton';

export const DUMMY = [
  {
    label: '성별 및 나이',
    value: '남성, 85',
  },
  {
    label: '생년월일',
    value: '1940년 08월 15일',
  },
  {
    label: '요양등급',
    value: '1등급',
  },
  {
    label: '지역',
    value: '서울시 서대문구 연희동',
  },
  {
    label: '근무 요일 및 시간',
    value: '월요일 9:00 ~ 10:00',
  },
  {
    label: '케어 항목',
    value: '식사보조 - 같이 밥 먹기',
  },
  {
    label: '치매 증상',
    value: '없음 (정상)',
  },
  {
    label: '동거인 여부',
    value: '독거',
  },
];

const SeniorDetailInfoPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[100svh] flex-col justify-between p-5">
      <div>
        <header>
          <h3 className="text-2xl font-semibold">
            박영호 어르신 정보를 <br />
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
        <button
          onClick={() => navigate('/center/senior')}
          className="bg-gray-150 w-[25%] cursor-pointer rounded-lg py-3"
        >
          뒤로가기
        </button>
        <BaseButton>수정하기</BaseButton>
      </div>
    </section>
  );
};

export default SeniorDetailInfoPage;
