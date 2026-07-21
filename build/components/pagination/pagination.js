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
exports.PaginationButton =
  exports.PaginationSummary =
  exports.PaginationControls =
  exports.Pagination =
    void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./styles.scss");
exports.Pagination = (0, react_1.forwardRef)(function Pagination(
  { className, variant = "base", ...props },
  ref,
) {
  return react_1.default.createElement("nav", {
    ref: ref,
    className: (0, classnames_1.default)(
      "lbh-pagination",
      { "lbh-pagination--center": variant === "center" },
      className,
    ),
    ...props,
  });
});
exports.PaginationControls = (0, react_1.forwardRef)(function PaginationControls(
  { className, children, ...props },
  ref,
) {
  return react_1.default.createElement(
    "ul",
    {
      ref: ref,
      className: (0, classnames_1.default)("lbh-pagination__list", className),
      ...props,
    },
    react_1.Children.map(
      children,
      (child) =>
        child &&
        react_1.default.createElement("li", { className: "lbh-pagination__item" }, child),
    ),
  );
});
exports.PaginationSummary = (0, react_1.forwardRef)(function PaginationSummary(
  { className, ...props },
  ref,
) {
  return react_1.default.createElement("div", {
    ref: ref,
    className: (0, classnames_1.default)("lbh-pagination__summary", className),
    ...props,
  });
});
exports.PaginationButton = (0, react_1.forwardRef)(function PaginationButton(
  {
    as: PaginationComp = "a",
    variant = "base",
    active = false,
    className,
    children,
    ...props
  },
  ref,
) {
  return react_1.default.createElement(
    PaginationComp,
    {
      ref: ref,
      className: (0, classnames_1.default)(
        "lbh-pagination__link",
        {
          "lbh-pagination__link--next": variant === "next",
          "lbh-pagination__link--current": variant === "base" && active,
        },
        className,
      ),
      rel: variant !== "base" ? variant : undefined,
      ...props,
    },
    variant === "previous"
      ? react_1.default.createElement(
          "span",
          { "aria-hidden": "true", role: "presentation" },
          "\u00AB",
          " ",
        )
      : null,
    children,
    variant === "next"
      ? react_1.default.createElement(
          "span",
          { "aria-hidden": "true", role: "presentation" },
          " ",
          "\u00BB",
        )
      : null,
  );
});
