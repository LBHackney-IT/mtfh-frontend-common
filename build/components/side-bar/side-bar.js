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
exports.SideBar = exports.SideBarSection = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const hooks_1 = require("../../hooks");
const accordion_1 = require("../accordion");
const heading_1 = require("../heading");
require("./styles.scss");
exports.SideBarSection = (0, react_1.forwardRef)(function SideBarSection(
  { children, heading, className, isCollapsed = false, ...props },
  ref,
) {
  if (isCollapsed) {
    return react_1.default.createElement(
      accordion_1.AccordionItem,
      { ref: ref, ...props },
      children,
    );
  }
  return react_1.default.createElement(
    "div",
    {
      ref: ref,
      className: (0, classnames_1.default)("mtfh-sidebar-section", className),
      ...props,
    },
    heading
      ? react_1.default.createElement(heading_1.Heading, { as: "h2" }, heading)
      : undefined,
    children,
  );
});
exports.SideBar = (0, react_1.forwardRef)(function SideBar(
  { as: SideBarComp = "div", id, top, children, className, ...props },
  ref,
) {
  const isDesktop = (0, hooks_1.useBreakpoint)("md");
  const sidebarClasses = (0, classnames_1.default)("mtfh-sidebar", className);
  return react_1.default.createElement(
    SideBarComp,
    { ref: ref, className: sidebarClasses, ...props },
    top,
    !isDesktop
      ? react_1.default.createElement(
          accordion_1.Accordion,
          { id: id },
          react_1.Children.map(children, (child) =>
            child && (0, react_1.isValidElement)(child)
              ? (0, react_1.cloneElement)(child, {
                  isCollapsed: true,
                })
              : undefined,
          ),
        )
      : react_1.default.createElement("div", { id: id }, children),
  );
});
