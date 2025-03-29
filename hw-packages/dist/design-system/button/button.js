/** @format */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from '@emotion/styled';
import { button } from './semanticBtn';
var Button = function (_a) {
    var children = _a.children, size = _a.size, color = _a.color, selected = _a.selected, props = __rest(_a, ["children", "size", "color", "selected"]);
    return (React.createElement(ButtonWrapper, __assign({ "$size": size, "$color": color, "$selected": selected }, props), children));
};
var ButtonWrapper = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: transparent;\n\tpadding: ", ";\n\tcolor: ", ";\n\tborder: ", ";\n\tbackground: ", ";\n\tborder-radius: ", ";\n\t&:hover {\n\t\tbackground-color: ", ";\n\t\tcursor: pointer;\n\t\tcolor: ", ";\n\t}\n"], ["\n\tbackground-color: transparent;\n\tpadding: ", ";\n\tcolor: ", ";\n\tborder: ", ";\n\tbackground: ", ";\n\tborder-radius: ", ";\n\t&:hover {\n\t\tbackground-color: ", ";\n\t\tcursor: pointer;\n\t\tcolor: ", ";\n\t}\n"])), function (props) { return button.padding[props.$size] || button.padding['medium']; }, function (props) { return button.color.contained.enabled[props.$color] || button.color.contained.enabled['primary']; }, function (props) { return button.border.contained.enabled[props.$color] || button.border.contained.enabled['primary']; }, function (props) {
    return button.background.contained.enabled[props.$color] || button.background.contained.enabled['primary'];
}, function (props) { return button.borderRadius[props.$size] || button.borderRadius['medium']; }, function (props) {
    return button.background.contained.hovered[props.$color] || button.background.contained.hovered['primary'];
}, function (props) { return button.color.contained.hovered[props.$color] || button.color.contained.hovered['primary']; });
export default Button;
var templateObject_1;
