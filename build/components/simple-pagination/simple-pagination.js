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
exports.SimplePaginationButton = exports.SimplePagination = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./styles.scss");
exports.SimplePagination = (0, react_1.forwardRef)(function SimplePagination(
  { className, ...props },
  ref,
) {
  return react_1.default.createElement("nav", {
    ref: ref,
    className: (0, classnames_1.default)("lbh-simple-pagination", className),
    ...props,
  });
});
exports.SimplePaginationButton = (0, react_1.forwardRef)(function SimplePaginationButton(
  { as: SimplePaginationComp = "a", variant, className, title, children, ...props },
  ref,
) {
  return react_1.default.createElement(
    SimplePaginationComp,
    {
      ref: ref,
      className: (0, classnames_1.default)(
        "lbh-simple-pagination__link",
        { "lbh-simple-pagination__link--next": variant === "next" },
        className,
      ),
      rel: variant,
      ...props,
    },
    variant === "previous"
      ? react_1.default.createElement(
          "svg",
          { width: "11", height: "19", viewBox: "0 0 11 19", fill: "none" },
          react_1.default.createElement("path", {
            d: "M10 1L2 9.5L10 18",
            strokeWidth: "2",
          }),
        )
      : null,
    children,
    title
      ? react_1.default.createElement(
          "span",
          { className: "lbh-simple-pagination__title" },
          title,
        )
      : null,
    variant === "next"
      ? react_1.default.createElement(
          "svg",
          { width: "11", height: "19", viewBox: "0 0 11 19", fill: "none" },
          react_1.default.createElement("path", {
            d: "M1 18L9 9.5L1 1",
            strokeWidth: "2",
          }),
        )
      : null,
  );
});
