/** @format */
import styled from '@emotion/styled';
import { Button } from 'hw-packages';
import { button } from 'hw-packages/src/design-system/button/semanticBtn';
export const HeaderWrap = styled.div `
	display: flex;
	width: 280px;
	height: 35px;
	border-radius: 8px 8px 0 0;
	border: 1px solid #ddd;
	justify-content: space-between;
	align-items: center;
	padding: 0 5px;
`;
export const HeaderBtn = styled(Button) `
	&:hover {
		background-color: #fff;
	}
`;
export const CalendarBodyWrap = styled.div `
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	justify-content: center;
	width: 280px;
	height: 250px;
	padding: 0 5px;
	border: 1px solid #ddd;
	border-top: none;
	border-radius: 0 0 10px 10px;
`;
export const CalendarButton = styled(Button) `
	&:hover {
		background-color: ${(props) => !props.children?.toString().length ? '#fff' : button.background.contained.hovered.info};
	}
`;
