import { UserPoolId, ClientId } from "../../aws";

import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";

export default function signUpCognito(email, password1, password2){
  return new Promise((resolve, reject) => {
    
    if(password1 === password2){
      
      let poolData = {
        UserPoolId: UserPoolId,
        ClientId: ClientId
      };
  
      let userPool = new CognitoUserPool(poolData);
  
      const attributeList = [
        new CognitoUserAttribute({
          Name: "email",
          Value: email,
        })
      ];
        
      userPool.signUp(email, password1, attributeList, null, (err, result) => {
        if (err) {
          resolve(false);
        } else {
          resolve(result.user);
        }
      });
    } else {
      resolve(false);
    }
  });
}