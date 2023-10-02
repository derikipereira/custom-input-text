import React from 'react';
import { tv, VariantProps } from 'tailwind-variants/dist/index.js';

const tvInput = tv({
    base: 'w-full bg-transparent text-gray-3 border-none focus:outline-none p-2 rounded',
    variants: {
        large: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        }
    },
    defaultVariants: {
        large: 'md'
    }
})

interface InputProps extends VariantProps<typeof tvInput> {
  placeholder: string;
  large: 'sm' | 'md' | 'lg';
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, large, type }) => {

  return (
    <input
      type={type || 'text'}
      className={tvInput({ large })}
      placeholder={placeholder}
    />
  );
};

export default Input;
