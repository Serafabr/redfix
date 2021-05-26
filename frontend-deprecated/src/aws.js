import buildCEBParamsArr from "./utils/consumptionMonitor/buildCEBParamsArr";
import buildCAESBParamsArr from "./utils/consumptionMonitor/buildCAESBParamsArr";
import buildAssetParamsArr from "./utils/maintenance/buildAssetParamsArr";
import textToArrayCM from "./utils/consumptionMonitor/textToArrayCM";
import textToArrayAsset from "./utils/assets/textToArrayAsset";

// AWS configurations

// General
export const region = "us-east-2";

// Cognito
export const fullUserPoolURL = "cognito-idp.us-east-2.amazonaws.com/us-east-2_QljBw37l1";
export const UserPoolId = "us-east-2_QljBw37l1";
export const ClientId = "25k8mc8m13pgpaihrhvcuvonpq";
export const IdentityPoolId = "us-east-2:a92ff2fa-ce00-47d1-b72f-5e3ee87fa955";

// DynamoDB and tables
export const apiVersion = "2012-08-10";
export const endpoint = "https://dynamodb.us-east-2.amazonaws.com";
export const dbTables = {
  energy: {
    tableName: "CEBteste",
    tableNameMeters: "CEB-Medidoresteste",
    meterType: "1",
    readFile: textToArrayCM,
    buildParamsArr: buildCEBParamsArr
  },
  water: {
    tableName: "CAESBteste",
    tableNameMeters: "CAESB-Medidoresteste",
    meterType: "2",
    readFile: textToArrayCM,
    buildParamsArr: buildCAESBParamsArr
  },
  workOrder: {
    tableName: "workorder"
  },
  asset: {
    tableName: "Asset",
    readFile: textToArrayAsset,
    buildParamsArr: buildAssetParamsArr
  },
  woxasset: {
    tableName: "WOXASSET"
  }
};
