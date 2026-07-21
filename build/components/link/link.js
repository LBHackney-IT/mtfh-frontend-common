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
exports.Link = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
require("./styles.scss");
exports.Link = (0, react_1.forwardRef)(function Link({ as: LinkComp = "a", variant = "link", isExternal = false, className, rel, target, override, ...props }, ref) {
    const linkClasses = (0, classnames_1.default)(variant !== "native" && {
        "govuk-link lbh-link": variant !== "back-link",
        "govuk-back-link lbh-back-link": variant === "back-link",
        [`lbh-link--${variant}`]: variant !== "link" && variant !== "back-link",
        "lbh-link--no-visited-state": !isExternal,
    }, (0, utils_1.widthOverrides)(override), className);
    return (
    // eslint-disable-next-line react/jsx-no-target-blank
    react_1.default.createElement(LinkComp, { ref: ref, className: linkClasses, rel: isExternal ? "noopener noreferrer" : rel, target: isExternal ? "_blank" : target, ...props }));
});
