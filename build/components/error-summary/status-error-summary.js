"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusErrorSummary = void 0;
const react_1 = __importDefault(require("react"));
const locale_1 = __importDefault(require("../../locale"));
const error_summary_1 = require("./error-summary");
const { statusTitle, statusDescription } = locale_1.default.components.statusErrorSummary;
const StatusErrorSummary = ({
  id,
  code,
  title = statusTitle(code),
  description = statusDescription(code),
  ...props
}) => {
  return react_1.default.createElement(error_summary_1.ErrorSummary, {
    id: id,
    title: title,
    description: description,
    ...props,
  });
};
exports.StatusErrorSummary = StatusErrorSummary;
