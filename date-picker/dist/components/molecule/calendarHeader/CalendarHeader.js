/** @format */
import React from 'react';
import CalendarBtn from '../../atoms/Btns/Btn';
import CheckedDate from '../../atoms/checkedDate/CheckedDate';
import NextMonth from '../../atoms/incons/NextMonth';
import NextYear from '../../atoms/incons/NextYear';
import PrevMonth from '../../atoms/incons/PrevMonth';
import PrevYear from '../../atoms/incons/PrevYear';
import * as S from './style';
import { getChangedMonth, getChangedYear } from '../../../commons/util';
export default function Header(props) {
    /*****************************************************************
     *  prev, next 버튼 클릭에 따라 global state 변경
     *
     * @param isPrev : prev / next 확인
     * @param isChangeMonth : month / year 확인
     * @returns
     *****************************************************************/
    const changeDate = (isPrev, isChangeMonth) => {
        // moth
        const resMoth = getChangedMonth(props.currDate, isPrev);
        // yaer
        const resYear = getChangedYear(props.currDate, isPrev);
        props.setCurrDate(isChangeMonth ? resMoth : resYear);
        return true;
    };
    return (React.createElement(S.HeaderWrap, null,
        React.createElement("div", null,
            React.createElement(CalendarBtn, { children: React.createElement(PrevYear, null), onClickFn: () => changeDate(true, false) }),
            React.createElement(CalendarBtn, { children: React.createElement(PrevMonth, null), onClickFn: () => changeDate(true, true) })),
        React.createElement(CheckedDate, { currDate: props.currDate }),
        React.createElement("div", null,
            React.createElement(CalendarBtn, { children: React.createElement(NextMonth, null), onClickFn: () => changeDate(false, true) }),
            React.createElement(CalendarBtn, { children: React.createElement(NextYear, null), onClickFn: () => changeDate(false, false) }))));
}
