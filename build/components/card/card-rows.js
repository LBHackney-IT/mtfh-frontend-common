"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRows = void 0;
const react_1 = __importDefault(require("react"));
const summary_list_1 = require("../summary-list");
require("./styles.scss");
const CardRows = ({ rows }) => {
    return (react_1.default.createElement(summary_list_1.SummaryList, { variant: "inline" }, rows.map((row, index) => (react_1.default.createElement(summary_list_1.SummaryListItem, { key: index, title: `${row.label}:` }, row.value)))));
};
exports.CardRows = CardRows;
