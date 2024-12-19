import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Calendar from '../calendar/index';
import * as S from './style';
import CalendarIcon from '../components/atoms/incons/CalendarIcon';
export default function DatePicker(props) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(), value = _b[0], setValue = _b[1];
    return (_jsxs(S.datePickerWrap, { children: [_jsxs(S.Input, { style: { width: props.inputSize ? "".concat(props.inputSize, "px") : '200px' }, children: [props.showIcon && _jsx(CalendarIcon, {}), _jsx("input", { style: { border: 'none' }, onClick: function () {
                            setIsOpen(!isOpen);
                        }, value: value })] }), isOpen && _jsx(Calendar, { onChange: setValue })] }));
}
