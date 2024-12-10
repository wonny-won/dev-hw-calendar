/** @format */
import React, { useState } from 'react';
import CalendarBody from '../calendar/components/molecule/calendarBody/CalendarBody';
import Header from '../calendar/components/molecule/header/Header';
import { convertDateFromFn } from './commons/util';

interface CalendarProp {
	value?: any;
	onChange?: any;
}

export default function Calendar(props: CalendarProp) {
	const [currDate, setCurrDate] = useState(convertDateFromFn(new Date()));

	return (
		<div style={{ margin: '5px', boxShadow: '10px 15px 10px #f0efef', display: 'inline-block' }}>
			<Header currDate={currDate} setCurrDate={setCurrDate} />
			<CalendarBody onChange={props.onChange} currDate={currDate} setCurrDate={setCurrDate} />
		</div>
	);
}
