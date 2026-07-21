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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBox = void 0;
const react_1 = __importStar(require("react"));
const box_1 = require("../box");
const heading_1 = require("../heading");
const status_icon_1 = require("../status-icon");
require("./styles.scss");
exports.StatusBox = (0, react_1.forwardRef)(function StatusBox(
  { children, className, title, variant, ...props },
  ref,
) {
  const icon = (0, react_1.useMemo)(() => {
    if (variant === "success") {
      return react_1.default.createElement(status_icon_1.SuccessIcon, null);
    }
    if (variant === "warning") {
      return react_1.default.createElement(status_icon_1.WarningIcon, null);
    }
    return react_1.default.createElement(status_icon_1.DefaultIcon, null);
  }, [variant]);
  return react_1.default.createElement(
    box_1.Box,
    { variant: variant },
    react_1.default.createElement(
      "div",
      { ref: ref, className: "mtfh-status-box", ...props },
      icon,
      react_1.default.createElement(
        "div",
        null,
        react_1.default.createElement(
          "div",
          { className: "mtfh-status-heading__title" },
          react_1.default.createElement(heading_1.Heading, { variant: "h4" }, title),
        ),
        children,
      ),
    ),
  );
});
