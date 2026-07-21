"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checklist = void 0;
const react_1 = __importDefault(require("react"));
require("./styles.scss");
const CrossIcon = () => {
  return react_1.default.createElement(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    react_1.default.createElement("path", {
      d: "M5 5L23 23M23 5L5 23",
      stroke: "inherit",
      strokeWidth: "6",
      strokeLinecap: "square",
    }),
  );
};
const TickIcon = () => {
  return react_1.default.createElement(
    "svg",
    {
      width: "31",
      height: "24",
      viewBox: "0 0 31 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    react_1.default.createElement("path", {
      d: "M26 5L12 19L5 12",
      stroke: "inherit",
      strokeWidth: "6",
      strokeLinecap: "square",
    }),
  );
};
const Checklist = ({ items }) => {
  return react_1.default.createElement(
    "ul",
    { className: "mtfh-checklist" },
    items.map((item, index) =>
      react_1.default.createElement(
        "li",
        { key: index },
        react_1.default.createElement(
          "span",
          { className: `mtfh-checklist__${item.success ? "tick" : "cross"}-icon` },
          item.success
            ? react_1.default.createElement(TickIcon, null)
            : react_1.default.createElement(CrossIcon, null),
        ),
        item.label,
      ),
    ),
  );
};
exports.Checklist = Checklist;
