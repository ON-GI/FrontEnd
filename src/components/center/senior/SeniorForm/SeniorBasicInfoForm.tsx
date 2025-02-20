import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import BaseInput from '../../../common/BaseInput';
import RadioGroup from '../../../common/RadioGroup';
import formatDateOfBirth from '../../../../utils/formatDateOfBirth';
import calculateAge from '../../../../utils/calculateAge';
import React from 'react';

import defaultImage_FM from '../../../../assets/senior_fm.png';
import defaultImage_M from '../../../../assets/senior_male.png';

const GenderList = [
  {
    label: '남성',
    value: 'MALE',
  },
  {
    label: '여성',
    value: 'FEMALE',
  },
];

const SeniorBasicInfoForm = ({ onSubmit }: { onSubmit: (e: FormEvent<HTMLFormElement>) => void }) => {
  const [name, setName] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [brith, setBrith] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleChangeWeight = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) return;
    setWeight(e.target.value);
  }, []);

  const handleChangeBrith = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const formatValue = formatDateOfBirth(e.target.value);
    setBrith(formatValue);

    if (formatValue.length === 10) {
      setAge(calculateAge(formatValue));
    } else {
      setAge('');
    }
  }, []);

  const handleChangeGender = useCallback((value: string) => {
    if (value !== 'MALE' && value !== 'FEMALE') return;
    setGender(value);
  }, []);

  return (
    <form id="basic-info" onSubmit={onSubmit}>
      <h3 className="mb-2 text-2xl font-semibold">
        어르신 정보를 <br /> 알려주세요
      </h3>

      {/* 프로필 */}
      <div className="mb-3">
        <div className="space-y-3">
          <div className="mx-auto size-[140px] overflow-hidden rounded-full border border-gray-200 p-2">
            <img src={gender === 'MALE' ? defaultImage_M : defaultImage_FM} alt="프로필 이미지" />
          </div>
        </div>
      </div>

      {/* 기본정보 */}
      <div className="space-y-3">
        {/* 성함 */}
        <BaseInput
          name="name"
          label="성함"
          required
          placeholder="성함을 작성해주세요"
          onChange={handleChangeName}
          value={name ? name : ''}
        />
        {/* 성별 */}
        <RadioGroup group="gender" groupList={GenderList} groupTitle="성별" required onChange={handleChangeGender} />
        {/* 몸무게 */}
        <BaseInput
          name="weight"
          label="몸무게"
          required
          placeholder="어르신의 몸무게를 작성해주세요"
          value={weight ? weight : ''}
          onChange={handleChangeWeight}
        />
        {/* 생년월일 */}
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <BaseInput
              name="birth"
              label="생년월일"
              required
              placeholder="YYYY-MM-DD"
              value={brith}
              onChange={handleChangeBrith}
            />
          </div>
          <div className="flex h-[50.47px] w-[30%] items-center justify-center rounded-lg border border-gray-300">
            {age && <span>{`만 ${age} 세`}</span>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SeniorBasicInfoForm;
