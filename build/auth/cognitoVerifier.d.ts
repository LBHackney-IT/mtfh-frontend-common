export interface CognitoVerifier {
  verify: (token: string) => Promise<{
    [key: string]: unknown;
  }>;
}
export declare const resetCognitoVerifier: () => void;
export declare const getCognitoVerifier: () => CognitoVerifier;
//# sourceMappingURL=cognitoVerifier.d.ts.map
