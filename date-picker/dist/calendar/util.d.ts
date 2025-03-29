/**
 * 날짜 데이터 폼 변환 함수
 *
 * @format
 * @param date : 폼 변환 할 날짜
 * @returns 'yy . MM'
 */
export declare const convertDateFromFn: (date: Date) => string;
/**
 * 이전, 다음 달 버튼 클릭시 데이터 바꿔주는 함수
 *
 * @param currDate : 선택된 날짜 ?? 현재 날짜
 * @param isPrev : 이전 달 버튼 클릭 여부
 * @returns 'YYYY . MM'
 */
export declare const getChangedMonth: (currDate: string, isPrev: boolean) => string;
/**
 * 이전, 다음 년도 버튼 클릭시 데이터 바꿔주는 함수
 *
 * @param currDate : 선택된 날짜 ?? 현재 날짜
 * @param isPrev : 이전 년도 버튼 선택 여부
 * @returns 'YYYY.MM'
 */
export declare const getChangedYear: (currDate: string, isPrev: boolean) => string;
/**
 * 선택된 달이 며칠까지 있는지 알려주는 함수
 * @param year : 선택된 년도
 * @param month : 선택된 달
 * @returns 선택된 달의 일수
 */
export declare const getDaysInMonth: (year: string, month: string) => number;
/**
 * 해당달의 시작 요일을 구하는 함수
 * @param year : 선택된 년도
 * @param month : 선택된 달
 * @returns : 시작되는 요일
 */
export declare const getFirstDayOfMonth: (year: string, month: string) => string;
//# sourceMappingURL=util.d.ts.map