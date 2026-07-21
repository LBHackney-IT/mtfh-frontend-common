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
exports.Spinner = void 0;
const react_1 = __importStar(require("react"));
const icon_1 = require("../icon");
exports.Spinner = (0, react_1.forwardRef)(function Spinner({ size = "50", label = "Loading...", ...props }, ref) {
    return (react_1.default.createElement(icon_1.Icon, { ref: ref, viewBox: "0 0 42 42", stroke: "#00703c", size: size, ...props },
        react_1.default.createElement("title", null, label),
        react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("g", { transform: "translate(3 3)", strokeWidth: "5" },
                react_1.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: "18" }),
                react_1.default.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18", transform: "rotate(112.708 18 18)" },
                    react_1.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" }))))));
});
