/** @format */
import React from 'react';
import { ReactNode } from 'react';
interface BtnCompProps {
    btnText?: string | number | null;
    children?: ReactNode;
    onClickFn?: (e?: any) => boolean | void;
    isBody?: boolean;
    style?: {};
}
declare const CalendarBtn: (props: BtnCompProps) => React.JSX.Element;
export default CalendarBtn;
//# sourceMappingURL=Btn.d.ts.map