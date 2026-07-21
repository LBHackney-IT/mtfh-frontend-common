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
exports.TextArea = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
require("./styles.scss");
const getLengthOfValue = (initialValue) => {
    if (typeof initialValue === "string") {
        return initialValue.length;
    }
    if (Array.isArray(initialValue)) {
        return initialValue.join(",").length;
    }
    return String(initialValue || "").length;
};
exports.TextArea = (0, react_1.forwardRef)(function TextArea({ maxLength, error, className, onChange, override, ...props }, ref) {
    const { value, defaultValue } = props;
    const isControlled = value !== undefined;
    const initialValue = value || defaultValue;
    const [characterCount, setCharacterCount] = (0, react_1.useState)(getLengthOfValue(initialValue));
    const onChangeHandler = (0, react_1.useCallback)((event) => {
        var _a;
        if (((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.value) !== undefined &&
            !isControlled &&
            maxLength !== undefined) {
            setCharacterCount(String(event.currentTarget.value).length);
        }
        if (typeof onChange === "function") {
            onChange(event);
        }
    }, [onChange, maxLength, isControlled]);
    const exceedingValue = (0, react_1.useMemo)(() => maxLength !== undefined &&
        maxLength - (isControlled ? getLengthOfValue(value) : characterCount), [maxLength, characterCount, value, isControlled]);
    const textareaClasses = (0, classnames_1.default)("govuk-textarea", "lbh-textarea", { "govuk-textarea--error": error }, "lbh-character-count", (0, utils_1.widthOverrides)(override), className);
    const messageClasses = (0, classnames_1.default)({ "govuk-hint": exceedingValue !== false && exceedingValue >= 0 }, "govuk-character-count__message", {
        "govuk-error-message": exceedingValue !== false && exceedingValue < 0,
    }, (0, utils_1.widthOverrides)(override));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("textarea", { ref: ref, className: textareaClasses, onChange: onChangeHandler, ...props }),
        maxLength !== undefined && exceedingValue !== false && (react_1.default.createElement("span", { className: messageClasses, "aria-live": "polite" }, exceedingValue >= 0
            ? `You have ${exceedingValue} ${(0, utils_1.pluralize)("character", exceedingValue)} remaining`
            : `You have ${Math.abs(exceedingValue)} ${(0, utils_1.pluralize)("character", exceedingValue)} too many`))));
});
