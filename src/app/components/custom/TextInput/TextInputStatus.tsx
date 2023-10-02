import React from 'react';
import TextInputIcon from './TextInputIcon';
import { ErrorIcon, SuccessIcon } from '@/assets/Icons';


interface TextInputStatusProps {
  error?: boolean;
  large: 'sm' | 'md' | 'lg';
}

const TextInputStatus: React.FC<TextInputStatusProps> = ({ error, large }) => {
  const statusClassName = `custom-text-input-status ${error ? 'error' : ''}`;

  return <div className={statusClassName}>{error ? <TextInputIcon icon={<ErrorIcon />} large={large} className={`fill-error`} /> : <TextInputIcon icon={<SuccessIcon />} large={large} className={`fill-primary`} />}</div>;
};

export default TextInputStatus;
