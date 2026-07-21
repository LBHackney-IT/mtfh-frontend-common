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
exports.CommentListItem = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("@mtfh/common/lib/utils");
require("./comment-list-item.scss");
const getCategoryLabel = (categoryCode, categories) => {
    const category = categories.find((cat) => cat.code === categoryCode);
    return category === null || category === void 0 ? void 0 : category.value;
};
const CommentListItem = ({ comment: { categorisation, createdAt, title, description, author, highlight }, categories, }) => {
    const createdAtDate = (0, react_1.useMemo)(() => (0, utils_1.formatDate)(createdAt), [createdAt]);
    const createdAtTime = (0, react_1.useMemo)(() => (0, utils_1.formatTime)(createdAt), [createdAt]);
    return (react_1.default.createElement("div", { className: "comment" },
        react_1.default.createElement("div", { className: "comment__item" },
            react_1.default.createElement("div", { className: "comment__date-time" }, createdAtDate),
            react_1.default.createElement("div", { className: "comment__date-time" }, createdAtTime)),
        react_1.default.createElement("div", { className: "comment__item --center" },
            title && (react_1.default.createElement("div", { className: (0, classnames_1.default)("comment__title", { "--highlight": highlight }) }, title)),
            (categorisation === null || categorisation === void 0 ? void 0 : categorisation.category) && (react_1.default.createElement("div", { className: "comment__category" }, getCategoryLabel(categorisation.category, categories))),
            description),
        react_1.default.createElement("div", { className: "comment__item" }, author.fullName)));
};
exports.CommentListItem = CommentListItem;
