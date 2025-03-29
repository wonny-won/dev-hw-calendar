/** @format */
import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { getDaysInMonth, getFirstDayOfMonth } from './util';
import { CalendarButton, CalendarBodyWrap } from './calendar.style';
import { Typography } from 'hw-packages';

interface CalendarProp {
	onChange: Dispatch<SetStateAction<any>>;
	currDate: string;
	setCurrDate: Dispatch<SetStateAction<any>>;
}

export default function CalendarBody(props: CalendarProp) {
	let currMothDayArr = [];
	const dayOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const yearMonth = props.currDate.split('.');
	const monthStartDate = getFirstDayOfMonth(yearMonth[0], yearMonth[1]);
	const days = getDaysInMonth(yearMonth[0], yearMonth[1]);
	const firstDateOfMonth = dayOfTheWeek.indexOf(monthStartDate);

	if (firstDateOfMonth) {
		for (let i = 1; i <= firstDateOfMonth; i++) {
			currMothDayArr[i - 1] = '';
		}
		for (let i = 1; i <= days; i++) {
			currMothDayArr[i - 1 + firstDateOfMonth] = i;
		}
	} else {
		for (let i = 1; i <= days; i++) {
			currMothDayArr[i - 1] = i;
		}
	}

	/*************************************************************
	 * 사용자 이벤트(클릭)에 따른 date 변경
	 *
	 * [참고]
	 * props.onChane가 undefined인 경우 currDate change 안됨
	 *
	 * @param e : 클릭한 버튼의 value
	 * @returns : 'YYYY . MM . DD'
	 *************************************************************/
	const onClickChangeDate = (e: any) => {
		if (!props.onChange) return;
		props.onChange(`${props.currDate} . ${e.currentTarget.innerHTML}`);
	};

	return (
		<CalendarBodyWrap>
			{dayOfTheWeek.map((i: string, idx: number) => (
				<Typography key={props.currDate + i + idx} typo='body2'>
					{i}
				</Typography>
			))}
			{currMothDayArr.map((i: number | string | null, idx) => (
				<CalendarButton
					key={props.currDate + i + idx}
					children={i}
					size='xs'
					color='info'
					selected={true}
					onClick={(e: any) => onClickChangeDate(e)}
				/>
			))}
		</CalendarBodyWrap>
	);
}
