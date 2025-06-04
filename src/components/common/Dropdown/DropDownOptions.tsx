import React, { useContext } from 'react';
import { DropDownContext } from './DropDown';

const DropDownOptions = ({
  children,
  position = 'top',
}: {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}) => {
  const { isDropDownOpen } = useContext(DropDownContext);
  const optionPosition = position === 'top' ? 'top-[58px]' : 'bottom-[58px]';
  const baseStyle = `absolute left-0 z-10 flex max-h-[250px] w-full flex-col overflow-y-scroll rounded-lg bg-white text-center text-gray-900 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.12)]`;
  return <>{isDropDownOpen && <ul className={`${baseStyle} ${optionPosition}`}>{children}</ul>}</>;
};

export default DropDownOptions;
