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
exports.FormGroup = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
const text_area_1 = require("../text-area");
require("./styles.scss");
exports.FormGroup = (0, react_1.forwardRef)(function FormGroup({ as: FormGroupComp = "div", id, name, label, hint, error, required, children, className, override, ...props }, ref) {
    const formGroupClasses = (0, classnames_1.default)("govuk-form-group", {
        "govuk-form-group--error": !!error,
    }, "lbh-form-group", (0, utils_1.widthOverrides)(override), className);
    const describedBy = (0, react_1.useMemo)(() => {
        const classes = [];
        if (hint) {
            classes.push(`${id}-hint`);
        }
        if (error) {
            classes.push(`${id}-error`);
        }
        return classes.join(" ");
    }, [id, hint, error]);
    const LabelComp = typeof FormGroupComp === "string" && FormGroupComp === "fieldset"
        ? "legend"
        : "label";
    const formGroup = (react_1.default.createElement(FormGroupComp, { ref: ref, id: id, className: formGroupClasses, ...props },
        react_1.default.createElement(LabelComp, { className: "govuk-label lbh-label", htmlFor: `${id}-field` },
            label,
            required ? react_1.default.createElement("sup", { "aria-hidden": "true" }, "*") : ""),
        !!hint && (react_1.default.createElement("span", { id: `${id}-hint`, className: "govuk-hint lbh-hint" }, hint)),
        !!error && (react_1.default.createElement("span", { id: `${id}-error`, className: "govuk-error-message lbh-error-message" },
            react_1.default.createElement("span", { className: "govuk-visually-hidden" }, "Error:"),
            " ",
            error)),
        !!children &&
            react_1.Children.only((0, react_1.cloneElement)(children, {
                id: `${id}-field`,
                name,
                required,
                error: !!error,
                "aria-describedby": describedBy || undefined,
                ...children.props,
            }))));
    return (0, react_1.isValidElement)(children) && children.type === text_area_1.TextArea ? (react_1.default.createElement("div", { className: "govuk-character-count" }, formGroup)) : (formGroup);
});
