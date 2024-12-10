/** @format */
import { ReactNode } from 'react';
interface BtnCompProps {
    btnText?: string | number;
    children?: ReactNode;
    onClickFn?: (e?: any) => boolean | void;
    isBody?: boolean;
    style?: {};
}
declare const CalendarBtn: (props: BtnCompProps) => import("react/jsx-runtime").JSX.Element;
export default CalendarBtn;
