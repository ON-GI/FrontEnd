import { useContext, useEffect, useState } from 'react';
import EndTimeDropDown from './EndTimeDropDown';
import { WorkConditionContext } from '../WorkConditionFormProvider';
import StartTimeDropDown from './StartTimeDropDown';
import React from 'react';

const DetailScheduleFormRow = ({ children, dayOfWeek }: { children: React.ReactNode; dayOfWeek: string }) => {
  const { workConditions, setWorkConditions } = useContext(WorkConditionContext);

  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [valid, setValid] = useState<boolean>(false);
  const onChangeTime = (identity: 'start' | 'end', time: string) => {
    if (identity === 'start') {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
  };

  useEffect(() => {
    if (startTime && endTime) {
      setValid(true);
      setWorkConditions({
        ...workConditions,
        workTimes: [
          ...workConditions.workTimes,
          {
            dayOfWeek,
            startTime,
            endTime,
          },
        ],
      });
    }
  }, [startTime, endTime]);

  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  return (
    <li className="flex gap-4">
      <div
        className={`flex size-[50px] items-center justify-center rounded-lg transition-colors ${valid ? 'bg-primary-400 text-white' : 'bg-gray-100'}`}
      >
        {children}
      </div>
      <div className="w-[45%]">
        <StartTimeDropDown timeOptions={timeOptions} onChange={onChangeTime} />
      </div>

      <div className="w-[45%]">
        <EndTimeDropDown timeOptions={timeOptions} onChange={onChangeTime} />
      </div>
    </li>
  );
};

export default DetailScheduleFormRow;
