"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCorrespondenceAddress =
  exports.addPhoneContact =
  exports.addEmailContact =
  exports.patchContactDetails =
  exports.addContactDetail =
  exports.useContactDetails =
    void 0;
const config_1 = require("@mtfh/common/lib/config");
const http_1 = require("@mtfh/common/lib/http");
const utils_1 = require("@mtfh/common/lib/utils");
const types_1 = require("./types");
const useContactDetails = (id, options) =>
  (0, http_1.useAxiosSWR)(
    id && `${config_1.config.contactDetailsApiUrlV2}/contactDetails?targetId=${id}`,
    options,
  );
exports.useContactDetails = useContactDetails;
const addContactDetail = async (id, data) => {
  const response = await http_1.axiosInstance.post(
    `${config_1.config.contactDetailsApiUrlV2}/contactDetails`,
    {
      targetId: id,
      targetType: "person",
      contactInformation: {
        ...data,
        value: (0, utils_1.removeWhitespace)(data.value),
      },
      sourceServiceArea: {
        area: "Housing",
        isDefault: true,
      },
    },
  );
  return response.data;
};
exports.addContactDetail = addContactDetail;
const patchContactDetails = async (contactId, personId, data) => {
  return http_1.axiosInstance.patch(
    `${config_1.config.contactDetailsApiUrlV2}/contactDetails/${contactId}/person/${personId}`,
    {
      contactInformation: data,
    },
  );
};
exports.patchContactDetails = patchContactDetails;
const addEmailContact = async (id, email, description) =>
  (0, exports.addContactDetail)(id, {
    contactType: types_1.ContactInformationContactTypes.EMAIL,
    value: email,
    description,
  });
exports.addEmailContact = addEmailContact;
const addPhoneContact = async (id, phone, type, description) =>
  (0, exports.addContactDetail)(id, {
    contactType: types_1.ContactInformationContactTypes.PHONE,
    value: phone,
    subType: type,
    description,
  });
exports.addPhoneContact = addPhoneContact;
const addCorrespondenceAddress = async ({
  id,
  addressLine1,
  addressLine2 = null,
  addressLine3 = null,
  addressLine4 = null,
  postCode,
  description = null,
  isOverseasAddress = false,
  overseasAddress = null,
}) =>
  (0, exports.addContactDetail)(id, {
    contactType: types_1.ContactInformationContactTypes.ADDRESS,
    value: "",
    subType: types_1.ContactDetailsAddressTypes.CORRESPONDENCE_ADDRESS,
    description,
    addressExtended: {
      uprn: null,
      addressLine1,
      addressLine2,
      addressLine3,
      addressLine4,
      postCode,
      overseasAddress,
      isOverseasAddress,
    },
  });
exports.addCorrespondenceAddress = addCorrespondenceAddress;
