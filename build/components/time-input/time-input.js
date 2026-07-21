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
exports.TimeInput = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const number_input_1 = require("../number-input");
const select_1 = require("../select");
require("./styles.scss");
exports.TimeInput = (0, react_1.forwardRef)(function TimeInput(
  {
    id = "time-input",
    hourProps,
    minuteProps,
    amPmProps,
    hourLabel = "Hour",
    minuteLabel = "Minute",
    amPmLabel = "AM/PM",
    error,
    required,
    className,
    ...props
  },
  ref,
) {
  return react_1.default.createElement(
    "div",
    {
      ref: ref,
      className: (0, classnames_1.default)(
        "govuk-date-input",
        "lbh-date-input",
        className,
      ),
      ...props,
    },
    react_1.default.createElement(
      "div",
      { className: "govuk-date-input__item" },
      react_1.default.createElement(
        "label",
        { className: "govuk-label lbh-label", htmlFor: `${id}-hour` },
        hourLabel,
      ),
      react_1.default.createElement(number_input_1.NumberInput, {
        className: "govuk-date-input__input govuk-input--width-2",
        name: "hour",
        required: required,
        maxLength: 2,
        min: 0,
        max: 12,
        padStart: 2,
        "aria-label": "Hour",
        ...hourProps,
      }),
    ),
    react_1.default.createElement(
      "div",
      { className: "govuk-date-input__item" },
      react_1.default.createElement(
        "label",
        { className: "govuk-label lbh-label", htmlFor: `${id}-minute` },
        minuteLabel,
      ),
      react_1.default.createElement(number_input_1.NumberInput, {
        className: "govuk-date-input__input govuk-input--width-2",
        name: "minute",
        required: required,
        maxLength: 2,
        min: 0,
        max: 59,
        padStart: 2,
        "aria-label": "Minute",
        ...minuteProps,
      }),
    ),
    react_1.default.createElement(
      "div",
      { className: "govuk-date-input__item" },
      react_1.default.createElement(
        "label",
        { className: "govuk-label lbh-label", htmlFor: `${id}-amPm` },
        amPmLabel,
      ),
      react_1.default.createElement(
        select_1.Select,
        { id: "amPm", name: "amPm", "aria-label": "AM/PM", ...amPmProps },
        react_1.default.createElement(
          "option",
          { value: "" },
          (amPmProps === null || amPmProps === void 0 ? void 0 : amPmProps.placeholder) ||
            "AM/PM",
        ),
        react_1.default.createElement("option", { value: "am" }, "AM"),
        react_1.default.createElement("option", { value: "pm" }, "PM"),
      ),
    ),
  );
});
