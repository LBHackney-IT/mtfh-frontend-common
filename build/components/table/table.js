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
exports.TableCaption = exports.Td = exports.Th = exports.Tr = exports.Tbody = exports.Thead = exports.Table = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./styles.scss");
exports.Table = (0, react_1.forwardRef)(function Thead({ className, ...props }, ref) {
    return (react_1.default.createElement("table", { ref: ref, className: (0, classnames_1.default)("govuk-table", "lbh-table", className), ...props }));
});
exports.Thead = (0, react_1.forwardRef)(function Thead({ className, ...props }, ref) {
    return react_1.default.createElement("thead", { ref: ref, className: (0, classnames_1.default)("govuk-table__head", className), ...props });
});
exports.Tbody = (0, react_1.forwardRef)(function Tbody({ className, ...props }, ref) {
    return react_1.default.createElement("tbody", { ref: ref, className: (0, classnames_1.default)("govuk-table__body", className), ...props });
});
exports.Tr = (0, react_1.forwardRef)(function Tr({ className, ...props }, ref) {
    return react_1.default.createElement("tr", { ref: ref, className: (0, classnames_1.default)("govuk-table__row", className), ...props });
});
exports.Th = (0, react_1.forwardRef)(function Th({ className, isNumeric, ...props }, ref) {
    const thClasses = (0, classnames_1.default)("govuk-table__cell", "govuk-table__header", {
        "govuk-table__cell--numeric": isNumeric,
    }, className);
    return react_1.default.createElement("th", { ref: ref, className: thClasses, ...props });
});
exports.Td = (0, react_1.forwardRef)(function Td({ className, isNumeric, ...props }, ref) {
    const tdClasses = (0, classnames_1.default)("govuk-table__cell", {
        "govuk-table__cell--numeric": isNumeric,
    }, className);
    return react_1.default.createElement("td", { ref: ref, className: tdClasses, ...props });
});
exports.TableCaption = (0, react_1.forwardRef)(function TableCaption({ children, className, variant, ...props }, ref) {
    const captionClasses = (0, classnames_1.default)("govuk-table__caption", "lbh-table__caption", {
        "govuk-table__caption--s": variant === "small",
        "govuk-table__caption--m": variant === "medium",
        "govuk-table__caption--l": variant === "large",
        "govuk-table__caption--xl": variant === "xlarge",
    }, className);
    return (react_1.default.createElement("caption", { ref: ref, className: captionClasses, ...props }, children));
});
