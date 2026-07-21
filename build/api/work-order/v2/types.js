"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPAIR_FILTER_LIST = exports.WorkOrdersFilters = void 0;
var WorkOrdersFilters;
(function (WorkOrdersFilters) {
  WorkOrdersFilters["CANCELLED"] = "Cancelled";
  WorkOrdersFilters["COMPLETED"] = "Completed";
  WorkOrdersFilters["IN_PROGRESS"] = "InProgress";
  WorkOrdersFilters["LOCKED"] = "Locked";
  WorkOrdersFilters["ON_HOLD"] = "OnHold";
})(WorkOrdersFilters || (exports.WorkOrdersFilters = WorkOrdersFilters = {}));
exports.REPAIR_FILTER_LIST = [
  { code: WorkOrdersFilters.CANCELLED, value: "cancelled" },
  { code: WorkOrdersFilters.COMPLETED, value: "completed" },
  { code: WorkOrdersFilters.IN_PROGRESS, value: "in progress" },
  { code: WorkOrdersFilters.LOCKED, value: "locked" },
  { code: WorkOrdersFilters.ON_HOLD, value: "on hold" },
];
