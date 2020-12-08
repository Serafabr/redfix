import { UserPoolId, ClientId } from "../../aws";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function loginCognito(email, password){
  return new Promise((resolve, reject) => {

    let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username: email,
      Password: password
    });
    
    let userPool = new AmazonCognitoIdentity.CognitoUserPool({
      UserPoolId: UserPoolId,
      ClientId: ClientId
    });

    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: email,
      Pool: userPool
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      
      onSuccess: function (userSession) {
        // console.log("Login efetuado com sucesso.\n\nUsuário logado: " + email);
        // console.log("userSession:");
        // console.log(userSession);
        // window.sessionStorage.setItem("email", email);
        // window.sessionStorage.setItem("idToken", userSession.getIdToken().getJwtToken());
        resolve(userSession);
      },
      onFailure: function(err) {
        // console.log("Login falhou.");
        // console.log(err); // || JSON.stringify(err));
        resolve(false);
      },
    });
  });
}