/** @format */
import React from 'react';
import { RecoilRoot } from 'recoil';
import CalendarBody from '../calendar/components/molecule/calendarBody/CalendarBody';
import Header from '../calendar/components/molecule/header/Header';

interface CalendarProp {
	value?: any;
	onChange?: any;
}

export default function Calendar(props: CalendarProp) {
	return (
		<RecoilRoot>
			<div style={{ margin: '5px', boxShadow: '10px 15px 10px #f0efef', display: 'inline-block' }}>
				<Header />
				<CalendarBody onChange={props.onChange} />
			</div>
		</RecoilRoot>
	);
}
