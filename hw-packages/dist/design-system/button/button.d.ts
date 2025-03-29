/** @format */
import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    size: 'xs' | 'small' | 'medium' | 'large';
    color: 'primary' | 'inherit' | 'info';
    selected: boolean;
    [key: string]: any;
};
declare const Button: ({ children, size, color, selected, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map