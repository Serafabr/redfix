export default function makeChartConfigs(queryResponse, aamm1, aamm2) {
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
    basec: [],
    confat: [],
    cip: [],
    dcf: [],
    dcp: [],
    desc: [],
    dff: [],
    dfp: [],
    dmf: [],
    dmp: [],
    dms: [],
    uferf: [],
    uferp: [],
    icms: [],
    jma: [],
    kwh: [],
    kwhf: [],
    kwhp: [],
    tipo: [],
    trib: [],
    vbru: [],
    vdff: [],
    vdfp: [],
    verexf: [],
    verexp: [],
    vliq: [],
    vudf: [],
    vudp: []
  };

  let helper = {
    datasetLabel: {
      vbru: "Valor bruto",
      vliq: "Valor líquido",
      basec: "Base de cálculo",
      jma: "Juros, multas e atualizações monetárias",
      dcf: "Demanda contratada - Fora de ponta",
      dcp: "Demanda contratada - Ponta",
      tipo: "Tipo",
      desc: "Compensações e/ou descontos",
      trib: "Tributos federais",
      icms: "ICMS",
      confat: "Consumo faturado",
      cip: "Contribuição de iluminação pública - CIP",
      kwh: "Consumo total",
      kwhf: "Consumo - Fora de ponta",
      kwhp: "Consumo - Ponta",
      uferf: "UFER - Fora de ponta",
      uferp: "UFER - Ponta",
      verexf: "Valor EREX - Fora de ponta",
      verexp: "Valor EREX - Ponta",
      dmf: "Demanda medida - Fora de ponta",
      dmp: "Demanda medida - Ponta",
      dms: "Demanda medida - Diária", // Sum of highest demands
      dff: "Demanda faturada - Fora de ponta",
      dfp: "Demanda faturada - Ponta",
      vdff: "Valor da demanda faturada - Fora de ponta",
      vdfp: "Valor da demanda faturada - Ponta",
      vudf: "Valor da ultrapassagem de demanda - Fora de ponta",
      vudp: "Valor da ultrapassagem de demanda - Ponta"
    },
    title: {
      vbru: "Valor bruto",
      vliq: "Valor líquido",
      basec: "Base de cálculo",
      jma: "Juros, multas e atualizações monetárias",
      dcf: "Demanda contratada - Fora de ponta",
      dcp: "Demanda contratada - Ponta",
      tipo: "Tipo",
      desc: "Compensações e/ou descontos",
      trib: "Tributos federais",
      icms: "ICMS",
      confat: "Consumo faturado",
      cip: "Contribuição de iluminação pública - CIP",
      kwh: "Consumo total",
      kwhf: "Consumo - Fora de ponta",
      kwhp: "Consumo - Ponta",
      uferf: "UFER - Fora de ponta",
      uferp: "UFER - Ponta",
      verexf: "Valor EREX - Fora de ponta",
      verexp: "Valor EREX - Ponta",
      dmf: "Demanda medida - Fora de ponta",
      dmp: "Demanda medida - Ponta",
      dms: "Demanda medida - Diária",
      dff: "Demanda faturada - Fora de ponta",
      dfp: "Demanda faturada - Ponta",
      vdff: "Valor da demanda faturada - Fora de ponta",
      vdfp: "Valor da demanda faturada - Ponta",
      vudf: "Valor da ultrapassagem de demanda - Fora de ponta",
      vudp: "Valor da ultrapassagem de demanda - Ponta"
    },
    yLabel: {
      vbru: "R$",
      vliq: "R$",
      basec: "R$",
      jma: "R$",
      dcf: "kW",
      dcp: "kW",
      tipo: "Tipo",
      desc: "R$",
      trib: "R$",
      icms: "R$",
      cip: "R$",
      kwh: "kWh",
      kwhf: "kWh",
      kwhp: "kWh",
      confat: "kWh",
      uferf: "UFER - Fora de ponta",
      uferp: "UFER - Ponta",
      verexf: "R$",
      verexp: "R$",
      dmf: "kW",
      dmp: "kW",
      dms: "kW",
      dff: "kW",
      dfp: "kW",
      vdff: "R$",
      vdfp: "R$",
      vudf: "R$",
      vudp: "R$"
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
              if(key === "dms"){
                answers[key][i] = answers[key][i] + (
                  queryResponse[j].Items[k].dmf > queryResponse[j].Items[k].dmp
                    ? queryResponse[j].Items[k].dmf
                    : queryResponse[j].Items[k].dmp);
              } else {
                answers[key][i] = answers[key][i] + queryResponse[j].Items[k][key]
              }
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
