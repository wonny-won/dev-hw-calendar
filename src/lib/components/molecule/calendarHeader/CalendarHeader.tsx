/** @format */
import React, { Dispatch, SetStateAction } from 'react';
import CalendarBtn from '../../atoms/Btns/Btn';
import CheckedDate from '../../atoms/checkedDate/CheckedDate';
import NextMonth from '../../atoms/incons/NextMonth';
import NextYear from '../../atoms/incons/NextYear';
import PrevMonth from '../../atoms/incons/PrevMonth';
import PrevYear from '../../atoms/incons/PrevYear';
import * as S from './style';
import { getChangedMonth, getChangedYear } from '../../../commons/util';

interface HeaderProp {
	currDate: string;
	setCurrDate: Dispatch<SetStateAction<any>>;
}

export default function Header(props: HeaderProp) {
	/*****************************************************************
	 *  prev, next 버튼 클릭에 따라 global state 변경
	 *
	 * @param isPrev : prev / next 확인
	 * @param isChangeMonth : month / year 확인
	 * @returns
	 *****************************************************************/
	const changeDate = (isPrev: boolean, isChangeMonth: boolean) => {
		// moth
		const resMoth = getChangedMonth(props.currDate, isPrev);
		// yaer
		const resYear = getChangedYear(props.currDate, isPrev);
		props.setCurrDate(isChangeMonth ? resMoth : resYear);

		return true;
	};

	return (
		<S.HeaderWrap>
			<div>
				<CalendarBtn children={<PrevYear />} onClickFn={() => changeDate(true, false)} />
				<CalendarBtn children={<PrevMonth />} onClickFn={() => changeDate(true, true)} />
			</div>
			<CheckedDate currDate={props.currDate} />
			<div>
				<CalendarBtn children={<NextMonth />} onClickFn={() => changeDate(false, true)} />
				<CalendarBtn children={<NextYear />} onClickFn={() => changeDate(false, false)} />
			</div>
		</S.HeaderWrap>
	);
}
