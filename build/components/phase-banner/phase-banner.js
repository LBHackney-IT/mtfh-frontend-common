"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseBanner = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./phase-banner.styles.scss");
const PhaseBanner = ({ tag, children, variant = "grey", }) => {
    const lbhTagColor = `lbh-tag--${variant}`;
    return (react_1.default.createElement("div", { className: "container-max-width lbh-phase-banner" },
        react_1.default.createElement("p", { className: "govuk-phase-banner__content" },
            react_1.default.createElement("strong", { className: (0, classnames_1.default)(`${lbhTagColor}`, "govuk-phase-banner__content__tag govuk-tag lbh-tag") }, tag),
            react_1.default.createElement("span", { className: "govuk-phase-banner__text" }, children))));
};
exports.PhaseBanner = PhaseBanner;
