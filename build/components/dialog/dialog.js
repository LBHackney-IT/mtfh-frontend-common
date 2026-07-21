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
exports.DialogActions = exports.Dialog = void 0;
const react_1 = __importStar(require("react"));
const dialog_1 = require("@reach/dialog");
const classnames_1 = __importDefault(require("classnames"));
require("@reach/dialog/styles.css");
const heading_1 = require("../heading");
require("./styles.scss");
exports.Dialog = (0, react_1.forwardRef)(function Dialog({ isOpen, onDismiss, children, className, title, ...props }, ref) {
    return (react_1.default.createElement(dialog_1.Dialog, { ref: ref, isOpen: isOpen, onDismiss: onDismiss, className: (0, classnames_1.default)("lbh-dialog", className), "aria-label": title, ...props },
        react_1.default.createElement(heading_1.Heading, { as: "h2", variant: "h2", className: "lbh-dialog__title" }, title),
        react_1.default.createElement("button", { type: "button", onClick: onDismiss, className: "lbh-dialog__close" },
            react_1.default.createElement("span", { className: "govuk-visually-hidden" }, "Close"),
            react_1.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 13 13", fill: "none" },
                react_1.default.createElement("path", { d: "M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z", fill: "#0B0C0C" }),
                react_1.default.createElement("path", { d: "M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z", fill: "#0B0C0C" }))),
        children));
});
exports.DialogActions = (0, react_1.forwardRef)(function DialogActions({ className, ...props }, ref) {
    return react_1.default.createElement("div", { ref: ref, className: (0, classnames_1.default)("lbh-dialog__actions", className), ...props });
});
