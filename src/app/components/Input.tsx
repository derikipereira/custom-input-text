import React from 'react';

interface InputProps {
  placeholder: string;
  className?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, className, type }) => {
  const inputClassName = `custom-text-input-input ${className || ''}`;

  return (
    <input
      type={type || 'text'}
      className={`w-full bg-transparent text-gray-3 border-none focus:outline-none p-2 rounded ${inputClassName}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
