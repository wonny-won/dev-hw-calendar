/** @format */

import React from 'react';
import _get from 'lodash/get';
import styled from '@emotion/styled';
import { token, typo, Typo } from './typo';

const Typography = ({ children, typo, color, ...props }: any) => {
	console.log('typo---', typo);
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
	color: ${({ $color }) => (!!$color ? $color : 'inherit')};
	font: ${({ $typo }) => ($typo && typo[`${$typo}`]) || 'inherit'};
	letter-spacing: 0;
	white-space: pre-line;
`;

export default Typography;
