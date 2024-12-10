/** @format */

import HWCalendar from './calendar';
import { RecoilRoot } from 'recoil';

// export { default as Calendar } from './calendar';
export default function Calendar() {
	return (
		<RecoilRoot>
			<HWCalendar />
		</RecoilRoot>
	);
}
