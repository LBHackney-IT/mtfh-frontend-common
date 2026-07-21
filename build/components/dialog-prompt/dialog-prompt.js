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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogPrompt = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const DialogPrompt = ({ title, body, skipConfirmation, ...props }) => {
    const { path } = (0, react_router_dom_1.useRouteMatch)();
    (0, react_1.useEffect)(() => {
        const handler = (e) => {
            e.returnValue = "";
            return e.returnValue;
        };
        window.addEventListener("beforeunload", handler);
        return () => {
            window.removeEventListener("beforeunload", handler);
        };
    }, []);
    return (react_1.default.createElement(react_router_dom_1.Prompt, { ...props, message: (location, action) => {
            if (skipConfirmation && skipConfirmation(location)) {
                return true;
            }
            return JSON.stringify({
                action,
                path,
                pathname: location.pathname,
                title,
                body: body || "",
            });
        } }));
};
exports.DialogPrompt = DialogPrompt;
