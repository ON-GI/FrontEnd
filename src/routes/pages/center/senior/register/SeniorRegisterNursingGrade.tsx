import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../../../../components/common/BaseButton';
import RadioGroup from '../../../../../components/common/RadioGroup';
import { GradeType } from '../../../../../types/senior/seniorRegister';
import { SeniorRegisterContext } from './SeniorRegisterLayout';

//'GRADE_NO' | 'GRADE_1' | 'GRADE_2' | 'GRADE_3' | 'GRADE_4' | 'GRADE_5' | 'GRADE_SUPPORT'
const NursingGradeList = [
  {
    label: '1등급',
    value: 'GRADE_1',
  },
  {
    label: '2등급',
    value: 'GRADE_2',
  },
  {
    label: '3등급',
    value: 'GRADE_3',
  },
  {
    label: '4등급',
    value: 'GRADE_4',
  },
  {
    label: '5등급',
    value: 'GRADE_5',
  },
  {
    label: '인지지원 등급',
    value: 'GRADE_SUPPORT',
  },
  {
    label: '등급없음',
    value: 'CRADE_NO',
  },
];

const SeniorRegisterNursingGrade = () => {
  const { seniorInfo, setSeniorInfo } = useContext(SeniorRegisterContext);

  const [nursingGrade, setNursingGrade] = useState(seniorInfo.gradeType || '');
  const [disease, setDisease] = useState(
    seniorInfo.diseaseCondition && 'disease' in seniorInfo.diseaseCondition ? seniorInfo.diseaseCondition.disease : '',
  );
  const navigate = useNavigate();

  const onSubmit = () => {
    setSeniorInfo({ ...seniorInfo, gradeType: nursingGrade as GradeType, diseaseCondition: { disease: disease } });
    navigate('/center/senior/register/symptoms');
  };

  const handleChangeGrade = (value: string) => {
    setNursingGrade(value);
  };

  const isFormValid = nursingGrade;
  return (
    <section className="flex h-full flex-col justify-between p-5">
      <div>
        <h3 className="mb-5 text-2xl font-semibold">
          어르신의 장기요양 등급과 <br />
          질병/질환을 작성해주세요
        </h3>

        <RadioGroup
          group="grade"
          groupList={NursingGradeList}
          groupTitle="장기요양등급"
          required
          onChange={handleChangeGrade}
          labelClassName="last:col-span-2"
          defaultValue={nursingGrade}
        />

        <div className="pt-4">
          <label htmlFor="disease" className="mb-2 block">
            보유 질병/질환
          </label>
          <textarea
            className="focus:border-primary-400 min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-3 outline-0 transition-colors"
            placeholder="어르신이 보유하신 질병/질환을 작성해주세요"
            onChange={(e) => setDisease(e.target.value)}
            value={disease}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-gray-150 w-[25%] rounded-lg py-3"
          onClick={() => navigate('/center/senior/register/care-service')}
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

export default SeniorRegisterNursingGrade;
