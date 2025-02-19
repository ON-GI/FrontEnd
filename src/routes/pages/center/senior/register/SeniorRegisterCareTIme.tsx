import { useContext, useState } from 'react';
import { SeniorRegisterContext } from './SeniorRegisterLayout';
import SeniorCareTimeForm from '../../../../../components/center/senior/SeniorForm/SeniorCareTimeForm';
import { Times } from '../../../../../types/senior/seniorRegister';
import BaseButton from '../../../../../components/common/BaseButton';
import { useNavigate } from 'react-router-dom';

const SeniorRegisterCareTIme = () => {
  const navigate = useNavigate();
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);
  const [times, setTimes] = useState<Times[]>([]);

  const onChange = (careTime: Times) => {
    setTimes((prev) => [...prev, careTime]);
  };
  const onSubmit = () => {
    setSeniorInfo({ ...seniorInfo, careTimes: times });
    navigate('/center/senior/register/care-service');
  };

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        <div className="p-5">
          <h3 className="mb-3 text-2xl font-semibold">
            케어가 필요한 시간대와 <br />
            요일을 알려주세요
          </h3>
        </div>

        <SeniorCareTimeForm onChange={onChange} />
      </div>

      <div className="flex gap-4 p-5">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/location')}
        >
          뒤로가기
        </button>
        <BaseButton disabled={times.length === 0} onClick={onSubmit}>
          입력완료
        </BaseButton>
      </div>
    </section>
  );
};

export default SeniorRegisterCareTIme;
