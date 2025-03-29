/** @format */
import React, { Suspense } from 'react';
import { useState } from 'react';
import * as S from './style';
import CalendarIcon from '../calendar/incons/CalendarIcon';
const Calendar = React.lazy(() => import('../calendar/index'));

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
			<Suspense fallback={<div>Loading...</div>}>{isOpen && <Calendar onChange={setValue} />}</Suspense>
		</S.datePickerWrap>
	);
}
