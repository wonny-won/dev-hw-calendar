import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CalendarBtn from '../../atoms/Btns/Btn';
import * as S from './style';
import { T2 } from '../../../commons/commonStyle';
import { getDaysInMonth, getFirstDayOfMonth } from '../../../commons/util';
export default function CalendarBody(props) {
    var currMothDayArr = [];
    var dayOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var yearMonth = props.currDate.split('.');
    var monthStartDate = getFirstDayOfMonth(yearMonth[0], yearMonth[1]);
    var days = getDaysInMonth(yearMonth[0], yearMonth[1]);
    var firstDateOfMonth = dayOfTheWeek.indexOf(monthStartDate);
    if (firstDateOfMonth) {
        for (var i = 1; i <= firstDateOfMonth; i++) {
            currMothDayArr[i - 1] = '';
        }
        for (var i = 1; i <= days; i++) {
            currMothDayArr[i - 1 + firstDateOfMonth] = i;
        }
    }
    else {
        for (var i = 1; i <= days; i++) {
            currMothDayArr[i - 1] = i;
        }
    }
    /*************************************************************
     * 사용자 이벤트(클릭)에 따른 date 변경
     *
     * [참고]
     * props.onChane가 undefined인 경우 currDate change 안됨
     *
     * @param e : 클릭한 버튼의 value
     * @returns : 'YYYY . MM . DD'
     *************************************************************/
    var onClickChangeDate = function (e) {
        if (!props.onChange)
            return;
        props.onChange("".concat(props.currDate, " . ").concat(e.currentTarget.innerHTML));
    };
    return (_jsxs(S.CalendarBodyWrap, { children: [dayOfTheWeek.map(function (i, idx) { return (_jsx(T2, { children: i }, props.currDate + i + idx)); }), currMothDayArr.map(function (i, idx) { return (_jsx(CalendarBtn, { isBody: true, btnText: i, style: {
                    width: '34px',
                    height: '34px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, onClickFn: function (e) { return onClickChangeDate(e); } }, props.currDate + i + idx)); })] }));
}
