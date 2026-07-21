"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryList = exports.SummaryListItem = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
require("./styles.scss");
exports.SummaryListItem = (0, react_1.forwardRef)(function SummaryListItem(
  { title, actions, children, className, fallback, overrides = [], ...props },
  ref,
) {
  const value = (0, react_1.useMemo)(
    () => (typeof children === "string" ? children.trim() : children),
    [children],
  );
  return react_1.default.createElement(
    "div",
    {
      ref: ref,
      className: (0, classnames_1.default)("govuk-summary-list__row", className),
      ...props,
    },
    react_1.default.createElement(
      "dt",
      {
        className: (0, classnames_1.default)(
          "govuk-summary-list__key",
          (0, utils_1.widthOverrides)(overrides[0]),
        ),
      },
      title,
    ),
    react_1.default.createElement(
      "dd",
      {
        className: (0, classnames_1.default)(
          "govuk-summary-list__value",
          (0, utils_1.widthOverrides)(overrides[1]),
        ),
      },
      value || fallback || "N/A",
    ),
    actions &&
      react_1.default.createElement(
        "dd",
        {
          className: (0, classnames_1.default)(
            "govuk-summary-list__actions",
            (0, utils_1.widthOverrides)(overrides[2]),
          ),
        },
        react_1.default.createElement(
          "ul",
          { className: "govuk-summary-list__actions-list" },
          react_1.Children.map(actions, (action) =>
            react_1.default.createElement(
              "li",
              { key: action.key, className: "govuk-summary-list__actions-list-item" },
              action,
            ),
          ),
        ),
      ),
  );
});
exports.SummaryList = (0, react_1.forwardRef)(function SummaryList(
  { variant = "base", className, overrides, children, ...props },
  ref,
) {
  return react_1.default.createElement(
    "dl",
    {
      ref: ref,
      className: (0, classnames_1.default)(
        "govuk-summary-list",
        { "govuk-summary-list--no-border": variant !== "border" },
        { "mtfh-summary-list--inline": variant === "inline" },
        "lbh-summary-list",
        className,
      ),
      ...props,
    },
    react_1.Children.map(
      children,
      (child, index) =>
        child &&
        (0, react_1.isValidElement)(child) &&
        (0, react_1.cloneElement)(child, {
          overrides:
            !child.props.overrides && index === 0 ? overrides : child.props.overrides,
        }),
    ),
  );
});
