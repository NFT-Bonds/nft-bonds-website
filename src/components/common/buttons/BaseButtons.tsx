import React from 'react';

interface ButtonProps {
    extraClasses?: string
}

const BaseButtons: React.FC<ButtonProps &
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
    extraClasses,
    children,
    ...props
}) => {
    return (
        <button className={"px-7 py-[4px]" + extraClasses}
                {...props}
        >
            {children}
        </button>
    );
};

export default BaseButtons;