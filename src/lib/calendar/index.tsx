/** @format */
import React, { memo, useState } from 'react';
import { convertDateFromFn } from '../commons/util';
import CalendarBody from '../components/molecule/calendarBody/CalendarBody';
import CalendarHeader from '../components/molecule/calendarHeader/CalendarHeader';

interface CalendarProp {
	value?: any;
	onChange?: any;
}

function Calendar(props: CalendarProp) {
	const [currDate, setCurrDate] = useState(convertDateFromFn(new Date()));

	return (
		<div
			style={{
				margin: '5px',
				boxShadow: '10px 15px 10px #f0efef',
				display: 'inline-block',
				borderRadius: '10px',
				width: 'fit-content',
			}}>
			<CalendarHeader currDate={currDate} setCurrDate={setCurrDate} />
			<CalendarBody onChange={props.onChange} currDate={currDate} setCurrDate={setCurrDate} />
		</div>
	);
}
export default memo(Calendar);
