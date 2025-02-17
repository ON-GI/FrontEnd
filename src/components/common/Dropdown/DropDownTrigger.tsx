import { useContext } from 'react';
import { DropDownContext } from './DropDown';

const DropDownTrigger = ({ placeholder, className }: { placeholder: string; className?: string }) => {
  const { ToggleDropDown, selectValue, isDropDownOpen } = useContext(DropDownContext);

  const openStyles = 'border-primary-400 after:text-primary-400 after:rotate-180 ';
  const afterStyle = "after:pb-1 after:text-gray-300 after:content-['⌵']";
  const baseStyle =
    'flex h-full min-w-[100px] items-center justify-between rounded-lg border border-gray-300 px-2.5 transition-colors cursor-pointer';

  return (
    <div onClick={ToggleDropDown} className={`${baseStyle} ${afterStyle} ${isDropDownOpen && openStyles} `}>
      {!selectValue && <span className="text-gray-300">{placeholder}</span>}
      {selectValue && <span className={`${className} text-gray-900`}>{selectValue}</span>}
    </div>
  );
};

export default DropDownTrigger;
