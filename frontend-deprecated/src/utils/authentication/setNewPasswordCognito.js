import { UserPoolId, ClientId } from "../../aws";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function setNewPasswordCognito(email, verificationCode, newPassword1, newPassword2){
  
  return new Promise((resolve, reject) => {
    
    if(newPassword1 !== newPassword2){

      console.log("different passwords");
      resolve(false);

    } else {
  
      let userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: UserPoolId,
        ClientId: ClientId
      });
    
      let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: email,
        Pool: userPool
      });
      
      cognitoUser.confirmPassword(verificationCode, newPassword1, {
        onSuccess() {
          resolve(true);
        },
        onFailure(err) {
          resolve(false);
        }
      });
    }
  });
}
