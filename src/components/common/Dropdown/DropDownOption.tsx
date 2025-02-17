import { useContext } from 'react';
import { DropDownContext } from './DropDown';

const DropDownOption = ({ children, value }: { children: React.ReactNode; value: string }) => {
  const { handleSelect, ToggleDropDown } = useContext(DropDownContext);

  return (
    <li
      key={value}
      className="cursor-pointer p-3.5"
      onClick={() => {
        handleSelect(value);
        ToggleDropDown();
      }}
    >
      {children}
    </li>
  );
};

export default DropDownOption;
