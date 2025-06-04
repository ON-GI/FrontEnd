import { useContext } from 'react';
import RegionSelector from '../../../../../components/RegionSelector/RegionSelector';
import { WorkRegions } from '../../../../../types/workCondition';
import { SeniorRegisterContext } from './SeniorRegisterLayout';
import { useNavigate } from 'react-router-dom';

const SeniorRegisterLocation = () => {
  const navigate = useNavigate();
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);
  const onSubmit = (workRegions: WorkRegions[]) => {
    setSeniorInfo({ ...seniorInfo, residence: workRegions[0] });
    navigate('/center/senior/register/care-time');
  };
  return (
    <section className="relative flex h-[100svh] flex-col overflow-hidden">
      <div className="p-5">
        <h3 className="mb-3 text-2xl font-semibold">
          어르신의 주소를 <br />
          알려주세요!
        </h3>
      </div>

      <RegionSelector
        onSubmit={onSubmit}
        maximum={1}
        onClickBackButton={() => {
          navigate('/center/senior/register/basic-info');
        }}
      />
    </section>
  );
};

export default SeniorRegisterLocation;
