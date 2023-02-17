export const msalConfig = {
    auth: {
      clientId: "eb97a5d9-ba57-40fb-a0f6-62eef27beed7",
      authority: "https://login.microsoftonline.com/3f8c3345-0ff1-4cca-88a9-2d4002ad312d",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };