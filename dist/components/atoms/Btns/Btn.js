import { jsx as _jsx } from "react/jsx-runtime";
import * as S from './style';
var CalendarBtn = function (props) {
    return (_jsx(S.CommonBtn, { style: props.style, onClick: props.onClickFn, isBody: props.isBody, children: props.btnText || props.children }));
};
export default CalendarBtn;
