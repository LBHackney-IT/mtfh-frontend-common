"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnderAge = void 0;
const date_fns_1 = require("date-fns");
const date_format_1 = require("./date-format");
const isUnderAge = (dob, age) => {
  const isValidDate = (0, date_format_1.parseDate)(dob);
  if (!isValidDate) {
    return true;
  }
  const ageInYears = (0, date_fns_1.differenceInYears)(new Date(), isValidDate);
  return ageInYears < age;
};
exports.isUnderAge = isUnderAge;
