import React from 'react';

interface InputProps {
  placeholder: string;
  large: 'sm' | 'md' | 'lg';
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, large, type }) => {
  const textInputClassName = `custom-text-input-input ${large === 'sm' ? 'text-sm' : large === 'md' ? 'text-base' : 'text-lg'}`;

  return (
    <input
      type={type || 'text'}
      className={`w-full bg-transparent text-gray-3 border-none focus:outline-none p-2 rounded ${textInputClassName}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
