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
exports.Details = void 0;
const react_1 = __importStar(require("react"));
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const classnames_1 = __importDefault(require("classnames"));
const lbh_frontend_1 = require("lbh-frontend");
require("./styles.scss");
exports.Details = (0, react_1.forwardRef)(function Details({ title, children, className }, ref) {
    const localRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (localRef.current) {
            new lbh_frontend_1.Details(localRef.current).init();
        }
    }, []);
    const classes = {
        "govuk-details lbh-details": true,
    };
    return (react_1.default.createElement("details", { id: "mtfh-details", "data-testid": "mtfh-details", className: (0, classnames_1.default)(classes, className), "data-module": "govuk-details", ref: (0, react_merge_refs_1.default)([localRef, ref]) },
        react_1.default.createElement("summary", { className: "govuk-details__summary" },
            react_1.default.createElement("span", { className: "govuk-details__summary-text" }, title)),
        react_1.default.createElement("div", { className: "govuk-details__text" }, children)));
});
