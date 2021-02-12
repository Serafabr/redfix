import AWS from "aws-sdk";
import { region, IdentityPoolId, fullUserPoolURL, apiVersion, endpoint } from "../../aws";

export default function initializeDynamoDB(userSession) {
  // Inputs:
  //
  // Output:
  // dynamo (object): contains configuration necessary for using AWS API to access DynamoDB tables
  //
  // Purpose:
  // Provide access to AWS DynamoDB

  // Minimal configuration to create a dbObject usable by AWS API:
  //  - region: Ohio
  //  - credentials: IdentityPool from Cognito
  // //    * Attention * The IdentityPool must have a role that allows un-authenticated read-only access to DynamoDB
  
  /////////////////////////////////////////////////////////////////////////////
  
  let dynamo = {};

  // In case there is no user logged in
  if(!userSession){

    AWS.config.region = region;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    });

    dynamo = new AWS.DynamoDB({
      apiVersion: apiVersion,
      endpoint: endpoint
    });

  // In case there is a user logged in
  } else {

    AWS.config.region = region;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId,
      Logins: {
          [fullUserPoolURL]: userSession.getIdToken().getJwtToken()
      },
      LoginId: userSession.getIdToken().payload.email
    });

    dynamo = new AWS.DynamoDB({
      apiVersion: apiVersion,
      endpoint: endpoint
    });
  }

  return dynamo;

}