"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToString =
  exports.stringToDate =
  exports.isFutureDate =
  exports.formatTime =
  exports.formatDate =
    void 0;
exports.parseDate = parseDate;
const date_fns_1 = require("date-fns");
const voidDate = new Date("1900-01-01T00:00:00");
function parseDate(date) {
  if (!date) {
    return null;
  }
  const parsedDate = (0, date_fns_1.parseISO)(date);
  return !(0, date_fns_1.isSameDay)(parsedDate, voidDate) &&
    (0, date_fns_1.isValid)(parsedDate)
    ? parsedDate
    : null;
}
const formatDate = (date) => {
  const parsedDate = parseDate(date);
  if (!parsedDate) {
    return "";
  }
  return (0, date_fns_1.format)(parsedDate, "dd/MM/yyyy");
};
exports.formatDate = formatDate;
const formatTime = (date) => {
  const parsedDate = parseDate(date);
  if (!parsedDate) {
    return "";
  }
  return (0, date_fns_1.format)(parsedDate, "HH:mm:ss");
};
exports.formatTime = formatTime;
const isFutureDate = (date) => {
  const parsedDate = parseDate(date);
  if (!parsedDate) {
    return true;
  }
  return (0, date_fns_1.isFuture)(parsedDate);
};
exports.isFutureDate = isFutureDate;
const stringToDate = (dateStr, formatStr) => {
  return (0, date_fns_1.parse)(dateStr, formatStr, voidDate);
};
exports.stringToDate = stringToDate;
const dateToString = (date, formatStr) => {
  return (0, date_fns_1.format)(date, formatStr);
};
exports.dateToString = dateToString;
