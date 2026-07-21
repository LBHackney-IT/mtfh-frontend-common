"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
const react_1 = __importDefault(require("react"));
const locale_1 = __importDefault(require("../../locale"));
const heading_1 = require("../heading");
const Step = ({ stepIndex, children }) =>
  react_1.default.createElement(
    "div",
    { className: "mtfh-stepper__header" },
    react_1.default.createElement(
      heading_1.Heading,
      { as: "h4", variant: "h4", className: "mtfh-stepper__title" },
      react_1.default.createElement(
        "span",
        { className: "mtfh-stepper__circle mtfh-stepper__circle--number" },
        react_1.default.createElement(
          "span",
          { className: "mtfh-stepper__circle-inner" },
          react_1.default.createElement(
            "span",
            { className: "mtfh-stepper__circle-background" },
            react_1.default.createElement(
              "span",
              { className: "govuk-visually-hidden" },
              locale_1.default.components.stepper.step,
            ),
            stepIndex,
          ),
        ),
      ),
      react_1.default.createElement(
        "span",
        null,
        react_1.default.createElement(
          "button",
          { className: "mtfh-stepper__button mtfh-stepper__button--title" },
          react_1.default.createElement("span", null, children),
        ),
      ),
    ),
  );
exports.Step = Step;
