import React from 'react';
import Icon from './Icon';

import { ErrorIcon , SuccessIcon } from '../../assets/Icons';


interface StatusProps {
  error?: boolean;
  large: 'sm' | 'md' | 'lg';
}

const Status: React.FC<StatusProps> = ({ error, large }) => {
  const statusClassName = `custom-text-input-status ${error ? 'error' : ''}`;

  return <div className={statusClassName}>{error ? <Icon icon={<ErrorIcon />} large={large} className={`fill-error`} /> : <Icon icon={<SuccessIcon />} large={large} className={`fill-primary`} />}</div>;
};

export default Status;
