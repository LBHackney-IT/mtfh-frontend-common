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
exports.Stepper = void 0;
const react_1 = __importStar(require("react"));
require("./styles.scss");
const classnames_1 = __importDefault(require("classnames"));
const heading_1 = require("../heading");
const Stepper = ({ activeStep = 0, title, children, startIndex, ...props }) => {
  return react_1.default.createElement(
    "div",
    { ...props },
    title &&
      react_1.default.createElement(
        heading_1.Heading,
        { as: "h3", variant: "h3", className: "mtfh-stepper__main-title" },
        title,
      ),
    react_1.default.createElement(
      "div",
      { className: "mtfh-stepper mtfh-stepper--large mtfh-stepper--active" },
      react_1.default.createElement(
        "ol",
        { className: "mtfh-stepper" },
        react_1.Children.map(
          children,
          (child, stepIndex) =>
            child &&
            (0, react_1.isValidElement)(child) &&
            react_1.default.createElement(
              "li",
              {
                className: (0, classnames_1.default)("mtfh-stepper__step", {
                  "mtfh-stepper__step--active": stepIndex === activeStep,
                }),
              },
              (0, react_1.cloneElement)(child, {
                ...child.props,
                stepIndex:
                  startIndex && startIndex > 0
                    ? startIndex + stepIndex + 1
                    : stepIndex + 1,
              }),
            ),
        ),
      ),
    ),
  );
};
exports.Stepper = Stepper;
