import { useEffect, useState } from 'react';
import DropDown from '../../common/Dropdown/DropDown';

const StartTimeDropDown = ({
  timeOptions,
  onChange,
}: {
  timeOptions: string[];
  onChange: (identity: 'start' | 'end', time: string) => void;
}) => {
  const [startTime, setStartTime] = useState('');
  useEffect(() => {
    onChange('start', startTime);
  }, [startTime]);
  return (
    <DropDown
      selectValue={startTime}
      handleSelect={(value) => {
        setStartTime(value);
      }}
      className="h-full min-w-[125px]"
    >
      <DropDown.Trigger placeholder="근무 시작 시간" className="w-full text-center" />
      <DropDown.Options>
        {timeOptions.map((value) => (
          <DropDown.Option key={value} value={value}>
            {value}
          </DropDown.Option>
        ))}
      </DropDown.Options>
    </DropDown>
  );
};

export default StartTimeDropDown;
