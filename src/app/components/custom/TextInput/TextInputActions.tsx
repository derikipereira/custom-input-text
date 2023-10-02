import React, { ReactNode } from 'react';

interface TextInputActionsProps {
  children?: ReactNode;
}

const TextInputActions: React.FC<TextInputActionsProps> = ({ children }) => {
  return (
    <div className='flex'>
      {children}
    </div>
  );
};

export default TextInputActions;
