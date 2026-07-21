"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortTenuresByActive = void 0;
const date_fns_1 = require("date-fns");
const sortTenuresByActive = (tenures) => {
  return tenures.sort((a, b) => {
    if (a.isActive && !b.isActive) {
      return -1;
    }
    if (!a.isActive && b.isActive) {
      return 1;
    }
    if (a.type === "Secure" && b.type !== "Secure") {
      return -1;
    }
    if (a.type !== "Secure" && b.type === "Secure") {
      return 1;
    }
    if (a.startDate === b.startDate) {
      return 0;
    }
    return (0, date_fns_1.isAfter)(
      (0, date_fns_1.parseISO)(a.startDate),
      (0, date_fns_1.parseISO)(b.startDate),
    )
      ? -1
      : 1;
  });
};
exports.sortTenuresByActive = sortTenuresByActive;
