/** @format */
import { atom } from 'recoil';
import { convertDateFromFn } from './util';
export var checkedDate = atom({
    key: 'checkedDate',
    default: convertDateFromFn(new Date()),
});
