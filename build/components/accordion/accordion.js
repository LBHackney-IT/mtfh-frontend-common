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
exports.Accordion = exports.AccordionItem = void 0;
const react_1 = __importStar(require("react"));
const react_merge_refs_1 = __importDefault(require("react-merge-refs"));
const classnames_1 = __importDefault(require("classnames"));
const lbh_frontend_1 = require("lbh-frontend");
const utils_1 = require("../../utils");
const heading_1 = require("../heading");
require("./styles.scss");
exports.AccordionItem = (0, react_1.forwardRef)(function AccordionItem(
  { as: AccordionItemComp = "div", children, className, id, title },
  ref,
) {
  return react_1.default.createElement(
    AccordionItemComp,
    {
      ref: ref,
      className: (0, classnames_1.default)("govuk-accordion__section", className),
    },
    react_1.default.createElement(
      "div",
      { className: "govuk-accordion__section-header" },
      react_1.default.createElement(
        heading_1.Heading,
        { as: "h3", variant: "h5", className: "govuk-accordion__section-heading" },
        react_1.default.createElement(
          "span",
          { className: "govuk-accordion__section-button", id: `accordion-heading-${id}` },
          title,
        ),
      ),
    ),
    react_1.default.createElement(
      "div",
      {
        id: `accordion-content-${id}`,
        className: "govuk-accordion__section-content",
        "aria-labelledby": `accordion-heading-${id}`,
      },
      children,
    ),
  );
});
exports.Accordion = (0, react_1.forwardRef)(function Accordion(
  {
    as: AccordionComp = "div",
    className,
    defaultIndex,
    override,
    visuallyHideControls = false,
    ...props
  },
  ref,
) {
  const localRef = (0, react_1.useRef)(null);
  const defaultIndexRef = (0, react_1.useRef)(defaultIndex);
  (0, react_1.useEffect)(() => {
    /* istanbul ignore else */
    if (localRef.current) {
      const acc = new lbh_frontend_1.Accordion(localRef.current);
      acc.init();
      /* istanbul ignore else */
      if (defaultIndexRef.current !== undefined) {
        const section = acc.$sections.item(defaultIndexRef.current);
        /* istanbul ignore else */
        if (section) {
          const button = section.querySelector(`.${acc.sectionButtonClass}`);
          /* istanbul ignore else */
          if (button) {
            const contentId = button.getAttribute("aria-controls");
            /* istanbul ignore else */
            if (contentId && !window.sessionStorage.getItem(contentId)) {
              acc.setExpanded(true, acc.$sections.item(defaultIndexRef.current));
            }
          }
        }
      }
    }
  }, []);
  return react_1.default.createElement(AccordionComp, {
    className: (0, classnames_1.default)(
      "govuk-accordion",
      "lbh-accordion",
      { "lbh-accordion--hide-controls": visuallyHideControls },
      (0, utils_1.widthOverrides)(override),
      className,
    ),
    "data-attribute": "value",
    ref: (0, react_merge_refs_1.default)([localRef, ref]),
    ...props,
  });
});
