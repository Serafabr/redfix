export default function writeItemsInDB(dbObject, paramsArr){
  return new Promise((resolve, reject) => {
  
    // Use API batchWriteItem (write items in database table)
    let arrayPromises = paramsArr.map(params => {
      return new Promise((resolve, reject) => {
        dbObject.batchWriteItem(params, (err, data) =>{
          if(err){
            reject();
          } else {
            resolve();
          }
        });
      });
    });
  
    // After loop, Promise.all
    Promise.all(arrayPromises)
    .then(() => {
      resolve();
    })
    .catch(() => {
      reject();
    });
  });
}