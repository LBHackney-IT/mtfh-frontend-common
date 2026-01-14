import { Amplify } from "aws-amplify";

//cookie storage and local storage persist through tab change. Session storage does not
export interface AmplifyAuthConfig {
  region: string;
  userPoolId: string;
  userPoolWebClientId: string;
  domain: string;
  redirectSignIn: string;
  redirectSignOut: string;
}

//https://docs.amplify.aws/gen1/javascript/build-a-backend/auth/manage-user-session/

export function configureAmplifyAuth(config: AmplifyAuthConfig): void {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: config.userPoolId,
        userPoolClientId: config.userPoolWebClientId,
        loginWith: {
          oauth: {
            domain: config.domain,
            scopes: ["openid", "email", "profile"],
            redirectSignIn: [config.redirectSignIn],
            redirectSignOut: [config.redirectSignOut],
            responseType: "code",
            providers: ["Google"],
          },
        },
      },
    },
  });

  //cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());
  //cognitoUserPoolsTokenProvider.setKeyValueStorage(sessionStorage);
  //cognitoUserPoolsTokenProvider.setKeyValueStorage(new CustomCognitoTokenStorage());
}

// class CustomCognitoTokenStorage implements KeyValueStorageInterface {
//   storageObject: Record<string, string> = {};
//   async setItem(key: string, value: string): Promise<void> {
//     this.storageObject[key] = value;
//   }
//   async getItem(key: string): Promise<string | null> {
//     return this.storageObject[key];
//   }
//   async removeItem(key: string): Promise<void> {
//     delete this.storageObject[key];
//   }
//   async clear(): Promise<void> {
//     this.storageObject = {};
//   }
// }
