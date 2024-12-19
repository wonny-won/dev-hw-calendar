/**
 * 날짜 데이터 폼 변환 함수
 *
 * @format
 * @param date : 폼 변환 할 날짜
 * @returns 'yy . MM'
 */
export var convertDateFromFn = function (date) {
    var converDate = new Date(date);
    var year = converDate.getFullYear();
    var month = String(converDate.getMonth() + 1).padStart(2, '0');
    return "".concat(year, " . ").concat(month, " ");
};
/**
 * 이전, 다음 달 버튼 클릭시 데이터 바꿔주는 함수
 *
 * @param currDate : 선택된 날짜 ?? 현재 날짜
 * @param isPrev : 이전 달 버튼 클릭 여부
 * @returns 'YYYY . MM'
 */
export var getChangedMonth = function (currDate, isPrev) {
    var currYear = Number(currDate.split('.')[0]);
    var currMoth = Number(currDate.split('.')[1]);
    var resYear;
    var resMoth;
    if (isPrev) {
        if (currMoth <= 1) {
            resYear = currYear - 1;
        }
        else {
            resMoth = currMoth - 1;
        }
    }
    else {
        if (currMoth >= 12) {
            resYear = currYear + 1;
        }
        else {
            resMoth = currMoth + 1;
        }
    }
    return "".concat(resYear !== null && resYear !== void 0 ? resYear : currYear, " . ").concat(isPrev ? resMoth !== null && resMoth !== void 0 ? resMoth : 12 : resMoth !== null && resMoth !== void 0 ? resMoth : 1);
};
/**
 * 이전, 다음 년도 버튼 클릭시 데이터 바꿔주는 함수
 *
 * @param currDate : 선택된 날짜 ?? 현재 날짜
 * @param isPrev : 이전 년도 버튼 선택 여부
 * @returns 'YYYY.MM'
 */
export var getChangedYear = function (currDate, isPrev) {
    var currYear = Number(currDate.split('.')[0]);
    var currMoth = Number(currDate.split('.')[1]);
    var resYear;
    if (isPrev) {
        resYear = currYear - 1;
    }
    else {
        resYear = currYear + 1;
    }
    return "".concat(resYear !== null && resYear !== void 0 ? resYear : currYear, " . ").concat(currMoth);
};
/**
 * 선택된 달이 며칠까지 있는지 알려주는 함수
 * @param year : 선택된 년도
 * @param month : 선택된 달
 * @returns 선택된 달의 일수
 */
export var getDaysInMonth = function (year, month) {
    return new Date(Number(year), Number(month), 0).getDate();
};
/**
 * 해당달의 시작 요일을 구하는 함수
 * @param year : 선택된 년도
 * @param month : 선택된 달
 * @returns : 시작되는 요일
 */
export var getFirstDayOfMonth = function (year, month) {
    var date = new Date(Number(year), Number(month) - 1, 1);
    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[date.getDay()];
};
