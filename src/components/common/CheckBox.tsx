import React from 'react';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  className: string;
  value: string;
}

const CheckBox = ({ label, checked, onChange, className, value }: CheckBoxProps) => {
  return (
    <label
      className={`${className} has-checked:border-primary-500 has-checked:bg-primary-100 has-checked:text-primary-500 block rounded-lg border-1 border-gray-300 py-3 text-center transition-colors`}
    >
      <span className="block">{label}</span>
      <input
        type="checkbox"
        value={value}
        className="hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default CheckBox;
