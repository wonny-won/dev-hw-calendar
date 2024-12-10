import { jsx as _jsx } from "react/jsx-runtime";
/** @format */
import HWCalendar from './calendar';
import { RecoilRoot } from 'recoil';
// export { default as Calendar } from './calendar';
export default function Calendar() {
    return (_jsx(RecoilRoot, { children: _jsx(HWCalendar, {}) }));
}
