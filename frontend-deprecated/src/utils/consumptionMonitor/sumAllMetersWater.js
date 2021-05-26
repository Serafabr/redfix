export default function sumAllMetersWater(data) {
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

  // Initializes newData array, considering all attributes in EnergyTable
  var newData = [
    {
      Items: [
        {
          dif: 0,
          consm: 0,
          consf: 0,
          vagu: 0,
          vesg: 0,
          adic: 0,
          subtotal: 0,
          cofins: 0,
          irpj: 0,
          csll: 0,
          pasep: 0,
        }
      ]
    }
  ];
    
  // Loops through queryResponse to build newData array
  for (let j = 0; j <= numMeters - 1; j++) {
    if (data[j].Items.length > 0) {
      // If current meter does not have data, will not be considered for sum
      
      Object.keys(newData[0].Items[0]).forEach(key => {
        newData[0].Items[0][key] = newData[0].Items[0][key] + data[j].Items[0][key]
      });
    }
  }
  return newData;
}
