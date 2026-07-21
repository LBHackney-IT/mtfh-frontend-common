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
exports.NumberInput = void 0;
const react_1 = __importStar(require("react"));
const input_1 = require("../input");
exports.NumberInput = (0, react_1.forwardRef)(function NumberInput(
  { onChange, onBlur, min, max, value, defaultValue, maxLength, padStart = 0, ...props },
  ref,
) {
  var _a;
  const parser = (0, react_1.useCallback)(
    (num) => {
      let numString = String(num).replace(/[^\d]+/g, "");
      if (maxLength !== undefined && maxLength < numString.length) {
        numString = numString.slice(0, maxLength);
      }
      return numString;
    },
    [maxLength],
  );
  const formatter = (0, react_1.useCallback)(
    (num) => {
      if (num === "") {
        return "";
      }
      let numInt = parseInt(String(num), 10);
      if (max !== undefined && numInt > max) {
        numInt = max;
      }
      if (min !== undefined && numInt < min) {
        numInt = min;
      }
      return String(numInt).padStart(padStart, "0");
    },
    [min, max, padStart],
  );
  const [output, setOutput] = (0, react_1.useState)(
    parser(
      (_a = defaultValue !== null && defaultValue !== void 0 ? defaultValue : value) !==
        null && _a !== void 0
        ? _a
        : "",
    ),
  );
  const outputInt = (0, react_1.useMemo)(() => {
    const target = parseInt(output, 10);
    return !Number.isNaN(target) ? target : undefined;
  }, [output]);
  return react_1.default.createElement(input_1.Input, {
    ref: ref,
    role: "spinbutton",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": outputInt,
    "aria-valuetext": output || undefined,
    value: output,
    onChange: (e) => {
      const update = parser(e.target.value);
      e.target.value = update;
      e.currentTarget.value = update;
      setOutput(update);
      if (onChange) {
        onChange(e);
      }
    },
    onBlur: (e) => {
      const update = formatter(e.target.value);
      e.target.value = update;
      e.currentTarget.value = update;
      setOutput(update);
      if (onChange) {
        onChange(e);
      }
      if (onBlur) {
        onBlur(e);
      }
    },
    ...props,
  });
});
