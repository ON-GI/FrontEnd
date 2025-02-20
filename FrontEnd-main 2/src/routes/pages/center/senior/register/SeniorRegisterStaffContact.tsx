import React, { useContext } from 'react';
import BaseButton from '../../../../../components/common/BaseButton';
import { useNavigate } from 'react-router-dom';
import BaseInput from '../../../../../components/common/BaseInput';
import client from '../../../../../api/instnace';
import { SeniorRegisterContext } from './SeniorRegisterLayout';

const SeniorRegisterStaffContact = () => {
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);
  const navigate = useNavigate();
  const onSubmit = async () => {
    navigate('/center/senior/register/complete');
    setSeniorInfo({ ...seniorInfo, staffContact: '010-1234-1234', centerId: 12 });
    const response = await client.post('/senior', seniorInfo);
    console.log(response);
  };
  return (
    <section className="flex h-full flex-col justify-between p-5">
      <div>
        <h3 className="mb-5 text-2xl font-semibold">
          담당자의 연락처를 <br />
          다시 한번 확인해주세요
        </h3>

        <BaseInput label="담당자 연락처" required disabled placeholder="010-0000-0000 더미 데이터 입니다" />
      </div>

      <div className="flex gap-4">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/symptoms')}
        >
          뒤로가기
        </button>
        <BaseButton onClick={onSubmit}>입력완료</BaseButton>
      </div>
    </section>
  );
};

export default SeniorRegisterStaffContact;
