"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationRouterMessage = void 0;
const react_1 = __importDefault(require("react"));
const button_1 = require("../button");
const dialog_1 = require("../dialog");
const link_1 = require("../link");
const ConfirmationRouterMessage = ({ message, onConfirmation, isConfirm }) => {
  if (!message) {
    return null;
  }
  return react_1.default.createElement(
    dialog_1.Dialog,
    { isOpen: isConfirm, title: message.title, onDismiss: () => onConfirmation(false) },
    (message === null || message === void 0 ? void 0 : message.body) &&
      react_1.default.createElement("p", null, message.body),
    react_1.default.createElement(
      dialog_1.DialogActions,
      null,
      react_1.default.createElement(
        button_1.Button,
        { onClick: () => onConfirmation(true) },
        "Yes",
      ),
      react_1.default.createElement(
        link_1.Link,
        { as: "button", onClick: () => onConfirmation(false) },
        "Cancel",
      ),
    ),
  );
};
exports.ConfirmationRouterMessage = ConfirmationRouterMessage;
