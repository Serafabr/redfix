import { i, medList } from "./CAESBcsvData";

export default function buildCAESBParamsArr(arr, tableName){
  
  // Discard header
  let numColumns = 19;
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

  lines.forEach(meter => {
    attributesArr.push({
      PutRequest: {
        Item: {
          "med": {
            N: medList[meter[i.med]]
          },
          "aamm": {
            N: meter[i.aamm]
          },
          "lat": {
            N: meter[i.lat]
          },
          "dlat": {
            N: meter[i.dlat]
          },
          "lan": {
            N: meter[i.lan]
          },
          "dlan": {
            N: meter[i.dlan]
          },
          "dif": {
            N: meter[i.dif]
          },
          "consm": {
            N: meter[i.consm]
          },
          "consf": {
            N: meter[i.consf]
          },
          "vagu": {
            N: meter[i.vagu]
          },
          "vesg": {
            N: meter[i.vesg]
          },
          "adic": {
            N: meter[i.adic]
          },
          "subtotal": {
            N: meter[i.subtotal]
          },
          "cofins": {
            N: meter[i.cofins]
          },
          "irpj": {
            N: meter[i.irpj]
          },
          "csll": {
            N: meter[i.csll]
          },
          "pasep": {
            N: meter[i.pasep]
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