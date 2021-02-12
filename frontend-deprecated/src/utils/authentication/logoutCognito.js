import { UserPoolId, ClientId } from "../../aws";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function logoutCognito(userSession){
  return new Promise((resolve, reject) => {

    if(!userSession){
      resolve(true);
    } else {
      let userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: UserPoolId,
        ClientId: ClientId
      });
  
      let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: userSession.getIdToken().payload.email,
        Pool: userPool
      });
  
      cognitoUser.signOut();
      resolve(true);
    }
  });
}