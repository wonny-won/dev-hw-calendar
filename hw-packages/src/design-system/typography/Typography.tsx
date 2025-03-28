/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { typo, Typo } from './typo';

type TypographyProps = {
	children: React.ReactNode;
	typo: Typo;
	color?: string;
	props?: any;
};

const Typography = ({ children, typo, color, ...props }: TypographyProps) => {
	return (
		<ContentWrapper $color={color} $typo={typo} {...props}>
			{children}
		</ContentWrapper>
	);
};

/**
 * 타이포그래피 스타일
 */
const ContentWrapper = styled.div<{ $typo: Typo; $color?: string }>`
	display: inline-block;
	color: ${({ $color }) => (!!$color && $color) || 'inherit'};
	font: ${({ $typo }) => (!!$typo && typo[`${$typo}`]) || 'inherit'};
	letter-spacing: 0;
	white-space: pre-line;
`;

export default Typography;
