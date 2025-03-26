/** @format */

import { CSSProperties } from 'react';
import _get from 'lodash/get';

export type Typo =
	| 'hero1'
	| 'hero2'
	| 'heading1'
	| 'heading2'
	| 'heading3'
	| 'heading4'
	| 'subheading1'
	| 'subheading2'
	| 'subheading3'
	| 'body1'
	| 'body2'
	| 'link1'
	| 'link2'
	| 'caption'
	| 'label'
	| 'tiny1'
	| 'tiny2';

const family = [
	'Pretendard Variable',
	'Pretendard',
	'-apple-system',
	'BlinkMacSystemFont',
	'system-ui',
	'Roboto',
	'Helvetica Neue',
	'Segoe UI',
	'Apple SD Gothic Neo',
	'Noto Sans KR',
	'Malgun Gothic',
	'Apple Color Emoji',
	'Segoe UI Emoji',
	'Segoe UI Symbol',
	'sans-serif',
].join(', ');

export type Sizes = keyof typeof size;

const size = {
	xxs: '10px',
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
	'2xl': '24px',
	'3xl': '32px',
	'4xl': '48px',
	'5xl': '64px',
} as const;

const lineHeight = {
	xxs: '14px',
	xs: '18px',
	sm: '22px',
	md: '24px',
	lg: '28px',
	xl: '30px',
	'2xl': '36px',
	'3xl': '48px',
	'4xl': '64px',
	'5xl': '80px',
} as const;

const weight = {
	regular: 400,
	semibold: 600,
	bold: 700,
	extrabold: 800,
} as const;

export const font = {
	family,
	size,
	lineHeight,
	weight,
};

const createTypo = (
	size: string,
	weight: number,
	lineHeight: string,
	fontFamily: string = family,
	style: CSSProperties['fontStyle'] = 'normal'
) => {
	const fontVariant = 'normal';
	const fontSize = `${size}/${lineHeight ?? '1'}`;
	return [style, fontVariant, weight, fontSize, fontFamily].join(' ');
};

export const typo: Record<Typo, string> = {
	hero1: createTypo(size['5xl'], weight.extrabold, lineHeight['5xl']),
	hero2: createTypo(size['4xl'], weight.extrabold, lineHeight['4xl']),
	heading1: createTypo(size['3xl'], weight.bold, lineHeight['3xl']),
	heading2: createTypo(size['2xl'], weight.bold, lineHeight['2xl']),
	heading3: createTypo(size['xl'], weight.bold, lineHeight['xl']),
	heading4: createTypo(size['lg'], weight.bold, lineHeight['lg']),
	subheading1: createTypo(size['md'], weight.semibold, lineHeight['md']),
	subheading2: createTypo(size['sm'], weight.semibold, lineHeight['sm']),
	subheading3: createTypo(size['xs'], weight.semibold, lineHeight['xs']),
	body1: createTypo(size['md'], weight.regular, lineHeight['md']),
	body2: createTypo(size['sm'], weight.regular, lineHeight['sm']),
	link1: createTypo(size['md'], weight.regular, lineHeight['md']),
	link2: createTypo(size['sm'], weight.regular, lineHeight['sm']),
	caption: createTypo(size['xs'], weight.regular, lineHeight['xs']),
	label: createTypo(size['xs'], weight.semibold, lineHeight['xs']),
	tiny1: createTypo(size['xxs'], weight.regular, lineHeight['xxs']),
	tiny2: createTypo(size['xxs'], weight.semibold, lineHeight['xxs']),
};
