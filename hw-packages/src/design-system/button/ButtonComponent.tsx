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

const ButtonComponent = ({ children, size, color, selected, ...props }: ButtonProps) => {
	return (
		<ButtonWrapper $size={size} $color={color} $selected={selected} {...props}>
			{children}
		</ButtonWrapper>
	);
};
const ButtonWrapper = styled.button<{
	$size: 'xs' | 'small' | 'medium' | 'large';
	$color: 'primary' | 'inherit' | 'info';
	$selected: boolean;
}>`
	background-color: transparent;
	padding: ${(props) => button.padding[props.$size] || button.padding['medium']};
	color: ${(props) => button.color.contained.enabled[props.$color] || button.color.contained.enabled['primary']};
	border: ${(props) => button.border.contained.enabled[props.$color] || button.border.contained.enabled['primary']};
	background: ${(props) =>
		button.background.contained.enabled[props.$color] || button.background.contained.enabled['primary']};
	border-radius: ${(props) => button.borderRadius[props.$size] || button.borderRadius['medium']};
`;
export default ButtonComponent;
