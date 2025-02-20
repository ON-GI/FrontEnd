import { forwardRef, memo } from 'react';
import React from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputState?: 'default' | 'invalid'; // Input의 상태 default -> 기본 invalid -> 유효하지 않은 상태
  error?: string; // 에러 메세지
  helper?: string; // 헬퍼 메세지
  label?: string; // 인풋의 라벨
  required?: boolean; // 필수로 입력해야 한다면 라벨 옆에 표시
  className?: string;
}

const BaseInput = memo(
  forwardRef<HTMLInputElement, BaseInputProps>(
    ({ inputState = 'default', error, label, required, className, ...props }: BaseInputProps, ref) => {
      const getInputStyle = () => {
        const defaultInputStyle =
          'focus:border-primary-400 w-full rounded-lg border  px-3.5 py-3 text-gray-900 transition-colors outline-none';
        const InputStateStyles = {
          default: 'border border-gray-300',
          invalid: 'border border-[#FF6262]',
        }[inputState];

        return `${defaultInputStyle} ${InputStateStyles} ${className}`;
      };
      return (
        <>
          {label && (
            <label className="mb-2 block">
              {label}
              {required && <span className="text-[#FF0000]">*</span>}
            </label>
          )}

          <input className={getInputStyle()} required={required} {...props} ref={ref} />
          {error && <p className="pt-2 text-[#FF0000]">{error}</p>}
        </>
      );
    },
  ),
);
export default BaseInput;
