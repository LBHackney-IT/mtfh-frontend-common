"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDetailsAddressTypes =
  exports.ContactDetailsPhoneTypes =
  exports.ContactInformationContactTypes =
  exports.ContactDetailTargetTypes =
    void 0;
var ContactDetailTargetTypes;
(function (ContactDetailTargetTypes) {
  ContactDetailTargetTypes["PERSON"] = "person";
  ContactDetailTargetTypes["ORGANISATION"] = "organisation";
})(
  ContactDetailTargetTypes ||
    (exports.ContactDetailTargetTypes = ContactDetailTargetTypes = {}),
);
var ContactInformationContactTypes;
(function (ContactInformationContactTypes) {
  ContactInformationContactTypes["PHONE"] = "phone";
  ContactInformationContactTypes["EMAIL"] = "email";
  ContactInformationContactTypes["ADDRESS"] = "address";
})(
  ContactInformationContactTypes ||
    (exports.ContactInformationContactTypes = ContactInformationContactTypes = {}),
);
var ContactDetailsPhoneTypes;
(function (ContactDetailsPhoneTypes) {
  ContactDetailsPhoneTypes["MAIN_NUMBER"] = "mainNumber";
  ContactDetailsPhoneTypes["EMERGENCY_CONTACT"] = "emergencyContact";
  ContactDetailsPhoneTypes["CARER"] = "carer";
  ContactDetailsPhoneTypes["WIFE"] = "wife";
  ContactDetailsPhoneTypes["HUSBAND"] = "husband";
  ContactDetailsPhoneTypes["SPOUSE"] = "spouse";
  ContactDetailsPhoneTypes["CHILD"] = "child";
  ContactDetailsPhoneTypes["SIBLING"] = "sibling";
  ContactDetailsPhoneTypes["RELATIVE"] = "relative";
  ContactDetailsPhoneTypes["NEIGHBOUR"] = "neighbour";
  ContactDetailsPhoneTypes["DOCTOR"] = "doctor";
  ContactDetailsPhoneTypes["SOCIAL_WORKER"] = "socialWorker";
  ContactDetailsPhoneTypes["OTHER"] = "other";
})(
  ContactDetailsPhoneTypes ||
    (exports.ContactDetailsPhoneTypes = ContactDetailsPhoneTypes = {}),
);
var ContactDetailsAddressTypes;
(function (ContactDetailsAddressTypes) {
  ContactDetailsAddressTypes["CORRESPONDENCE_ADDRESS"] = "correspondenceAddress";
})(
  ContactDetailsAddressTypes ||
    (exports.ContactDetailsAddressTypes = ContactDetailsAddressTypes = {}),
);
