import React from 'react';

interface PlaceHolderInput extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
}

export const PlaceHolderInput = ({ placeholder, className, ...props }: PlaceHolderInput) => {
  return (
    <div className="relative w-full flex-1">
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 px-7.5 py-3 text-right outline-none"
        {...props}
      />
      <span className="absolute top-[50%] right-[12px] translate-y-[-50%] text-gray-300">{placeholder}</span>
    </div>
  );
};
