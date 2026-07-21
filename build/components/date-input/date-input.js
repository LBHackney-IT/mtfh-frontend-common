"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const number_input_1 = require("../number-input");
require("./styles.scss");
exports.DateInput = (0, react_1.forwardRef)(function DateInput({ id = "date-input", dayProps, monthProps, yearProps, dayLabel = "Day", monthLabel = "Month", yearLabel = "Year", error, required, className, ...props }, ref) {
    return (react_1.default.createElement("div", { ref: ref, className: (0, classnames_1.default)("govuk-date-input", "lbh-date-input", className), ...props },
        react_1.default.createElement("div", { className: "govuk-date-input__item" },
            react_1.default.createElement("label", { className: "govuk-label lbh-label", htmlFor: `${id}-day` }, dayLabel),
            react_1.default.createElement(number_input_1.NumberInput, { className: "govuk-date-input__input govuk-input--width-2", name: "day", required: required, maxLength: 2, min: 1, max: 31, padStart: 2, "aria-label": "Day", ...dayProps })),
        react_1.default.createElement("div", { className: "govuk-date-input__item" },
            react_1.default.createElement("label", { className: "govuk-label lbh-label", htmlFor: `${id}-month` }, monthLabel),
            react_1.default.createElement(number_input_1.NumberInput, { className: "govuk-date-input__input govuk-input--width-2", name: "month", required: required, maxLength: 2, min: 1, max: 12, padStart: 2, "aria-label": "Month", ...monthProps })),
        react_1.default.createElement("div", { className: "govuk-date-input__item" },
            react_1.default.createElement("label", { className: "govuk-label lbh-label", htmlFor: `${id}-year` }, yearLabel),
            react_1.default.createElement(number_input_1.NumberInput, { className: "govuk-input govuk-date-input__input govuk-input--width-4", name: "year", required: required, maxLength: 4, padStart: 4, "aria-label": "Year", ...yearProps }))));
});
