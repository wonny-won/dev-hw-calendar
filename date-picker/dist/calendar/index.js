/** @format */
import React, { memo, useState } from 'react';
import { convertDateFromFn } from '../commons/util';
import CalendarBody from '../components/molecule/calendarBody/CalendarBody';
import CalendarHeader from '../components/molecule/calendarHeader/CalendarHeader';
function Calendar(props) {
    const [currDate, setCurrDate] = useState(convertDateFromFn(new Date()));
    return (React.createElement("div", { style: {
            margin: '5px',
            boxShadow: '10px 15px 10px #f0efef',
            display: 'inline-block',
            borderRadius: '10px',
            width: 'fit-content',
        } },
        React.createElement(CalendarHeader, { currDate: currDate, setCurrDate: setCurrDate }),
        React.createElement(CalendarBody, { onChange: props.onChange, currDate: currDate, setCurrDate: setCurrDate })));
}
export default memo(Calendar);
