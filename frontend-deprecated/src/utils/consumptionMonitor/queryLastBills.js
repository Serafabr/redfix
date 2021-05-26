export default function queryLastBills(dbObject, tableName, med, month1, month2) {
  return new Promise((resolve, reject) => {
    // Query for only one meter
    dbObject.query(
      {
        TableName: tableName,
        KeyConditionExpression: "med = :med AND aamm BETWEEN :aamm1 AND :aamm2",
        ExpressionAttributeValues: {
          ":med": {
            N: med
          },
          ":aamm1": {
            N: month1.toString()
          },
          ":aamm2": {
            N: month2.toString()
          }
        }
      },
      (err, data) => {
        if (err) {
          alert("There was an error. Please insert search parameters again.");
          reject(Error("Failed to get the items."));
        } else {
          data.Items.map(element => {
            Object.keys(element).map(key => {
              element[key] = Number(element[key].N);
            });
          });
          resolve(data);
        }
      }
    );
  });
}
