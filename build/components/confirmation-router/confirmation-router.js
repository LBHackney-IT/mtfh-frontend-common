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
exports.ConfirmationRouter = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const confirmation_router_message_1 = require("../confirmation-router-message/confirmation-router-message");
const scroll_to_top_1 = require("../scroll-to-top");
const ConfirmationRouter = ({ children, ...props }) => {
  const [message, setMessage] = (0, react_1.useState)();
  const [isConfirm, setIsConfirm] = (0, react_1.useState)(false);
  const [confirmation, setConfirmation] = (0, react_1.useState)();
  const onConfirmation = (0, react_1.useCallback)(
    (ok) => {
      /* istanbul ignore else: this should be set by the time we call it */
      if (confirmation) {
        confirmation(ok);
      }
      if (
        !ok &&
        (message === null || message === void 0 ? void 0 : message.action) === "POP"
      ) {
        window.history.forward();
      }
      setIsConfirm(false);
    },
    [confirmation, setIsConfirm, message],
  );
  const getUserConfirmation = (payload, callback) => {
    try {
      const incomingMessage = JSON.parse(payload);
      if (
        incomingMessage &&
        !(0, react_router_dom_1.matchPath)(incomingMessage.pathname, {
          path: incomingMessage.path,
          exact: true,
          strict: true,
        })
      ) {
        setIsConfirm(true);
        setConfirmation(() => callback);
        setMessage(incomingMessage);
      }
    } catch (e) {
      setIsConfirm(false);
      setMessage(undefined);
      callback(true);
    }
  };
  return react_1.default.createElement(
    react_router_dom_1.BrowserRouter,
    { getUserConfirmation: getUserConfirmation, ...props },
    react_1.default.createElement(scroll_to_top_1.ScrollToTop, null),
    children,
    react_1.default.createElement(
      confirmation_router_message_1.ConfirmationRouterMessage,
      { message: message, onConfirmation: onConfirmation, isConfirm: isConfirm },
    ),
  );
};
exports.ConfirmationRouter = ConfirmationRouter;
