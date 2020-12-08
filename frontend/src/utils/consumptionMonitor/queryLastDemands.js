export default function queryLastDemands(dbObject, med, tableName) {
  return new Promise((resolve, reject) => {
    // Query EnergyTable and return the last 13 months of one consumer unit
    dbObject.query(
      {
        TableName: tableName,
        KeyConditionExpression: "med = :med",
        Limit: 20,
        ScanIndexForward: false,
        ExpressionAttributeValues: {
          ":med": {
            N: med
          }
        }
      },
      (err, data) => {
        if (err) {
          console.log(err);
          alert("There was an error. Please insert search parameters again.");
          reject(Error("Failed to get the items."));
        } else {
          data.Items.map(element => {
            // Each 'element' is an item returned from the database table; map function loops through all items, changing the variable data
            Object.keys(element).map(key => {
              // Each key is an attribute of the database table; map function loops through all attributes, changing strings into numbers
              element[key] = Number(element[key].N); // Transforms each element[key].N (string) into Number
            });
          });
          resolve(data);
        }
      }
    );
  });
}
