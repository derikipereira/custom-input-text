
import React, { ReactNode } from 'react';

interface TextInputRootProps {
  error?: boolean;
  large: 'sm' | 'md' | 'lg';
  variant: string;
  children: ReactNode;
}


const TextInputRoot: React.FC<TextInputRootProps> = ({
  error = false,
  large,
  variant,
  children
}) => {

  return (
    <div
      className={` flex items-center p-2 rounded-2xl custom-text-input bg-gray-8 border-2 
      ${error ? 'border-2 border-error' : 'border-2 border-gray-6/50'} 
      ${variant} `}
    >
        {children}
    </div>
  );
};

export default TextInputRoot;

