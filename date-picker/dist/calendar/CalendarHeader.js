/** @format */
import React from 'react';
import CheckedDate from './CheckedDate';
import NextMonth from './incons/NextMonth';
import NextYear from './incons/NextYear';
import PrevMonth from './incons/PrevMonth';
import PrevYear from './incons/PrevYear';
import { getChangedMonth, getChangedYear } from './util';
import { HeaderWrap, HeaderBtn } from './calendar.style';
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
    return (React.createElement(HeaderWrap, null,
        React.createElement("div", null,
            React.createElement(HeaderBtn, { size: 'xs', color: 'info', children: React.createElement(PrevYear, null), selected: false, onClick: () => changeDate(true, false) }),
            React.createElement(HeaderBtn, { size: 'xs', color: 'info', children: React.createElement(PrevMonth, null), selected: false, onClick: () => changeDate(true, true) })),
        React.createElement(CheckedDate, { currDate: props.currDate }),
        React.createElement("div", null,
            React.createElement(HeaderBtn, { size: 'xs', color: 'info', children: React.createElement(NextMonth, null), selected: false, onClick: () => changeDate(false, true) }),
            React.createElement(HeaderBtn, { size: 'xs', color: 'info', children: React.createElement(NextYear, null), selected: false, onClick: () => changeDate(false, false) }))));
}
