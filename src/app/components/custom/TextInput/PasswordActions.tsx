import React from 'react';
import TextInputIcon from './TextInputIcon';
import { EyeIcon, EyeOffIcon } from '@/assets/Icons';

interface PasswordActionProps {
    isPasswordHidden: boolean;
    onClick: () => void;
    large: 'sm' | 'md' | 'lg';
}

const PasswordAction: React.FC<PasswordActionProps> = ({
    isPasswordHidden,
    onClick,
    large
}) => {
    const passwordActionClassName = `text-gray-3 custom-text-input-passwordAction`;

    return (
        <button
            onClick={onClick}
            className={` ${passwordActionClassName}`}
        >
            {isPasswordHidden ? <TextInputIcon icon={<EyeIcon />} large={large}  /> : <TextInputIcon icon={<EyeOffIcon />} large={large} />}
        </button>
    );
};

export default PasswordAction;
