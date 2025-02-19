import { useEffect, useState } from 'react';
import EndTimeDropDown from '../../../WorkConditionForm/WorkScheduleForm/EndTimeDropDown';
import StartTimeDropDown from '../../../WorkConditionForm/WorkScheduleForm/StartTimeDropDown';
import { Times } from '../../../../types/senior/seniorRegister';

const timeOptions = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return `${hour}:00`;
});

const SeniorCareTimeFormRow = ({
  children,
  onChange,
  dayOfWeek,
}: {
  children: React.ReactNode;
  onChange: (careTime: Times) => void;
  dayOfWeek: string;
}) => {
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
      onChange({
        dayOfWeek,
        startTime,
        endTime,
      });
    }
  }, [startTime, endTime]);

  return (
    <li className="flex gap-4">
      <div
        className={`${valid ? 'bg-primary-400 text-white' : 'bg-gray-100'} flex size-[50px] items-center justify-center rounded-lg bg-gray-100 transition-colors`}
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

export default SeniorCareTimeFormRow;
