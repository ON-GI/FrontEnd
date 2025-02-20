import { FormEvent, useContext } from 'react';
import SeniorBasicInfoForm from '../../../../../components/center/senior/SeniorForm/SeniorBasicInfoForm';
import BaseButton from '../../../../../components/common/BaseButton';
import { SeniorRegisterContext } from './SeniorRegisterLayout';
import { useNavigate } from 'react-router-dom';

const SeniorRegisterBaseInfo = () => {
  const navigate = useNavigate();
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const gender = formData.get('gender') as 'MALE' | 'FEMALE';
    const weight = formData.get('weight');
    const birth = formData.get('birth') as string;

    setSeniorInfo({
      ...seniorInfo,
      name,
      gender,
      weight: Number(weight),
      birthDate: birth,
    });
    console.log(seniorInfo);
    navigate('/center/senior/register/location');
  };

  return (
    <section className="flex h-full flex-col justify-between p-5">
      <SeniorBasicInfoForm onSubmit={onSubmit} />

      <BaseButton form="basic-info">다음으로</BaseButton>
    </section>
  );
};

export default SeniorRegisterBaseInfo;
