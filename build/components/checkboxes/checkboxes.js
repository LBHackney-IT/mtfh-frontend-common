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
exports.CheckboxGroup = exports.CheckboxConditional = exports.Checkbox = void 0;
const react_1 = __importStar(require("react"));
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const classnames_1 = __importDefault(require("classnames"));
const lbh_frontend_1 = require("lbh-frontend");
require("./styles.scss");
exports.Checkbox = (0, react_1.forwardRef)(function Checkbox({ id, className, type = "checkbox", hint, children, conditionalId, error, ...props }, ref) {
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("govuk-checkboxes__item", className) },
        react_1.default.createElement("input", { ref: ref, id: id, className: "govuk-checkboxes__input", type: type, "aria-describedby": hint ? `${id}-hint` : undefined, "data-aria-controls": conditionalId, ...props }),
        react_1.default.createElement("label", { className: "govuk-label govuk-checkboxes__label", htmlFor: id }, children),
        hint ? (react_1.default.createElement("span", { id: `${id}-hint`, className: "govuk-hint govuk-checkboxes__hint lbh-hint" }, hint)) : null));
});
exports.CheckboxConditional = (0, react_1.forwardRef)(function CheckboxConditional(props, ref) {
    return (react_1.default.createElement("div", { ref: ref, className: "govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden", ...props }));
});
exports.CheckboxGroup = (0, react_1.forwardRef)(function CheckboxGroup({ variant = "base", children, error, ...props }, ref) {
    const localRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        /* istanbul ignore else */
        if (localRef.current) {
            new lbh_frontend_1.Checkboxes(localRef.current).init();
        }
    }, []);
    const hasConditionals = (0, react_1.useMemo)(() => react_1.Children.toArray(children).some((child) => (0, react_1.isValidElement)(child) && child.type === exports.CheckboxConditional), [children]);
    return (react_1.default.createElement("div", { ref: (0, react_merge_refs_1.default)([localRef, ref]), className: (0, classnames_1.default)("govuk-checkboxes", {
            "govuk-checkboxes--small": variant === "small",
            "govuk-checkboxes--conditionals": hasConditionals,
        }, "lbh-checkboxes"), ...props }, children));
});
