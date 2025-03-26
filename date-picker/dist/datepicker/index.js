/** @format */
import React, { Suspense } from 'react';
import { useState } from 'react';
import * as S from './style';
import CalendarIcon from '../components/atoms/incons/CalendarIcon';
const Calendar = React.lazy(() => import('../calendar/index'));
export default function DatePicker(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState();
    return (React.createElement(S.datePickerWrap, null,
        React.createElement(S.Input, { style: { width: props.inputSize ? `${props.inputSize}px` : '200px' } },
            props.showIcon && React.createElement(CalendarIcon, null),
            React.createElement("input", { style: { border: 'none' }, onClick: () => {
                    setIsOpen(!isOpen);
                }, value: value })),
        React.createElement(Suspense, { fallback: React.createElement("div", null, "Loading...") }, isOpen && React.createElement(Calendar, { onChange: setValue }))));
}
