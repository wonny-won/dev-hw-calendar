import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CalendarBody from '../calendar/components/molecule/calendarBody/CalendarBody';
import Header from '../calendar/components/molecule/header/Header';
export default function Calendar(props) {
    return (_jsxs("div", { style: { margin: '5px', boxShadow: '10px 15px 10px #f0efef', display: 'inline-block' }, children: [_jsx(Header, {}), _jsx(CalendarBody, { onChange: props.onChange })] }));
}
