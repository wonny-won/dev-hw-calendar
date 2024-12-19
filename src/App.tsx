/** @format */

import React, { useState } from 'react';
import Calendar from '../src/lib/calendar';
import DatePicker from '../src/lib/datepicker';

function App() {
	const [value, setState] = useState();
	return (
		<div className='App'>
			<Calendar onChange={setState} />
			<div>선택한 날짜는 {value} 이에오 </div>

			<DatePicker />
		</div>
	);
}

export default App;
