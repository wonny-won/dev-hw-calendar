/** @format */
import styled from '@emotion/styled';
export const CommonBtn = styled.button `
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.isBody && 'black'};
		color: ${(props) => props.isBody && '#FFF'};
		border-radius: ${(props) => props.isBody && '50% 50%'};
	}
`;
