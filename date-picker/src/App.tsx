/** @format */

import React, { useState } from 'react';
import Calendar from '../src/lib/calendar';
import DatePicker from '../src/lib/datepicker';
import { Typography, Button } from 'hw-packages';
function App() {
	const [value, setState] = useState();
	return (
		<div className='App'>
			<Calendar onChange={setState} />
			<div>선택한 날짜는 {value} 이에오 </div>
			<DatePicker />
			<Typography $typo='heading1' $color='pink'>
				Hello World
			</Typography>
			<Button size='medium' color='primary' selected={true} å>
				Click me
			</Button>
		</div>
	);
}
//
export default App;
