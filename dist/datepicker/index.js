import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** @format */
import React, { Suspense } from 'react';
import { useState } from 'react';
import * as S from './style';
import CalendarIcon from '../components/atoms/incons/CalendarIcon';
var Calendar = React.lazy(function () { return import('../calendar/index'); });
export default function DatePicker(props) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(), value = _b[0], setValue = _b[1];
    return (_jsxs(S.datePickerWrap, { children: [_jsxs(S.Input, { style: { width: props.inputSize ? "".concat(props.inputSize, "px") : '200px' }, children: [props.showIcon && _jsx(CalendarIcon, {}), _jsx("input", { style: { border: 'none' }, onClick: function () {
                            setIsOpen(!isOpen);
                        }, value: value })] }), _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: isOpen && _jsx(Calendar, { onChange: setValue }) })] }));
}
