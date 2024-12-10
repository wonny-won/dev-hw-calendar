import { jsx as _jsx } from "react/jsx-runtime";
import { useRecoilState } from 'recoil';
import * as S from '../../../commons/commonStyle';
import { checkedDate } from '../../../commons/recoilAtom';
export default function CheckedDate() {
    var currDate = useRecoilState(checkedDate)[0];
    return _jsx(S.T1, { children: currDate });
}
