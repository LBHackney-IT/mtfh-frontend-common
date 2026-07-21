"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentificationTypes =
  exports.PersonCommunincationRequirements =
  exports.PersonGender =
  exports.PersonTitle =
    void 0;
var PersonTitle;
(function (PersonTitle) {
  PersonTitle["MR"] = "Mr";
  PersonTitle["MX"] = "Mx";
  PersonTitle["MRS"] = "Mrs";
  PersonTitle["MISS"] = "Miss";
  PersonTitle["MS"] = "Ms";
  PersonTitle["DR"] = "Dr";
  PersonTitle["MASTER"] = "Master";
  PersonTitle["RABBI"] = "Rabbi";
  PersonTitle["REVEREND"] = "Reverend";
  PersonTitle["OTHER"] = "Other";
})(PersonTitle || (exports.PersonTitle = PersonTitle = {}));
var PersonGender;
(function (PersonGender) {
  PersonGender["M"] = "M";
  PersonGender["F"] = "F";
  PersonGender["O"] = "O";
})(PersonGender || (exports.PersonGender = PersonGender = {}));
var PersonCommunincationRequirements;
(function (PersonCommunincationRequirements) {
  PersonCommunincationRequirements["SIGN_LANGUAGE"] = "SignLanguage";
  PersonCommunincationRequirements["INTERPRETER_REQUIRED"] = "InterpreterRequired";
})(
  PersonCommunincationRequirements ||
    (exports.PersonCommunincationRequirements = PersonCommunincationRequirements = {}),
);
var IdentificationTypes;
(function (IdentificationTypes) {
  IdentificationTypes["PASSPORT"] = "Passport";
  IdentificationTypes["DRIVING_LICENCE"] = "DrivingLicence";
  IdentificationTypes["NI"] = "NI";
})(IdentificationTypes || (exports.IdentificationTypes = IdentificationTypes = {}));
