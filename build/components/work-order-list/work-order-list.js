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
exports.WorkOrderList = exports.WorkOrders = void 0;
const react_1 = __importStar(require("react"));
const v2_1 = require("../../api/work-order/v2");
const config_1 = require("../../config");
const locale_1 = __importDefault(require("../../locale"));
const card_list_1 = require("../card-list");
const center_1 = require("../center");
const error_summary_1 = require("../error-summary");
const form_group_1 = require("../form-group");
const link_1 = require("../link");
const select_1 = require("../select");
const spinner_1 = require("../spinner");
const work_order_list_item_1 = __importDefault(require("./work-order-list-item"));
require("./work-order-list.scss");
const { components } = locale_1.default;
const ExternalLink = ({ assetId }) =>
  react_1.default.createElement(
    link_1.Link,
    {
      href: `${config_1.config.repairsHubAppUrl}/properties/${assetId}`,
      isExternal: true,
      className: "repair-list__link",
    },
    components.workOrderList.seeAllWorkOrders,
  );
const WorkOrders = ({ assetId, statusCode }) => {
  const { data: workOrders, error } = (0, v2_1.useWorkOrders)(assetId, statusCode);
  if (error) {
    return react_1.default.createElement(error_summary_1.ErrorSummary, {
      id: "work-order-list-error",
      title: components.workOrderList.errors.unableToFetchWorkOrder,
      description: components.workOrderList.errors.unableToFetchWorkOrderDescription,
    });
  }
  if (!workOrders) {
    return react_1.default.createElement(
      center_1.Center,
      null,
      react_1.default.createElement(spinner_1.Spinner, null),
    );
  }
  const getStatusLabel = (code) => {
    var _a;
    const label =
      (_a = v2_1.REPAIR_FILTER_LIST.find((item) => item.code === code)) === null ||
      _a === void 0
        ? void 0
        : _a.value;
    return label || code;
  };
  if (!workOrders.length) {
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      react_1.default.createElement(
        "p",
        { className: "repair-list__no-work-orders" },
        `${locale_1.default.components.workOrderList.noRepairs} ${getStatusLabel(
          statusCode,
        )}`,
      ),
      react_1.default.createElement(ExternalLink, { assetId: assetId }),
    );
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      card_list_1.CardList,
      null,
      workOrders.map((workOrder, index) =>
        react_1.default.createElement(work_order_list_item_1.default, {
          key: index,
          workOrder: workOrder,
        }),
      ),
    ),
    react_1.default.createElement(ExternalLink, { assetId: assetId }),
  );
};
exports.WorkOrders = WorkOrders;
const WorkOrderList = ({ assetId }) => {
  const [statusCode, setStatusCode] = (0, react_1.useState)(
    v2_1.WorkOrdersFilters.IN_PROGRESS,
  );
  return react_1.default.createElement(
    "div",
    { className: "work-order-list" },
    react_1.default.createElement(
      form_group_1.FormGroup,
      { id: "filter", label: `${components.workOrderList.selectLabel}:` },
      react_1.default.createElement(
        select_1.Select,
        {
          value: statusCode,
          onChange: (e) => setStatusCode(e.target.value),
          "data-testid": "work-order-list:filter",
        },
        v2_1.REPAIR_FILTER_LIST === null || v2_1.REPAIR_FILTER_LIST === void 0
          ? void 0
          : v2_1.REPAIR_FILTER_LIST.map((filter, index) =>
              react_1.default.createElement(
                "option",
                { key: index, value: filter.code },
                components.workOrderList.selectOptionLabel,
                " ",
                filter.value,
              ),
            ),
      ),
    ),
    react_1.default.createElement(exports.WorkOrders, {
      assetId: assetId,
      statusCode: statusCode,
    }),
  );
};
exports.WorkOrderList = WorkOrderList;
