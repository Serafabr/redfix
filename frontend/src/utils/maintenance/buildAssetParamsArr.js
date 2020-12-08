export default function buildAssetParamsArr(arr, tableName){
  
  // Discard header
  let numColumns = 10;
  let noHeader = arr.splice(numColumns);

  // Remove last element (empty element because the last character in CEB csv file is ;)
  noHeader.pop();
  console.log('noHeader:');
  console.log(noHeader);

  // Split big array into many arrays (each small array represents a meter in CEB csv file)
  let lines = [];
  while(noHeader.length > 0){
    lines.push(noHeader.splice(0, numColumns));
  }

  // let noHeaderNumbers = [];
  // lines.forEach((line, index) => {
  //   noHeaderNumbers.push([]);
  //   line.forEach(element => {
  //     noHeaderNumbers[index].push(Number(element));
  //   });
  // });

  // console.log("noHeaderNumbers:");
  // console.log(noHeaderNumbers);

  let attributesArr = [];

  lines.forEach(asset => {
    attributesArr.push({
      PutRequest: {
        Item: {
          "id": {
            S: asset[0]
          },
          "nome": {
            S: asset[1]
          },
          "subnome": {
            S: asset[2]
          },
          "visita": {
            BOOL: asset[3] === "true"
          },
          "lat": {
            N: asset[4]
          },
          "lon": {
            N: asset[5]
          },
          "areaconst": {
            N: asset[6]
          },
          "pai": {
            S: asset[7]
          },
          "modelo": {
            S: asset[8]
          },
          "serial": {
            S: asset[9]
          }
        }
      }
    });
  });

  // console.log("attributesArr:");
  // console.log(attributesArr);

  let maxLength = 25;
  let paramsArr = [];
  while(attributesArr.length > 0){
    paramsArr.push({RequestItems: {[tableName]: attributesArr.splice(0, maxLength)}})
  }
  return paramsArr;
}