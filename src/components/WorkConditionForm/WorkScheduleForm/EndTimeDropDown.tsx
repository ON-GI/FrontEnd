import { useEffect, useState } from 'react';
import DropDown from '../../common/Dropdown/DropDown';

const EndTimeDropDown = ({
  timeOptions,
  onChange,
  defaultValue = '',
}: {
  timeOptions: string[];
  onChange: (identity: 'start' | 'end', time: string) => void;
  defaultValue?: string;
}) => {
  const [endTime, setEndTime] = useState('');
  console.log(endTime);
  useEffect(() => {
    if (defaultValue !== '' && defaultValue !== endTime) {
      setEndTime(defaultValue);
    }
  }, [defaultValue]);

  const handleSelect = (value: string) => {
    setEndTime(value);
    onChange('end', value);
  };

  return (
    <DropDown selectValue={endTime} handleSelect={handleSelect} className="h-full min-w-[125px]">
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
