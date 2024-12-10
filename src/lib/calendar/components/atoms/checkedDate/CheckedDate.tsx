/** @format */
import React from 'react';
import * as S from '../../../commons/commonStyle';

interface CheckedDateProp {
	currDate: string;
}

export default function CheckedDate(props: CheckedDateProp) {
	return <S.T1>{props.currDate}</S.T1>;
}
