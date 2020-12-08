export default function sumAllMeters(data, meterType) {
  // Input:
  // data (array): array (length = number of meters) with data retrieved from query
  //
  // Output:
  // newData (array): array (length = 1) with sum data of all meters summed up
  //
  // Purpose:
  // Provide aggregate data, to be shown in results components, in the same format (data.Items) as a query response for a single meter
  
  // Number of meters to loop through queryResponse
  var numMeters = data.length;

  var newData = [{
    basec: 0,
    cip: 0,
    dcf: 0,
    dcp: 0,
    desc: 0,
    dff: 0,
    dfp: 0,
    dmf: 0,
    dmp: 0,
    dms: 0,
    uferf: 0,
    uferp: 0,
    icms: 0,
    jma: 0,
    kwh: 0,
    kwhf: 0,
    kwhp: 0,
    tipo: 0,
    trib: 0,
    vbru: 0,
    vdff: 0,
    vdfp: 0,
    verexf: 0,
    verexp: 0,
    vliq: 0,
    vudf: 0,
    vudp: 0
  }];
    
  // Loops through queryResponse to build newData array
  for (let j = 0; j <= numMeters - 1; j++) {
    if (data[j].length > 0) {
      // If current meter does not have data, will not be considered for sum
      
      Object.keys(newData[0]).forEach(key => {
        if(key === "dms"){
          newData[0][key] = newData[0][key] +
            (data[j].dmp > data[j].dmf
              ? data[j].dmp
              : data[j].dmf);
        } else {
          newData[0][key] = newData[0][key] + data[j][key]
        }
      });
    }
  }
  return newData;
}
