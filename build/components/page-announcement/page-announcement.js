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
exports.PageAnnouncement = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const context_1 = require("./context");
require("./styles.scss");
exports.PageAnnouncement = (0, react_1.forwardRef)(function PageAnnouncement({ className, ...props }, ref) {
    var _a;
    const context = (0, react_1.useContext)(context_1.PageAnnouncementContext);
    if (!((_a = context === null || context === void 0 ? void 0 : context.state) === null || _a === void 0 ? void 0 : _a.heading) && !props.heading) {
        return null;
    }
    const { heading, description, variant = "success", ...rest } = {
        ...context === null || context === void 0 ? void 0 : context.state,
        ...props,
    };
    return (react_1.default.createElement("section", { ref: ref, className: (0, classnames_1.default)("lbh-page-announcement", {
            [`lbh-page-announcement--${variant}`]: variant && variant !== "success",
        }, className), ...rest, role: "alert" },
        react_1.default.createElement("h3", { className: "lbh-page-announcement__title" }, heading),
        !!description && (react_1.default.createElement("div", { className: "lbh-page-announcement__content" }, description))));
});
