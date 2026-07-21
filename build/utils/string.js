"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize =
  exports.removeWhitespaceAndCapitalise =
  exports.removeWhitespace =
    void 0;
const removeWhitespace = (value) => {
  if (value === null || value === undefined) {
    return null;
  }
  return value.replace(/\s/g, "");
};
exports.removeWhitespace = removeWhitespace;
const removeWhitespaceAndCapitalise = (value) => {
  if (value === null || value === undefined) {
    return null;
  }
  return (0, exports.removeWhitespace)(value.toUpperCase());
};
exports.removeWhitespaceAndCapitalise = removeWhitespaceAndCapitalise;
const pluralize = (word, value) => `${word}${Math.abs(value) !== 1 ? "s" : ""}`;
exports.pluralize = pluralize;
