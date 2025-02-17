import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { PlaceHolderInput } from '../../../components/common/PlaceHolderInput';
import SelectPayType from '../../../components/WorkConditionForm/SelectPayType';
import SimpleScheduleForm from '../../../components/WorkConditionForm/WorkScheduleForm/SimpleScheduleForm';
import DetailScheduleForm from '../../../components/WorkConditionForm/WorkScheduleForm/DetailScheduleForm';
import { WorkConditionContext } from '../../../components/WorkConditionForm/WorkConditionFormProvider';
import { PayType } from '../../../types/workCondition';
import { useNavigate } from 'react-router-dom';

export interface WorkTime {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

const WorkScheduleForm = () => {
  const navigate = useNavigate();

  const [formValid, setFormValid] = useState<boolean>(false);
  const { workConditions, setWorkConditions } = useContext(WorkConditionContext);
  const [timeFormType, setTimeFormType] = useState<'simple' | 'detail'>('simple');
  const [payValue, setPayValue] = useState('0');
  useEffect(() => {
    setWorkConditions({ ...workConditions, workTimes: [] });
  }, []);

  const updateFormValid = () => {
    const { workTimes, payType, payAmount, workRegions } = workConditions;

    const isWorkRegionsValid = workRegions.length > 0;
    const isWorkTimesValid = workTimes.length > 0;
    const isPayTypeValid = Boolean(payType);
    const isPayAmountValid = payAmount != '0' && ' ';

    setFormValid(isWorkTimesValid && isPayTypeValid && isPayAmountValid && isWorkRegionsValid);
  };
  useEffect(() => {
    updateFormValid();
  }, [workConditions]);

  const setNegotiable = () => {
    setWorkConditions({ ...workConditions, negotiable: !workConditions.negotiable });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (!isNaN(Number(rawValue))) {
      const formattedValue = Number(rawValue).toLocaleString('ko-KR');
      // setPayValue(formattedValue);
      setWorkConditions({ ...workConditions, payAmount: formattedValue });
    }
  };

  return (
    <div className="relative p-5">
      <div className="mb-5">
        <h3 className="mb-3 text-2xl font-semibold">
          근무 가능한 시간대와 <br />
          희망 시급을 알려주세요
        </h3>
        <p className="text-gray-600">모두 추후에 관리자와 조율이 가능해요</p>
      </div>

      {/* 근무시간 간단하게*/}
      <div className="mb-5">
        <div className="mb-3">
          <h4 className="text-xl text-gray-900">근무 시간</h4>
          <p className="text-gray-600">중복 선택 가능해요</p>
        </div>
        {timeFormType === 'simple' && <SimpleScheduleForm />}
        {timeFormType === 'detail' && <DetailScheduleForm />}

        <span
          onClick={() => {
            setTimeFormType(timeFormType === 'detail' ? 'simple' : 'detail');
            setWorkConditions({ ...workConditions, workTimes: [] });
          }}
          className="text-primary-400 mt-4 inline-flex cursor-pointer items-center gap-2 font-medium"
        >
          {timeFormType === 'detail' ? '간단하게 입력할래요' : '더 자세하게 입력할래요'}
          <img src="../src/assets/primary_right-arrow.png" alt="화살표" className="inline" />
        </span>
      </div>

      <div className="mb-5">
        <div className="mb-3">
          <h4 className="mb-3 text-xl text-gray-900">희망 시급</h4>
          <div className="flex gap-2">
            <SelectPayType
              value={workConditions.payType}
              handleChange={(value) => {
                setWorkConditions({ ...workConditions, payType: value as PayType });
              }}
            />
            <PlaceHolderInput placeholder="원" onChange={handleChange} value={workConditions.payAmount} />
          </div>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2">
          <input
            checked={workConditions.negotiable}
            onChange={() => setNegotiable()}
            type="checkbox"
            className="checked:bg-primary-400 checked:border-primary-400 size-5 appearance-none rounded-full border-2 border-gray-300 transition-all checked:bg-[url(../../src/assets/check.svg)] checked:bg-center"
          />
          <span className="text-gray-900">협의 가능</span>
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/work-condition/location')}
          className="bg-gray-150 w-[25%] cursor-pointer rounded-lg py-3"
        >
          뒤로가기
        </button>
        <button
          disabled={!formValid}
          onClick={() => navigate('/work-condition/confirm')}
          className="bg-primary-400 disabled:bg-primary-200 w-[75%] cursor-pointer rounded-lg py-3 text-white transition-colors disabled:cursor-auto"
        >
          입력완료
        </button>
      </div>
    </div>
  );
};

export default WorkScheduleForm;
