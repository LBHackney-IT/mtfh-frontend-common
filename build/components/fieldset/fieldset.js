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
exports.Fieldset = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
require("./styles.scss");
exports.Fieldset = (0, react_1.forwardRef)(function Fieldset({ variant = "base", indent = false, error, heading, children, className, override, ...props }, ref) {
    return (react_1.default.createElement("fieldset", { ref: ref, className: (0, classnames_1.default)("govuk-fieldset", "lbh-fieldset", {
            "mtfh-fieldset--indent": indent,
            "mtfh-fieldset--error": !!error,
        }, (0, utils_1.widthOverrides)(override), className), ...props },
        react_1.default.createElement("legend", { className: (0, classnames_1.default)("govuk-fieldset__legend", {
                "govuk-fieldset__legend--s": variant === "small",
                "govuk-fieldset__legend--m": variant === "medium",
                "govuk-fieldset__legend--l": variant === "large",
                "govuk-fieldset__legend--xl": variant === "xlarge",
                "govuk-visually-hidden": variant === "hidden",
            }) },
            typeof heading !== "string"
                ? (0, react_1.isValidElement)(heading) &&
                    (0, react_1.cloneElement)(heading, {
                        className: (0, classnames_1.default)("govuk-fieldset__heading", heading.props.className),
                    })
                : heading,
            error && react_1.default.createElement("div", { className: "govuk-visually-hidden" },
                " ",
                error)),
        react_1.default.createElement("div", { className: (0, classnames_1.default)("mtfh-fieldset__content") },
            error && (react_1.default.createElement("span", { className: "govuk-error-message lbh-error-message", "aria-hidden": "true" }, error)),
            children)));
});
