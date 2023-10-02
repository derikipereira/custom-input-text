import React from 'react';

interface ActionsProps {
  showPasswordAction?: boolean;
  showStatus?: boolean;
  error?: boolean;
  children: React.ReactNode;
}

const Actions: React.FC<ActionsProps> = ({
  error,
  children,
}) => {
  return (
    <div className={`flex actions ${error ? 'error' : ''}`}>
      {children}
    </div>
  );
};

export default Actions;
