"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictErrorSummary = void 0;
const react_1 = __importDefault(require("react"));
const locale_1 = __importDefault(require("../../locale"));
const summary_list_1 = require("../summary-list");
const error_summary_1 = require("./error-summary");
const { changesNotSaved, anotherUserMadeEdit, youEntered, toSaveMakeEdit } =
  locale_1.default.components.conflictErrorSummary;
const ConflictErrorSummary = ({
  updatedFields,
  fieldLocale,
  fieldTransforms,
  title = changesNotSaved,
  description = anotherUserMadeEdit,
  footNote = toSaveMakeEdit,
  ...props
}) => {
  const keys = Object.keys(updatedFields || {});
  return react_1.default.createElement(
    error_summary_1.ErrorSummary,
    {
      className: "mtfh-change-conflict",
      title: title,
      description: description,
      ...props,
    },
    keys.length > 0 &&
      updatedFields &&
      react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement("p", null, youEntered),
        react_1.default.createElement(
          summary_list_1.SummaryList,
          { variant: "inline" },
          Object.keys(updatedFields).map((key) =>
            react_1.default.createElement(
              summary_list_1.SummaryListItem,
              { key: key, title: `${fieldLocale[key] || key}:` },
              fieldTransforms && fieldTransforms[key]
                ? fieldTransforms[key](updatedFields[key])
                : `${updatedFields[key]}`,
            ),
          ),
        ),
        footNote && react_1.default.createElement("p", null, footNote),
      ),
  );
};
exports.ConflictErrorSummary = ConflictErrorSummary;
