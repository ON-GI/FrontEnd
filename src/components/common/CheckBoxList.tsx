import { ChangeEvent, useState } from 'react';
import React from 'react';

interface CheckBoxProps {
  checkBoxList: {
    label: string;
    value: string;
  }[];
  checkBoxTitle: string;
  required?: boolean;
  lastFill?: boolean;
  onChange: (values: string[]) => void;
  resetValue?: string;
}

const CheckBox = ({
  checkBoxList,
  checkBoxTitle,
  required = false,
  lastFill = false,
  onChange,
  resetValue,
}: CheckBoxProps) => {
  const [selectList, setSelectList] = useState<string[]>([]);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSelectList((prev) => {
      let updatedList = [...prev];

      if (value === resetValue) {
        updatedList = [resetValue];
      } else {
        if (prev.includes(resetValue as string)) {
          updatedList = prev.filter((v) => v !== resetValue);
        }

        if (prev.includes(value)) {
          updatedList = prev.filter((v) => v !== value);
        } else {
          updatedList.push(value);
        }
      }

      // 변경된 리스트를 onChange로 전달
      onChange(updatedList);
      return updatedList;
    });
  };

  return (
    <>
      {checkBoxTitle && (
        <p className="mb-2 block font-medium">
          {checkBoxTitle}
          {required && <span className="text-[#FF0000]">*</span>}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2">
        {checkBoxList.map((item) => (
          <label
            className={`${lastFill && 'last:col-span-2'} has-checked:border-primary-500 has-checked:bg-primary-100 has-checked:text-primary-500 block rounded-lg border-1 border-gray-300 py-3 text-center transition-colors`}
          >
            <span className="block">{item.label}</span>
            <input
              type="checkbox"
              key={item.value}
              value={item.value}
              className="hidden"
              checked={selectList.includes(item.value)}
              onChange={handleCheck}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default CheckBox;
