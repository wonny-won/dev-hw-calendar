/** @format */
import React from 'react';
import { Typography } from 'hw-packages';
export default function CheckedDate(props) {
    return React.createElement(Typography, { typo: 'subheading1' }, props.currDate);
}
