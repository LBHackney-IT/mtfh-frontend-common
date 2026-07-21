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
exports.Button = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
require("./styles.scss");
const AddIcon = () => {
  return react_1.default.createElement(
    "svg",
    { width: "12", height: "12", viewBox: "0 0 12 12" },
    react_1.default.createElement("path", { d: "M6.94 0L5 0V12H6.94V0Z" }),
    react_1.default.createElement("path", { d: "M12 5H0V7H12V5Z" }),
  );
};
const ChevronIcon = () => {
  return react_1.default.createElement(
    "svg",
    {
      width: "20",
      height: "22",
      viewBox: "0 0 20 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    react_1.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 0H8.54573L20 10H11.4543L0 0Z",
      fill: "white",
    }),
    react_1.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 22L8.54573 22L20 10H11.4543L0 22Z",
      fill: "#96CCAE",
    }),
  );
};
exports.Button = (0, react_1.forwardRef)(function Button(
  {
    as: ButtonComp = "button",
    variant = "primary",
    isLoading = false,
    loadingText,
    isDisabled,
    children,
    className,
    override,
    ...props
  },
  ref,
) {
  const buttonClasses = (0, classnames_1.default)(
    "govuk-button",
    "lbh-button",
    {
      "govuk-button--primary lbh-button--add": variant === "add",
      "lbh-button--chevron": variant === "chevron",
      "govuk-button--secondary lbh-button--secondary": variant === "secondary",
      "lbh-button--disabled govuk-button--disabled": isDisabled,
    },
    (0, utils_1.widthOverrides)(override),
    className,
  );
  const disabled = isDisabled || isLoading || undefined;
  return react_1.default.createElement(
    ButtonComp,
    {
      ref: ref,
      className: buttonClasses,
      type: ButtonComp === "button" ? "button" : undefined,
      disabled: ButtonComp === "button" ? disabled : undefined,
      "aria-disabled": disabled,
      ...props,
    },
    variant === "add" && !isLoading && react_1.default.createElement(AddIcon, null),
    isLoading &&
      react_1.default.createElement(
        "span",
        { className: "button-loading-indicator" },
        react_1.default.createElement("span", null, "Loading..."),
      ),
    isLoading && loadingText ? loadingText : children,
    variant === "chevron" && react_1.default.createElement(ChevronIcon, null),
  );
});
