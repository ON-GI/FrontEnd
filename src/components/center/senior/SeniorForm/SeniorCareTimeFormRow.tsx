import { useContext, useEffect, useRef, useState } from 'react';
import EndTimeDropDown from '../../../WorkConditionForm/WorkScheduleForm/EndTimeDropDown';
import StartTimeDropDown from '../../../WorkConditionForm/WorkScheduleForm/StartTimeDropDown';
import { Times } from '../../../../types/senior/seniorRegister';
import { SeniorRegisterContext } from '../../../../routes/pages/center/senior/register/SeniorRegisterLayout';
import React from 'react';

const timeOptions = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return `${hour}:00`;
});

const SeniorCareTimeFormRow = ({
  children,
  onChange,
  dayOfWeek,
  defaultStartTime,
  defaultEndTime,
}: {
  children: React.ReactNode;
  onChange: (careTime: Times) => void;
  dayOfWeek: string;
  defaultStartTime?: string;
  defaultEndTime?: string;
}) => {
  const startTimeRef = useRef(defaultStartTime || '');
  const endTimeRef = useRef(defaultEndTime || '');
  const [valid, setValid] = useState<boolean>(!!(defaultStartTime && defaultEndTime));

  const handleChange = (identity: 'start' | 'end', time: string) => {
    if (identity === 'start') {
      startTimeRef.current = time;
    } else {
      endTimeRef.current = time;
    }

    if (startTimeRef.current && endTimeRef.current) {
      setValid(true);
      onChange({
        dayOfWeek,
        startTime: startTimeRef.current,
        endTime: endTimeRef.current,
      });
    }
  };

  return (
    <li className="flex gap-4">
      <div
        className={`${valid ? 'bg-primary-400 text-white' : 'bg-gray-100'} flex size-[50px] items-center justify-center rounded-lg transition-colors`}
      >
        {children}
      </div>
      <div className="w-[45%]">
        <StartTimeDropDown timeOptions={timeOptions} onChange={handleChange} defaultValue={startTimeRef.current} />
      </div>
      <div className="w-[45%]">
        <EndTimeDropDown timeOptions={timeOptions} onChange={handleChange} defaultValue={endTimeRef.current} />
      </div>
    </li>
  );
};

export default SeniorCareTimeFormRow;
