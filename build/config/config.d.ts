export interface CognitoClientIds {
    mtfhClientId: string;
    e2eTestsClientId?: string;
}
declare const config: {
    appEnv: string;
    authAllowedGroups: string[];
    authDomain: string;
    cookieDomain: string;
    authToken: string;
    configurationApiUrlV1: string;
    contactDetailsApiUrlV1: string;
    contactDetailsApiUrlV2: string;
    cautionaryApiUrlV1: string;
    personApiUrlV1: string;
    personApiUrlV2: string;
    notesApiUrlV1: string;
    notesApiUrlV2: string;
    tenureApiUrlV1: string;
    assetApiUrlV1: string;
    assetSearchApiUrlV1: string;
    patchesAndAreasApiUrlV1: string;
    referenceDataApiUrlV1: string;
    addressApiUrlV1: string;
    addressApiUrlV2: string;
    equalityInformationApiUrlV1: string;
    repairsHubAppUrl: string;
    repairsHubApiUrl: string;
    processApiUrlV1: string;
    processApiUrlV2: string;
    housingFinanceInterimApiUrlV1: string;
    cognitoTokenName: string;
    cognitoDomain: string;
    cognitoClientIds: CognitoClientIds;
    cognitoUserPoolId: string;
    cognitoPKCEVerifierSessionStorageName: string;
};
export default config;
//# sourceMappingURL=config.d.ts.map