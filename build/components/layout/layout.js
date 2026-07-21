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
exports.Layout = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./styles.scss");
exports.Layout = (0, react_1.forwardRef)(function Layout({ children, top, backLink, side, className, sidePosition = "left", ...props }, ref) {
    return (react_1.default.createElement("div", { ref: ref, className: (0, classnames_1.default)("mtfh-layout", { "mtfh-layout--narrow": !side, "mtfh-layout--right": sidePosition === "right" }, className), ...props },
        backLink,
        react_1.default.createElement("div", { id: "content" }),
        top,
        react_1.default.createElement("div", { className: "mtfh-layout__container" },
            side ? react_1.default.createElement("div", { className: "mtfh-layout__aside" }, side) : null,
            react_1.default.createElement("div", { className: "mtfh-layout__main" }, children))));
});
