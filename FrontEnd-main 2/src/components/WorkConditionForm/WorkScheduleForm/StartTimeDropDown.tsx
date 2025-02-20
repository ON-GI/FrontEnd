import { useEffect, useState } from 'react';
import DropDown from '../../common/Dropdown/DropDown';

const StartTimeDropDown = ({
  timeOptions,
  onChange,
  defaultValue = '',
}: {
  timeOptions: string[];
  onChange: (identity: 'start' | 'end', time: string) => void;
  defaultValue?: string;
}) => {
  const [startTime, setStartTime] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue !== '' && defaultValue !== startTime) {
      setStartTime(defaultValue);
    }
  }, [defaultValue]);

  const handleSelect = (value: string) => {
    setStartTime(value);
    onChange('start', value);
  };

  return (
    <DropDown selectValue={startTime} handleSelect={handleSelect} className="h-full min-w-[125px]">
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
