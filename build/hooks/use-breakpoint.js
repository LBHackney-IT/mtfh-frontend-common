"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakpointValue =
  exports.useBreakpoint =
  exports.queries =
  exports.BREAKPOINTS =
    void 0;
const use_breakpoint_1 = __importDefault(require("use-breakpoint"));
exports.BREAKPOINTS = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
  "2xl": 1536,
};
exports.queries = {
  base: "(min-width: 0px) and (max-width: 479px)",
  sm: "(min-width: 480px) and (max-width: 767px)",
  md: "(min-width: 768px) and (max-width: 991px)",
  lg: "(min-width: 992px) and (max-width: 1279px)",
  xl: "(min-width: 1280px) and (max-width: 1535px)",
  "2xl": "(min-width: 1536px)",
};
const breakpoints = new Map(Object.entries(exports.BREAKPOINTS));
const useBreakpoint = (breakpoint, defaultBreakpoint) => {
  const { minWidth } = (0, use_breakpoint_1.default)(
    exports.BREAKPOINTS,
    defaultBreakpoint,
  );
  const point = breakpoints.get(breakpoint);
  if (point !== undefined) {
    return minWidth >= point;
  }
  return undefined;
};
exports.useBreakpoint = useBreakpoint;
const useBreakpointValue = (breakpointRecord, defaultBreakpoint) => {
  const { minWidth, breakpoint } = (0, use_breakpoint_1.default)(
    exports.BREAKPOINTS,
    defaultBreakpoint,
  );
  const valueKeys = Object.keys(breakpointRecord);
  const index = valueKeys.indexOf(breakpoint);
  if (index !== -1) {
    return breakpointRecord[`${breakpoint}`];
  }
  let maxPointMatch = 0;
  let keyMatch = null;
  for (let i = 0; i < valueKeys.length; i += 1) {
    const key = valueKeys[Number(i)];
    const point = breakpoints.get(key);
    if (point !== undefined && minWidth >= point && maxPointMatch <= point) {
      maxPointMatch = point;
      keyMatch = key;
    }
  }
  if (keyMatch) {
    return breakpointRecord[`${keyMatch}`];
  }
  return undefined;
};
exports.useBreakpointValue = useBreakpointValue;
