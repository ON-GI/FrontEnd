import { useEffect, useState } from 'react';
import DropDown from '../../common/Dropdown/DropDown';

const EndTimeDropDown = ({
  timeOptions,
  onChange,
}: {
  timeOptions: string[];
  onChange: (identity: 'start' | 'end', time: string) => void;
}) => {
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    onChange('end', endTime);
  }, [endTime]);
  return (
    <DropDown selectValue={endTime} handleSelect={(value) => setEndTime(value)} className="min-w-[125px]">
      <DropDown.Trigger placeholder="근무 종료 시간" className="w-full text-center" />
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

export default EndTimeDropDown;
