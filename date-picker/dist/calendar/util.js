/**
 * 날짜 데이터 폼 변환 함수
 *
 * @format
 * @param date : 폼 변환 할 날짜
 * @returns 'yy . MM'
 */
export const convertDateFromFn = (date) => {
    const converDate = new Date(date);
    const year = converDate.getFullYear();
    const month = String(converDate.getMonth() + 1).padStart(2, '0');
    return `${year} . ${month} `;
};
/**
 * 이전, 다음 달 버튼 클릭시 데이터 바꿔주는 함수
 *
 * @param currDate : 선택된 날짜 ?? 현재 날짜
 * @param isPrev : 이전 달 버튼 클릭 여부
 * @returns 'YYYY . MM'
 */
export const getChangedMonth = (currDate, isPrev) => {
    const currYear = Number(currDate.split('.')[0]);
    const currMoth = Number(currDate.split('.')[1]);
    let resYear;
    let resMoth;
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
    return `${resYear ?? currYear} . ${isPrev ? resMoth ?? 12 : resMoth ?? 1}`;
};
/**
 * 이전, 다음 년도 버튼 클릭시 데이터 바꿔주는 함수
 *
 * @param currDate : 선택된 날짜 ?? 현재 날짜
 * @param isPrev : 이전 년도 버튼 선택 여부
 * @returns 'YYYY.MM'
 */
export const getChangedYear = (currDate, isPrev) => {
    const currYear = Number(currDate.split('.')[0]);
    const currMoth = Number(currDate.split('.')[1]);
    let resYear;
    if (isPrev) {
        resYear = currYear - 1;
    }
    else {
        resYear = currYear + 1;
    }
    return `${resYear ?? currYear} . ${currMoth}`;
};
/**
 * 선택된 달이 며칠까지 있는지 알려주는 함수
 * @param year : 선택된 년도
 * @param month : 선택된 달
 * @returns 선택된 달의 일수
 */
export const getDaysInMonth = (year, month) => {
    return new Date(Number(year), Number(month), 0).getDate();
};
/**
 * 해당달의 시작 요일을 구하는 함수
 * @param year : 선택된 년도
 * @param month : 선택된 달
 * @returns : 시작되는 요일
 */
export const getFirstDayOfMonth = (year, month) => {
    const date = new Date(Number(year), Number(month) - 1, 1);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[date.getDay()];
};
