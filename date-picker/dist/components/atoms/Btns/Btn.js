/** @format */
import React from 'react';
import * as S from './style';
const CalendarBtn = (props) => {
    return (React.createElement(S.CommonBtn, { style: props.style, onClick: props.onClickFn, isBody: props.isBody }, props.btnText || props.children));
};
export default CalendarBtn;
