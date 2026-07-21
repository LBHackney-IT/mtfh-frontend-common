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
exports.ErrorSummary = void 0;
const react_1 = __importStar(require("react"));
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const classnames_1 = __importDefault(require("classnames"));
const lbh_frontend_1 = require("lbh-frontend");
const utils_1 = require("../../utils");
require("./styles.scss");
exports.ErrorSummary = (0, react_1.forwardRef)(function ErrorSummary(
  {
    as: ErrorSummaryComp = "div",
    id,
    title,
    description,
    className,
    children,
    reFocus,
    override,
    ...props
  },
  ref,
) {
  const localRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(() => {
    /* istanbul ignore else */
    if (localRef.current) {
      // eslint-disable-next-line no-new
      new lbh_frontend_1.ErrorSummary(localRef.current);
      localRef.current.scrollIntoView(true);
    }
  }, []);
  (0, react_1.useEffect)(() => {
    /* istanbul ignore else */
    if (localRef.current) {
      localRef.current.scrollIntoView(true);
    }
  }, [reFocus]);
  return react_1.default.createElement(
    ErrorSummaryComp,
    {
      ref: (0, react_merge_refs_1.default)([localRef, ref]),
      className: (0, classnames_1.default)(
        "govuk-error-summary",
        "lbh-error-summary",
        (0, utils_1.widthOverrides)(override),
        className,
      ),
      "aria-labelledby": id,
      role: "alert",
      ...props,
    },
    react_1.default.createElement(
      "h2",
      { className: "govuk-error-summary__title", id: id },
      title,
    ),
    description || children
      ? react_1.default.createElement(
          "div",
          { className: "govuk-error-summary__body" },
          description ? react_1.default.createElement("p", null, description) : null,
          children,
        )
      : null,
  );
});
