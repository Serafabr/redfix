export default function makeChartConfigsWater(queryResponse, aamm1, aamm2) {
  // Inputs:
  // queryResponse (array): response from query to the database
  // aamm1 (string): initialDate in aamm format (compatible with sort key format)
  // aamm2 (string): finalDate in aamm format (compatible with sort key format)
  //
  // Output:
  // chartConfigs (object): all data, configuration, options and labels necessary to generate a chart with chart.js
  //
  // Purpose:
  // Allow charts in results components to show different sets of data retrieved from database
  
    // Number of meters to loop through queryResponse
  var numMeters = queryResponse.length;

  // Build arrays with all 'aamm' of period in query
  // periodStrings: array of 'aamm' strings
  // periodInts: array of 'aamm' integers
  // newPeriodStrings: array of strings in 'mmm/aa' format (mmm represent 3 letters designating the month)
  var m1 = parseInt(aamm1, 10);
  var m2 = parseInt(aamm2, 10);
  var periodStrings = [];
  var periodInts = [];
  var m = m1;
  while (m <= m2) {
    periodInts.push(m);
    periodStrings.push(m.toString());
    m = m + 1;
    if (parseInt(m.toString().slice(2), 10) === 13) {
      m = m + 88;
    }
  }

  var newPeriodStrings = periodStrings.map(month => {
    if (month.slice(2) === "01") {
      return "jan/" + month.slice(0, 2);
    } else if (month.slice(2) === "02") {
      return "fev/" + month.slice(0, 2);
    } else if (month.slice(2) === "03") {
      return "mar/" + month.slice(0, 2);
    } else if (month.slice(2) === "04") {
      return "abr/" + month.slice(0, 2);
    } else if (month.slice(2) === "05") {
      return "mai/" + month.slice(0, 2);
    } else if (month.slice(2) === "06") {
      return "jun/" + month.slice(0, 2);
    } else if (month.slice(2) === "07") {
      return "jul/" + month.slice(0, 2);
    } else if (month.slice(2) === "08") {
      return "ago/" + month.slice(0, 2);
    } else if (month.slice(2) === "09") {
      return "set/" + month.slice(0, 2);
    } else if (month.slice(2) === "10") {
      return "out/" + month.slice(0, 2);
    } else if (month.slice(2) === "11") {
      return "nov/" + month.slice(0, 2);
    } else {
      return "dez/" + month.slice(0, 2);
    }
  });

  // Number of months in the query
  var numMonths = periodInts.length;

  // Initialize answers array, considering all attributes in EnergyTable
  let answers = {
    dif: [],
    consm: [],
    consf: [],
    vagu: [],
    vesg: [],
    adic: [],
    subtotal: [],
    cofins: [],
    irpj: [],
    csll: [],
    pasep: []
  };

  let helper = {
    datasetLabel: {
      dif: "Diferença de leituras",
      consm: "Consumo médio",
      consf: "Consumo faturado",
      vagu: "Valor água",
      vesg: "Valor esgoto",
      adic: "Adicional",
      subtotal: "Subtotal",
      cofins: "COFINS",
      irpj: "IRPJ",
      csll: "CSLL",
      pasep: "PASEP"
    },
    title: {
      dif: "Diferença de leituras",
      consm: "Consumo médio",
      consf: "Consumo faturado",
      vagu: "Valor água",
      vesg: "Valor esgoto",
      adic: "Adicional",
      subtotal: "Subtotal",
      cofins: "COFINS",
      irpj: "IRPJ",
      csll: "CSLL",
      pasep: "PASEP"
    },
    yLabel: {
      dif: "m³",
      consm: "m³",
      consf: "m³",
      vagu: "R$",
      vesg: "R$",
      adic: "R$",
      subtotal: "R$",
      cofins: "R$",
      irpj: "R$",
      csll: "R$",
      pasep: "R$"
    }
  };

  // Loop through queryResponse to build answers array
  for (let i = 0; i <= numMonths - 1; i++) {
    Object.keys(answers).forEach(key => {
      answers[key].push(0);
    });
    for (let j = 0; j <= numMeters - 1; j++) {
      if (queryResponse[j].Items.length > 0) {
        // If current meter does not have data, will not be considered for sum
        for (let k = 0; k <= queryResponse[j].Items.length - 1; k++) {
          // Block access of inexisting months in a meter
          if (queryResponse[j].Items[k].aamm === periodInts[i]) {
            // Check if 'aamm' corresponds to current loop month. If true, the value is added
            
            Object.keys(answers).forEach(key => {
              answers[key][i] = answers[key][i] + queryResponse[j].Items[k][key]
            });
          }
        }
      }
    }
  }



  // Build chartConfig (object of objects)
  var chartConfigs = {};
  Object.keys(answers).forEach(key => {
    chartConfigs[key] = {
      type: "line",
      data: {
        labels: newPeriodStrings,
        datasets: [
          {
            label: helper.datasetLabel[key],
            backgroundColor: "rgb(0, 0, 0)",
            borderColor: "rgb(0, 0, 0)",
            data: answers[key],
            fill: false
          }
        ]
      },
      options: {
        legend: false,
        responsive: true,
        title: {
          display: true,
          text: helper.title[key]
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Mês"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: helper.yLabel[key]
              }
            }
          ]
        }
      }
    };
  });

  // Return chartConfigs object
  return chartConfigs;
}
