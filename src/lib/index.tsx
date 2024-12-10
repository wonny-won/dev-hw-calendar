/** @format */

import { RecoilRoot } from 'recoil';
import HWCalendar from './calendar';

// export { default as Calendar } from './calendar';
export default function Calendar() {
	return (
		<RecoilRoot>
			<HWCalendar />
		</RecoilRoot>
	);
}
