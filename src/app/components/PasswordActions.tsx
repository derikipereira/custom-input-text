import React from 'react';
import Icon from './Icon';

import { EyeIcon, EyeOffIcon } from '../../assets/Icons';

interface PasswordActionProps {
    isPasswordHidden: boolean;
    className?: string;
    onClick: () => void;
    large: 'sm' | 'md' | 'lg';
}

const PasswordAction: React.FC<PasswordActionProps> = ({
    isPasswordHidden,
    onClick,
    className,
    large
}) => {
    const passwordActionClassName = `text-gray-3 custom-text-input-passwordAction ${className || ''}`;

    return (
        <button
            onClick={onClick}
            className={` ${passwordActionClassName}`}
        >
            {isPasswordHidden ? <Icon icon={<EyeIcon />} large={large} className={`fill-gray-3`} /> : <Icon icon={<EyeOffIcon />} large={large} className={`fill-gray-3`} />}
        </button>
    );
};

export default PasswordAction;
