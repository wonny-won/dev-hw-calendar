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
export declare const getDaysInMonth: (year: string, month: string) => number;
