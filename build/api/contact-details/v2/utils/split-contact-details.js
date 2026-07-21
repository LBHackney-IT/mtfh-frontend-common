"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitContactDetailsByType = void 0;
const types_1 = require("../types");
const splitContactDetailsByType = (contacts) => {
    const emails = [];
    const phones = [];
    const addresses = [];
    for (const contact of contacts) {
        const { contactInformation: { contactType }, } = contact;
        if (contactType === types_1.ContactInformationContactTypes.EMAIL) {
            emails.push(contact);
        }
        if (contactType === types_1.ContactInformationContactTypes.PHONE) {
            phones.push(contact);
        }
        if (contactType === types_1.ContactInformationContactTypes.ADDRESS) {
            addresses.push(contact);
        }
    }
    return { emails, phones, addresses };
};
exports.splitContactDetailsByType = splitContactDetailsByType;
