import transformDateString from "./transformDateString";
import dateWithFourDigits from "./dateWithFourDigits";
import formatNumber from "./formatText";
// import checkProblems from "./checkProblems";
import removeEmptyMeters from "./removeEmptyMeters";
import sumAllMetersWater from "./sumAllMetersWater";

export default function buildResultAMwater(data, meterType, meters, chosenMeter, initialDate, finalDate){

  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/agua/resultados/AM",
    search: "",
    state: {}
  };

  resultObject.nonEmptyMeters = removeEmptyMeters(data);

  resultObject.queryResponseAll = data;

  resultObject.queryResponse = sumAllMetersWater(data);

  let queryResponse = resultObject.queryResponse[0].Items[0];

  resultObject.unitNumber = "Todos medidores";

  resultObject.unitName = "Todos medidores";

  resultObject.allUnits = true;

  resultObject.numOfUnits = resultObject.nonEmptyMeters.length;

  resultObject.typeText = false;

  resultObject.imageWidgetOneColumn = require("../../assets/icons/water_drop.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/water_shower.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");;

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(queryResponse.dif, 0) + " m³";

  resultObject.widgetOneColumnSecondTitle = "Gasto";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(queryResponse.subtotal, 2);

  resultObject.widgetThreeColumnsTitles = [
    "Consumo médio",
    "Consumo faturado",
    "Adicional",
    "Valor água",
    "Valor esgoto",
    "Total"
  ];

  resultObject.widgetThreeColumnsValues = [
    formatNumber(queryResponse.consm, 0) + " m³",
    formatNumber(queryResponse.consf, 0) + " m³",
    "R$ " + formatNumber(queryResponse.adic, 2),
    "R$ " + formatNumber(queryResponse.vagu, 2),
    "R$ " + formatNumber(queryResponse.vesg, 2),
    "R$ " + formatNumber(queryResponse.subtotal, 2)
  ];

  // resultObject.widgetWithModalTitle = "Diagnóstico";

  // resultObject.widgetWithModalButtonName = "Ver relatório";

  // resultObject.problems = checkProblems(resultObject.queryResponse, chosenMeter, resultObject.queryResponseAll, meters);
  
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

  resultObject.initialDate = transformDateString(dateWithFourDigits(initialDate));
  
  resultObject.finalDate = transformDateString(dateWithFourDigits(finalDate));

  return resultObject;

}