/** @format */
import React from 'react';
import { Typography } from 'hw-packages';

interface CheckedDateProp {
	currDate: string;
}

export default function CheckedDate(props: CheckedDateProp) {
	return <Typography typo='subheading1'>{props.currDate}</Typography>;
}
