/** @format */
import React, { Dispatch, SetStateAction } from 'react';
import CheckedDate from './CheckedDate';
import NextMonth from './incons/NextMonth';
import NextYear from './incons/NextYear';
import PrevMonth from './incons/PrevMonth';
import PrevYear from './incons/PrevYear';
import { getChangedMonth, getChangedYear } from './util';
import { HeaderWrap, HeaderBtn } from './calendar.style';

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
		<HeaderWrap>
			<div>
				<HeaderBtn
					size='xs'
					color='info'
					children={<PrevYear />}
					selected={false}
					onClick={() => changeDate(true, false)}
				/>
				<HeaderBtn
					size='xs'
					color='info'
					children={<PrevMonth />}
					selected={false}
					onClick={() => changeDate(true, true)}
				/>
			</div>
			<CheckedDate currDate={props.currDate} />
			<div>
				<HeaderBtn
					size='xs'
					color='info'
					children={<NextMonth />}
					selected={false}
					onClick={() => changeDate(false, true)}
				/>
				<HeaderBtn
					size='xs'
					color='info'
					children={<NextYear />}
					selected={false}
					onClick={() => changeDate(false, false)}
				/>
			</div>
		</HeaderWrap>
	);
}
