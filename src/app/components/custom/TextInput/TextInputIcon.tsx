import React from 'react';

interface TextInputIconProps {
    icon: React.ReactNode;
    large: 'sm' | 'md' | 'lg';
    className?: string;
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ icon, large, className }) => {
    let iconSizeClass = 'md';
    const inputClassName = `custom-text-input-icon ${className || ''}`;

    if (large === 'sm') {
        iconSizeClass = 'w-6 h-6';
    } else if (large === 'md') {
        iconSizeClass = 'w-7 h-7';
    } else if (large === 'lg') {
        iconSizeClass = 'w-8 h-8';
    }

    return (
        <div className={`${iconSizeClass} ${inputClassName}`}>
            {icon}
        </div>
    );
};

export default TextInputIcon;
