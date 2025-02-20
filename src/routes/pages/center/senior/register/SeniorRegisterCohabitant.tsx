import React, { useContext, useState } from 'react';
import CheckBox from '../../../../../components/common/CheckBox';
import BaseButton from '../../../../../components/common/BaseButton';
import { useNavigate } from 'react-router-dom';
import client from '../../../../../api/instnace';
import RadioGroup from '../../../../../components/common/RadioGroup';
import { SeniorRegisterContext } from './SeniorRegisterLayout';
import { ResidenceType } from '../../../../../types/senior/seniorRegister';

const ResidenceOptions = [
  { label: '독거', value: 'ALONE' },
  { label: '배우자와 동거, 돌봄 시간 중에 집에 있음', value: 'WITH_SPOUSE_HOME' },
  { label: '배우자와 동거, 돌봄 시간 중에 자리 비움', value: 'WITH_SPOUSE_AWAY' },
  { label: '다른 가족과 동거, 돌봄 시간 중 집에 있음', value: 'WITH_FAMILY_HOME' },
  { label: '다른 가족과 동거, 돌봄 시간 중 자리 비움', value: 'WITH_FAMILY_AWAY' },
];

const SeniorRegisterCohabitant = () => {
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);

  const navigate = useNavigate();
  const [residence, setResidence] = useState<string>('');

  const handleResidenceOptionChange = (value: string) => {
    setResidence(value);
  };
  const isFormValid = residence.length > 0;

  const onSubmit = () => {
    setSeniorInfo({ ...seniorInfo, residenceType: residence as ResidenceType });
    navigate('/center/senior/register/staff-contact');
  };

  return (
    <section className="flex h-full flex-col justify-between p-5">
      <div>
        <h3 className="mb-5 text-2xl font-semibold">
          어르신의 동거인 여부를 <br />
          알려주세요
        </h3>
        <RadioGroup
          group="grade"
          groupList={ResidenceOptions}
          groupTitle="동거인 여부"
          required
          onChange={handleResidenceOptionChange}
          containerGrid="grid-cols-1"
        />
      </div>

      <div className="flex gap-4">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/symptoms')}
        >
          뒤로가기
        </button>
        <BaseButton onClick={onSubmit} disabled={!isFormValid}>
          입력완료
        </BaseButton>
      </div>
    </section>
  );
};

export default SeniorRegisterCohabitant;
