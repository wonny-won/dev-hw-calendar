/** @format */

import React, { useState } from 'react';
import Calendar from '../src/lib/calendar';

function App() {
	const [value, setState] = useState();
	return (
		<div className='App'>
			{/* <header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header> */}
			<Calendar onChange={setState} />
			<div>선택한 날짜는 {value} 이에오 </div>
		</div>
	);
}

export default App;
