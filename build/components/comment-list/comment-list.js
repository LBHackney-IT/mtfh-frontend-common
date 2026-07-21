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
exports.CommentList = void 0;
const react_1 = __importStar(require("react"));
const v2_1 = require("@mtfh/common/lib/api/comments/v2");
const v1_1 = require("@mtfh/common/lib/api/reference-data/v1");
const locale_1 = __importDefault(require("../../locale"));
const center_1 = require("../center");
const error_summary_1 = require("../error-summary");
const simple_pagination_1 = require("../simple-pagination");
const spinner_1 = require("../spinner");
const text_1 = require("../text");
const comment_list_item_1 = require("./comment-list-item");
const NoComments = () => {
    return react_1.default.createElement(text_1.Text, { size: "sm" }, locale_1.default.components.commentList.noCommentsAdded);
};
const CommentList = ({ targetId }) => {
    var _a;
    const { data, size, setSize, error } = (0, v2_1.useComments)(targetId);
    const { components } = locale_1.default;
    const { data: referenceData, error: referenceError } = (0, v1_1.useReferenceData)({
        category: "comment",
        subCategory: "category",
    });
    const response = (0, react_1.useMemo)(() => {
        if (!data) {
            return null;
        }
        return data[size - 1];
    }, [data, size]);
    if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
        return react_1.default.createElement(NoComments, null);
    }
    if (referenceError) {
        return (react_1.default.createElement(error_summary_1.ErrorSummary, { id: "comment-list-error", title: components.commentList.errors.unableToFetchReferenceData, description: components.commentList.errors.unableToFetchReferenceDataDescription }));
    }
    if (!response || !referenceData) {
        return (react_1.default.createElement(center_1.Center, null,
            react_1.default.createElement(spinner_1.Spinner, null)));
    }
    const { results: comments, paginationDetails: { nextToken }, } = response;
    return (react_1.default.createElement("div", null,
        comments.map((comment) => (react_1.default.createElement(comment_list_item_1.CommentListItem, { categories: referenceData.category, key: comment.id, comment: comment }))),
        (size > 1 || nextToken) && (react_1.default.createElement(simple_pagination_1.SimplePagination, null,
            size !== 1 && (react_1.default.createElement(simple_pagination_1.SimplePaginationButton, { variant: "previous", onClick: () => setSize(size - 1) }, "Previous")),
            nextToken && (react_1.default.createElement(simple_pagination_1.SimplePaginationButton, { variant: "next", onClick: () => setSize(size + 1) }, "Next"))))));
};
exports.CommentList = CommentList;
