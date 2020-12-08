import { serverAddress, cebBills, caesbBills } from "../../constants";

export default function queryTable(meterType, chosenMeter, meters, aamm1, aamm2) {
  return new Promise((resolve, reject) => {
    
    let tablePath = meterType === "1" ? cebBills : caesbBills;
    
    // Check if consumer is 'all'
    var allMeters = [];
    if (chosenMeter.slice(1) === "99") {
      // Build array of all meters to query
      allMeters = meters.map(meter => {
        return meter.med
      });
    } else {
      allMeters = [chosenMeter];
    }
    // Query all chosen meters
    let queryResponse = [];
    let arrayPromises = allMeters.map((meter, i) => {
      queryResponse.push([]);
      return new Promise((resolve, reject) => {
        fetch(serverAddress + tablePath +
          "med=" + meter +
          "&aamm1=" + aamm1 +
          "&aamm2=" + aamm2
        , {
          method: "GET"
        })
        .then(response => response.json())
        .then(data => {
          data.forEach(obj => {
            // IF RESPONSE IS STRING TYPE
            // let newObj = {};
            // Object.keys(obj).forEach(key => {
            //   newObj[key] = Number(obj[key]);
            // });
            queryResponse[i].push(obj);
          });
          resolve();
        })
        .catch(()=>reject())
      });
    });
    Promise.all(arrayPromises).then(() => {
      resolve(queryResponse);
    }).catch(() => {
      reject("Houve um problema no acesso ao banco de dados. Por favor, tente novamente.");
    });
  });
}
