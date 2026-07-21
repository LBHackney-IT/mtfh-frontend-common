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
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("@mtfh/common/lib/utils");
const config_1 = require("../../config");
const locale_1 = __importDefault(require("../../locale"));
const card_1 = require("../card");
const link_1 = require("../link");
const link_box_1 = require("../link-box");
require("./work-order-list-item.scss");
const DESCRIPTION_LENGTH = 50;
const WorkOrderListItem = ({
  workOrder: { dateRaised, priority, tradeDescription, status, description, reference },
}) => {
  const { components } = locale_1.default;
  const dateRaisedAt = (0, react_1.useMemo)(
    () => (0, utils_1.formatDate)(dateRaised),
    [dateRaised],
  );
  const rows = [
    { value: dateRaisedAt, label: components.workOrderList.raisedAt },
    { value: priority, label: components.workOrderList.priority },
  ];
  return react_1.default.createElement(
    link_box_1.LinkBox,
    null,
    react_1.default.createElement(
      card_1.Card,
      null,
      react_1.default.createElement(
        link_box_1.LinkOverlay,
        null,
        react_1.default.createElement(
          link_1.Link,
          {
            className: "lbh-link",
            isExternal: true,
            href: `${config_1.config.repairsHubAppUrl}/work-orders/${reference}`,
          },
          react_1.default.createElement(
            "span",
            {
              className: (0, classnames_1.default)({
                "work-order-list-item__trim": description.length > DESCRIPTION_LENGTH,
              }),
            },
            tradeDescription,
            ": ",
            description.substring(0, DESCRIPTION_LENGTH),
          ),
        ),
      ),
      react_1.default.createElement(card_1.CardRows, { rows: rows }),
      react_1.default.createElement(card_1.CardBreak, null),
      react_1.default.createElement(
        "div",
        { className: "work-order-list-item__status" },
        " ",
        status,
      ),
    ),
  );
};
exports.default = WorkOrderListItem;
