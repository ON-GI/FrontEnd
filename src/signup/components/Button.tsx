import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  isFixed?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  fullWidth?: boolean; // ✅ 새로운 prop 추가
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  isFixed = false,
  className = '',
  variant = 'primary',
  fullWidth = true, // ✅ 기본값은 `true`
}) => {
  const variantStyles = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-gray-300 text-gray-700',
    outline: 'border border-gray-500 text-gray-900',
    disabled: 'bg-primary-100 text-white cursor-not-allowed',
  };

  return (
    <div className={isFixed ? 'absolute bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 transform px-6' : ''}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`rounded-md py-3 font-semibold ${
          disabled ? variantStyles['disabled'] : variantStyles[variant]
        } ${className} ${fullWidth ? 'w-full' : ''}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
