const config = {
  appEnv: process.env.APP_ENV || "test",
  configurationApiUrlV1: process.env.CONFIGURATION_API_URL_V1 || "",
  contactDetailsApiUrlV1: process.env.CONTACT_DETAILS_API_URL_V1 || "/api/v1",
  contactDetailsApiUrlV2: process.env.CONTACT_DETAILS_API_URL_V2 || "/api/v2",
  cautionaryApiUrlV1: process.env.CAUTIONARY_API_URL_V1 || "/api/v1",
  personApiUrlV1: process.env.PERSON_API_URL_V1 || "/api/v1",
  personApiUrlV2: process.env.PERSON_API_URL_V2 || "/api/v2",
  notesApiUrlV1: process.env.NOTES_API_URL_V1 || "/api/v1",
  notesApiUrlV2: process.env.NOTES_API_URL_V2 || "/api/v2",
  tenureApiUrlV1: process.env.TENURE_API_URL_V1 || "/api/v1",
  assetApiUrlV1: process.env.PROPERTY_API_URL_V1 || "/api/v1",
  referenceDataApiUrlV1: process.env.REFERENCE_DATA_API_URL_V1 || "/api/v1",
  addressApiUrlV1: process.env.ADDRESS_API_URL_V1 || "/api/v1",
  addressApiUrlV2: process.env.ADDRESS_API_URL_V2 || "/api/v2",
  equalityInformationApiUrlV1: process.env.EQUALITY_INFORMATION_API_URL_V1 || "/api/v1",
  repairsHubAppUrl: process.env.REPAIRS_HUB_APP_URL || "/api/v1",
  repairsHubApiUrl: process.env.REPAIRS_HUB_API_URL || "/api/v1",
  processApiUrlV1: process.env.PROCESS_API_URL_V1 || "/api/v1",
  processApiUrlV2: process.env.PROCESS_API_URL_V2 || "/api/v2",
};

export default config;
