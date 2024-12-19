/** @format */
import React from 'react';
import { useState } from 'react';
import Calendar from '../calendar/index';
import * as S from './style';
import CalendarIcon from '../components/atoms/incons/CalendarIcon';

interface DatepickerProp {
	inputSize?: string;
	showIcon?: boolean;
}

export default function DatePicker(props: DatepickerProp) {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState();

	return (
		<S.datePickerWrap>
			<S.Input style={{ width: props.inputSize ? `${props.inputSize}px` : '200px' }}>
				{props.showIcon && <CalendarIcon />}
				<input
					style={{ border: 'none' }}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					value={value}
				/>
			</S.Input>
			{isOpen && <Calendar onChange={setValue} />}
		</S.datePickerWrap>
	);
}
