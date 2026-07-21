"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
const react_1 = __importDefault(require("react"));
require("./styles.scss");
const CardList = ({ children }) => {
  return react_1.default.createElement("div", { className: "mtfh-card-list" }, children);
};
exports.CardList = CardList;
