import transformDateString from "./transformDateString";
import dateWithFourDigits from "./dateWithFourDigits";
import formatNumber from "./formatText";
import checkProblems from "./checkProblems";
import getMeterTypeText from "./getMeterTypeText";

export default function buildResultOMwater(data, meterType, meters, chosenMeter, initialDate, finalDate){
  
  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/agua/resultados/OM",
    search: "",
    state: {}
  };

  resultObject.queryResponse = data[0].Items[0];
  
  resultObject.queryResponse.tipo = 0;

  meters.forEach(meter => {
    if((parseInt(meter.med.N) + 100*parseInt(meter.tipomed.N)) === parseInt(chosenMeter)){
      resultObject.unit = meter;
      resultObject.unitName = meter.nome.S;
      resultObject.unitNumber = meter.id.S;
    }
  });

  resultObject.allUnits = false;

  resultObject.numOfUnits = 1;

  resultObject.initialDate = transformDateString(dateWithFourDigits(initialDate));
  
  resultObject.finalDate = transformDateString(dateWithFourDigits(finalDate));

  resultObject.dateString = transformDateString(resultObject.queryResponse.aamm);

  resultObject.typeText = "Medidor - CAESB";

  resultObject.imageWidgetOneColumn = require("../../assets/icons/water_drop.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/water_shower.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(resultObject.queryResponse.consf, 0) + " m³";

  resultObject.widgetOneColumnSecondTitle = "Valor água";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(resultObject.queryResponse.vagu, 2);

  resultObject.widgetThreeColumnsTitles = [
    "Consumo médio",
    "Consumo faturado",
    "Adicional",
    "Valor água",
    "Valor esgoto",
    "Total"
  ];

  resultObject.widgetThreeColumnsValues = [
    formatNumber(resultObject.queryResponse.consm, 0) + " m³",
    formatNumber(resultObject.queryResponse.consf, 0) + " m³",
    "R$ " + formatNumber(resultObject.queryResponse.adic, 2),
    "R$ " + formatNumber(resultObject.queryResponse.vagu, 2),
    "R$ " + formatNumber(resultObject.queryResponse.vesg, 2),
    "R$ " + formatNumber(resultObject.queryResponse.subtotal, 2)
  ];

  // resultObject.widgetWithModalTitle = "Diagnóstico";

  // resultObject.widgetWithModalButtonName = "Ver relatório";

  resultObject.rowNamesInfo = [
    { name: "Identificação CAESB", attr: "id" },
    { name: "Nome do medidor", attr: "nome" },
    { name: "Contrato", attr: "ct" },
    { name: "Categoria", attr: "cat" },
    { name: "Hidrômetro", attr: "hidrom" },
    { name: "Locais", attr: "locais" },
    { name: "Observações", attr: "obs" }
  ];

  resultObject.rowNamesBill = [
    {
      name: "Leituras do hidrômetro",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Leitura atual",
      type: "hover-line sub-2",
      unit: "m³",
      attr: "lat",
      var: true,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Data da leitura atual",
      type: "hover-line sub-2",
      unit: " ",
      attr: "dlat",
      var: false,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Leitura anterior",
      type: "hover-line sub-2",
      unit: "m³",
      attr: "lan",
      var: true,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Data da leitura anterior",
      type: "hover-line sub-2",
      unit: " ",
      attr: "dlan",
      var: false,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Diferença",
      type: "hover-line sub-2",
      unit: "m³",
      attr: "dif",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Consumo",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Consumo médio",
      type: "hover-line sub-2",
      unit: "m³",
      attr: "consm",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Consumo faturado",
      type: "hover-line sub-2",
      unit: "m³",
      attr: "consf",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Tributos",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "IRPJ",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "irpj",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "CSLL",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "csll",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "COFINS",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "cofins",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "PASEP",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "pasep",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Valores",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0]
    },
    {
      name: "Valor água",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "vagu",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Valor esgoto",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "vesg",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Valor adicional",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "adic",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Valor total",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "subtotal",
      var: true,
      mean: true,
      showInTypes: [0]
    }
  ];

  resultObject.type = resultObject.queryResponse.tipo;

  resultObject.date = resultObject.queryResponse.aamm;

  // resultObject.problems = checkProblems(data, chosenMeter, resultObject.queryResponseAll, meters);
  
  // resultObject.numProblems = 0;
  // Object.keys(resultObject.problems).forEach(key => {
  //   if (resultObject.problems[key].problem === true) resultObject.numProblems += 1;
  // });


  // resultObject.rowNamesReportProblems = {
  //   dcp: {
  //     name: "Demanda contratada - Ponta",
  //     unit: "kW",
  //     obs:
  //       "Maior que zero somente na modalidade tarifária horária Azul. Igual a zero nos outros casos.",
  //     expected: "≥ 0 kW"
  //   },
  //   dcf: {
  //     name: "Demanda contratada - Fora de ponta",
  //     unit: "kW",
  //     obs: "Igual a zero somente na modalidade tarirária convencional",
  //     expected: "≥ 0 kW"
  //   },
  //   dmp: {
  //     name: "Demanda medida - Ponta",
  //     unit: "kW",
  //     obs: "Maior demanda de potência ativa registrada no período - Ponta",
  //     expected: "≥ 0 kW"
  //   },
  //   dmf: {
  //     name: "Demanda medida - Fora de ponta",
  //     unit: "kW",
  //     obs:
  //       "Maior demanda de potência ativa registrada no período - Fora de ponta",
  //     expected: "≥ 0 kW"
  //   },
  //   dfp: {
  //     name: "Demanda faturada - Ponta",
  //     unit: "kW",
  //     obs:
  //       "Demanda considerada no faturamento (maior valor entre medida e contratada) - Ponta",
  //     expected: "≥ Demanda contratada (Ponta)"
  //   },
  //   dff: {
  //     name: "Demanda faturada - Fora de ponta",
  //     unit: "kW",
  //     obs:
  //       "Demanda considerada no faturamento (maior valor entre medida e contratada) - Fora de ponta",
  //     expected: "≥ Demanda contratada (Fora de ponta)"
  //   },

  //   vudp: {
  //     name: "Custo da ultrapassagem de demanda - Ponta",
  //     unit: "R$",
  //     obs:
  //       "Valor adicional em caso de demanda medida superior à demanda contratada",
  //     expected: "= R$ 0,00"
  //   },

  //   vudf: {
  //     name: "Custo da ultrapassagem de demanda - Fora de ponta",
  //     unit: "R$",
  //     obs:
  //       "Valor adicional em caso de demanda medida superior à demanda contratada",
  //     expected: "= R$ 0,00"
  //   },

  //   verexp: {
  //     name: "Custo do EREX - Ponta",
  //     unit: "R$",
  //     obs:
  //       "Valor adicional em caso de excedentes de energia reativa (fator de potência inferior a 0,92)",
  //     expected: "= R$ 0,00"
  //   },

  //   verexf: {
  //     name: "Custo do EREX - Fora de ponta",
  //     unit: "R$",
  //     obs:
  //       "Valor adicional em caso de excedentes de energia reativa (fator de potência inferior a 0,92)",
  //     expected: "= R$ 0,00"
  //   },

  //   jma: {
  //     name: "Multas, juros e atualização monetária",
  //     unit: "R$",
  //     obs:
  //       "Valores adicionais decorrentes do atraso no pagamento de faturas anteriores",
  //     expected: "= R$ 0,00"
  //   },
  //   desc: {
  //     name: "Descontos e compensações",
  //     unit: "R$",
  //     obs:
  //       "Total de descontos e compensações devido a baixos indicadores de qualidade do serviço, conforme normas da ANEEL, ou correções de valores cobrados indevidamente em faturas anteriores",
  //     expected: "= R$ 0,00"
  //   }
  // };
 
  return resultObject;

}