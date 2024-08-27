import React, { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <button
            type="button"
            className={`btn ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
