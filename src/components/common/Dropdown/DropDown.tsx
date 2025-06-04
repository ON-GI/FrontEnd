import React, { createContext, useState } from 'react';
import DropDownTrigger from './DropDownTrigger';
import DropDownOption from './DropDownOption';
import DropDownOptions from './DropDownOptions';

interface DropDownContext {
  isDropDownOpen: boolean;
  ToggleDropDown: () => void;
  selectValue: string;
  handleSelect: (value: any) => void;
}

interface DropDownProps {
  handleSelect: (value: any) => void;
  selectValue: string;
  children: React.ReactNode;
  className?: string;
}

export const DropDownContext = createContext<DropDownContext>({
  isDropDownOpen: false,
  ToggleDropDown: () => {},
  selectValue: '',
  handleSelect: () => {},
});

const DropDown = ({ handleSelect, selectValue, children, className }: DropDownProps) => {
  const [dropDwon, setDropDown] = useState(false);

  const defaultValues = {
    isDropDownOpen: dropDwon,
    ToggleDropDown: () => {
      setDropDown((prev) => !prev);
    },
    selectValue: selectValue,
    handleSelect: handleSelect,
  };

  return (
    <DropDownContext.Provider value={defaultValues}>
      <div className={`relative ${className}`}>{children}</div>
    </DropDownContext.Provider>
  );
};

DropDown.Trigger = DropDownTrigger;
DropDown.Options = DropDownOptions;
DropDown.Option = DropDownOption;

export default DropDown;
