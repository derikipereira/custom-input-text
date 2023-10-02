'use client'
import React, { useState } from 'react';
import Icon from './Icon';
import Input from './Input';
import PasswordAction from './PasswordActions';
import Status from './Status';
import Actions from './Actions';

interface CustomTextInputProps {
  error?: boolean;
  large: 'sm' | 'md' | 'lg';
  placeholder: string;
  variant: string;
  icon?: React.ReactNode;
  showPasswordAction?: boolean; 
  showStatus?: boolean;
}


/**
 * 
 * @param error boolean put if action error
 * @param large defines size for the component only[sm , md, lg]
 * @param placeholder initial string input text 
 * @param variant variant css tailwind
 * @param icon An React.Node of svgs
 * @param showPasswordAction boolean to show passwordShow button
 * @param showStatus boolean to show Status (error / success)
 * @returns CustomTextInput
 */
const CustomTextInput: React.FC<CustomTextInputProps> = ({
  error = false,
  large,
  placeholder,
  variant,
  icon,
  showPasswordAction = false,
  showStatus = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={` flex items-center p-2 rounded-2xl custom-text-input bg-gray-8 border-2 
      ${error ? 'border-2 border-error' : 'border-2 border-gray-6/50'} 
      ${variant} `}
    >
      <Icon
        icon={icon}
        large={large}
        className={`fill-gray-3`}
      />
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className={`${large === 'sm' ? 'text-sm' : large === 'md' ? 'text-base' : 'text-lg'}`}
      />

      <Actions>
        {showPasswordAction && (
          <PasswordAction
            isPasswordHidden={isPasswordVisible}
            onClick={togglePasswordVisibility}
            large={large}
          />
        )}
        {showStatus && <Status error={error} large={large} />}
      </Actions>

    </div>
  );
};

export default CustomTextInput;

