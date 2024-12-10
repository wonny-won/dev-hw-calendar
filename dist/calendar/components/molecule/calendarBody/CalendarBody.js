import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getDaysInMonth } from '../../../commons/util';
import CalendarBtn from '../../atoms/Btns/Btn';
import * as S from './style';
import { T2 } from '../../../commons/commonStyle';
export default function CalendarBody(props) {
    var currMothDayArr = [];
    var dayOfTheWeed = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var date = props.currDate.split('.');
    var days = getDaysInMonth(date[0], date[1]);
    for (var i = 1; i <= days; i++) {
        currMothDayArr[i - 1] = i;
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
    return (_jsxs(S.CalendarBodyWrap, { children: [dayOfTheWeed.map(function (i) { return (_jsx(T2, { children: i })); }), currMothDayArr.map(function (i) { return (_jsx(CalendarBtn, { isBody: true, btnText: i, style: {
                    width: '34px',
                    height: '34px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, onClickFn: function (e) { return onClickChangeDate(e); } }, props.currDate + i)); })] }));
}
