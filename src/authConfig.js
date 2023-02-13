export const msalConfig = {
    auth: {
      clientId: "eb97a5d9-ba57-40fb-a0f6-62eef27beed7",
      authority: "https://login.microsoftonline.com/3f8c3345-0ff1-4cca-88a9-2d4002ad312d", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };