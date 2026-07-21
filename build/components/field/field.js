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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeField = exports.DateField = exports.InlineField = exports.Field = void 0;
const react_1 = __importStar(require("react"));
const formik_1 = require("formik");
const date_input_1 = require("../date-input");
const form_group_1 = require("../form-group");
const time_input_1 = require("../time-input");
const Field = ({ id, label, children, name, type, ...props }) => {
    const [field, meta] = (0, formik_1.useField)({ name, type, value: children.props.value });
    const comp = type === "checkbox" || type === "radio" ? "fieldset" : "div";
    return (react_1.default.createElement(form_group_1.FormGroup, { as: comp, id: id, label: label, error: meta.error, ...props }, (0, react_1.cloneElement)(children, { ...field })));
};
exports.Field = Field;
const InlineField = ({ children, name, type, ...props }) => {
    const [field, meta] = (0, formik_1.useField)({ name, type, value: children.props.value });
    return (0, react_1.cloneElement)(children, { ...field, ...props, error: meta.error });
};
exports.InlineField = InlineField;
const DateField = ({ dayProps: { name: dayName, ...dayProps }, monthProps: { name: monthName, ...monthProps }, yearProps: { name: yearName, ...yearProps }, dayLabel = "Day", monthLabel = "Month", yearLabel = "Year", fieldError, ...props }) => {
    const [dayField, dayMeta] = (0, formik_1.useField)(dayName);
    const [monthField, monthMeta] = (0, formik_1.useField)(monthName);
    const [yearField, yearMeta] = (0, formik_1.useField)(yearName);
    const error = fieldError || dayMeta.error || monthMeta.error || yearMeta.error;
    return (react_1.default.createElement(form_group_1.FormGroup, { as: "fieldset", error: error, ...props },
        react_1.default.createElement(date_input_1.DateInput, { dayProps: { ...dayField, ...dayProps, error: !!dayMeta.error }, dayLabel: dayLabel, monthProps: {
                ...monthField,
                ...monthProps,
                error: !!monthMeta.error,
            }, monthLabel: monthLabel, yearProps: { ...yearField, ...yearProps, error: !!yearMeta.error }, yearLabel: yearLabel })));
};
exports.DateField = DateField;
const TimeField = ({ hourProps: { name: hourName, ...hourProps }, minuteProps: { name: minuteName, ...minuteProps }, amPmProps: { name: amPmName, ...amPmProps }, hourLabel = "Hour", minuteLabel = "Minute", amPmLabel = "am/pm", ...props }) => {
    const [hourField, hourMeta] = (0, formik_1.useField)(hourName);
    const [minuteField, minuteMeta] = (0, formik_1.useField)(minuteName);
    const [amPmField, amPmMeta] = (0, formik_1.useField)(amPmName);
    const error = hourMeta.error || minuteMeta.error || amPmMeta.error;
    return (react_1.default.createElement(form_group_1.FormGroup, { as: "fieldset", error: error, ...props },
        react_1.default.createElement(time_input_1.TimeInput, { hourProps: { ...hourField, ...hourProps, error: !!hourMeta.error }, hourLabel: hourLabel, minuteProps: {
                ...minuteField,
                ...minuteProps,
                error: !!minuteMeta.error,
            }, minuteLabel: minuteLabel, amPmProps: {
                ...amPmField,
                ...amPmProps,
                error: !!amPmMeta.error,
            }, amPmLabel: amPmLabel })));
};
exports.TimeField = TimeField;
