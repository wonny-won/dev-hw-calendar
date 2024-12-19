import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    var changeDate = function (isPrev, isChangeMonth) {
        // moth
        var resMoth = getChangedMonth(props.currDate, isPrev);
        // yaer
        var resYear = getChangedYear(props.currDate, isPrev);
        props.setCurrDate(isChangeMonth ? resMoth : resYear);
        return true;
    };
    return (_jsxs(S.HeaderWrap, { children: [_jsxs("div", { children: [_jsx(CalendarBtn, { children: _jsx(PrevYear, {}), onClickFn: function () { return changeDate(true, false); } }), _jsx(CalendarBtn, { children: _jsx(PrevMonth, {}), onClickFn: function () { return changeDate(true, true); } })] }), _jsx(CheckedDate, { currDate: props.currDate }), _jsxs("div", { children: [_jsx(CalendarBtn, { children: _jsx(NextMonth, {}), onClickFn: function () { return changeDate(false, true); } }), _jsx(CalendarBtn, { children: _jsx(NextYear, {}), onClickFn: function () { return changeDate(false, false); } })] })] }));
}
