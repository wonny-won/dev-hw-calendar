/** @format */
import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    size: 'xs' | 'small' | 'medium' | 'large';
    color: 'primary' | 'inherit' | 'info';
    selected: boolean;
    props?: any;
};
declare const ButtonComponent: ({ children, size, color, selected, ...props }: ButtonProps) => React.JSX.Element;
export default ButtonComponent;
//# sourceMappingURL=ButtonComponent.d.ts.map