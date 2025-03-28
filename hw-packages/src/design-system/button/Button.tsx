/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { button } from './button';

type ButtonProps = {
	children: React.ReactNode;
	size: 'xs' | 'small' | 'medium' | 'large';
	color: 'primary' | 'inherit' | 'info';
	selected: boolean;
	props?: any;
};

const Button = ({ children, size, color, selected, ...props }: ButtonProps) => {
	return (
		<ButtonWrapper $size={size} $color={color} $selected={selected} {...props}>
			{children}
		</ButtonWrapper>
	);
};
const ButtonWrapper = styled.button<{ $size: string; $color: string; $selected: boolean }>`
	background-color: transparent;
	padding: ${(props) => button.padding[props.$size] || button.padding['medium']};
	color: ${(props) => button.color[props.$color] || button.color['primary']};
	border: ${(props) => button.border[props.$color] || button.border['primary']};
	background: ${(props) => button.background[props.$color] || button.background['primary']};
	border-radius: ${(props) => button.borderRadius[props.$size] || button.borderRadius['medium']};
`;
export default Button;
