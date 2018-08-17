import * as React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => any;
    className?: string;
    fontSize?: number;
    style?: {
        color?: string;
        backgroundColor?: string;
        padding?: string;
    };
    disabled?: boolean;
}
declare const Button: React.SFC<ButtonProps>;
export default Button;
