import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** @format */
import { useState } from 'react';
import CalendarBody from '../calendar/components/molecule/calendarBody/CalendarBody';
import Header from '../calendar/components/molecule/header/Header';
import { convertDateFromFn } from './commons/util';
export default function Calendar(props) {
    var _a = useState(convertDateFromFn(new Date())), currDate = _a[0], setCurrDate = _a[1];
    return (_jsxs("div", { style: { margin: '5px', boxShadow: '10px 15px 10px #f0efef', display: 'inline-block' }, children: [_jsx(Header, { currDate: currDate, setCurrDate: setCurrDate }), _jsx(CalendarBody, { onChange: props.onChange, currDate: currDate, setCurrDate: setCurrDate })] }));
}
