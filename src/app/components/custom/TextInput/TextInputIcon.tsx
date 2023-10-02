import React from 'react';
import { tv, VariantProps } from 'tailwind-variants/dist/index.js';

const tvIcon = tv({
    base: '',
    variants: {
        large: {
            sm: 'w-6 h-6',
            md: 'w-7 h-7',
            lg: 'w-8 h-8'
        },
        color: {
            default: 'fill-gray-3',
            success: 'fill-primary',
            error: 'fill-error'
        }
    },
    defaultVariants: {
        large: 'md',
        color: 'default'
    }
})



interface TextInputIconProps extends VariantProps<typeof tvIcon> {
    icon: React.ReactNode;
    large: 'sm' | 'md' | 'lg';
    color?: 'success' | 'error' ;
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ icon, large, color } ) => {

    return (
        <div className={tvIcon({ large, color })}>
            {icon}
        </div>
    );
};

export default TextInputIcon;
