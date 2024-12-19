import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** @format */
import { memo, useState } from 'react';
import { convertDateFromFn } from '../commons/util';
import CalendarBody from '../components/molecule/calendarBody/CalendarBody';
import CalendarHeader from '../components/molecule/calendarHeader/CalendarHeader';
function Calendar(props) {
    var _a = useState(convertDateFromFn(new Date())), currDate = _a[0], setCurrDate = _a[1];
    return (_jsxs("div", { style: {
            margin: '5px',
            boxShadow: '10px 15px 10px #f0efef',
            display: 'inline-block',
            borderRadius: '10px',
            width: 'fit-content',
        }, children: [_jsx(CalendarHeader, { currDate: currDate, setCurrDate: setCurrDate }), _jsx(CalendarBody, { onChange: props.onChange, currDate: currDate, setCurrDate: setCurrDate })] }));
}
export default memo(Calendar);
