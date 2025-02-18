import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const BaseButton = ({ children, className, ...props }: BaseButtonProps) => {
  return (
    <button
      {...props}
      className="disabled:bg-primary-200 bg-primary-400 w-full cursor-pointer rounded-lg p-3 text-white transition-colors disabled:cursor-auto"
    >
      {children}
    </button>
  );
};

export default BaseButton;
