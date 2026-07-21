"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormErrorSummary = void 0;
const react_1 = __importDefault(require("react"));
const locale_1 = __importDefault(require("../../locale"));
const error_summary_1 = require("./error-summary");
const { error } = locale_1.default.components.formErrorSummary;
const FormErrorSummary = ({ id, prefix, errors, title = error, ...props }) => {
    return (react_1.default.createElement(error_summary_1.ErrorSummary, { id: id, title: title, ...props },
        react_1.default.createElement("ul", { className: "govuk-list govuk-error-summary__list" }, Object.keys(errors)
            .filter((key) => errors[key])
            .map((key) => {
            return (react_1.default.createElement("li", { key: key },
                react_1.default.createElement("a", { href: `#${prefix}-${key}` }, errors[key])));
        }))));
};
exports.FormErrorSummary = FormErrorSummary;
