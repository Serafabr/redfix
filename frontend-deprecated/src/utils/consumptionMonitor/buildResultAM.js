import transformDateString from "./transformDateString";
import dateWithFourDigits from "./dateWithFourDigits";
import formatNumber from "./formatText";
import checkProblems from "./checkProblems";
import removeEmptyMeters from "./removeEmptyMeters";
import sumAllMeters from "./sumAllMeters";

export default function buildResultAM(data, meterType, meters, chosenMeter, initialDate, finalDate) {

  console.log('begin r a m')

  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/energia/resultados/AM",
    search: "",
    state: {}
  };

  resultObject.nonEmptyMeters = removeEmptyMeters(data);

  resultObject.queryResponseAll = data;

  console.log('nonemptymeters');
  console.log(resultObject.nonEmptyMeters);
  console.log('queryResponseAll');
  console.log(data);

  resultObject.queryResponse = sumAllMeters(data);

  console.log(resultObject.queryResponse);

  let queryResponse = resultObject.queryResponse;

  resultObject.unitNumber = "Todos medidores";

  resultObject.unitName = "Todos medidores";

  resultObject.allUnits = true;

  resultObject.numOfUnits = resultObject.nonEmptyMeters.length;

  resultObject.typeText = false;

  resultObject.imageWidgetOneColumn = require("../../assets/icons/money_energy.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/plug_energy.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");;

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(queryResponse.kwh, 0) + " kWh";

  resultObject.widgetOneColumnSecondTitle = "Gasto";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(queryResponse.vbru, 2);

  resultObject.widgetThreeColumnsTitles = [
    "Demanda",
    "Ultrapass.",
    "Descontos",
    "Multas",
    "EREX",
    "UFER"
  ];

  resultObject.widgetThreeColumnsValues = [
    formatNumber(queryResponse.dms, 0) + " kW",
    "R$ " +
    formatNumber(
      queryResponse.vudf + queryResponse.vudp,
      0
    ),
    "R$ " + formatNumber(queryResponse.desc, 2),
    "R$ " + formatNumber(queryResponse.jma, 2),
    "R$ " +
    formatNumber(
      queryResponse.verexf + queryResponse.verexp,
      2
    ),
    formatNumber(
      queryResponse.uferf + queryResponse.uferp,
      0
    )
  ];

  resultObject.widgetWithModalTitle = "Diagnóstico";

  resultObject.widgetWithModalButtonName = "Ver relatório";

  console.log('here2');

  resultObject.problems = checkProblems(resultObject.queryResponse, chosenMeter, resultObject.queryResponseAll, meters);

  resultObject.numProblems = 0;
  Object.keys(resultObject.problems).forEach(key => {
    if (resultObject.problems[key].problem === true) resultObject.numProblems += 1;
  });

  console.log('here3');


  resultObject.rowNamesReportProblems = {
    dcp: {
      name: "Demanda contratada - Ponta",
      unit: "kW",
      obs:
        "Maior que zero somente na modalidade tarifária horária Azul. Igual a zero nos outros casos.",
      expected: "≥ 0 kW"
    },
    dcf: {
      name: "Demanda contratada - Fora de ponta",
      unit: "kW",
      obs: "Igual a zero somente na modalidade tarirária convencional",
      expected: "≥ 0 kW"
    },
    dmp: {
      name: "Demanda medida - Ponta",
      unit: "kW",
      obs: "Maior demanda de potência ativa registrada no período - Ponta",
      expected: "≥ 0 kW"
    },
    dmf: {
      name: "Demanda medida - Fora de ponta",
      unit: "kW",
      obs:
        "Maior demanda de potência ativa registrada no período - Fora de ponta",
      expected: "≥ 0 kW"
    },
    dfp: {
      name: "Demanda faturada - Ponta",
      unit: "kW",
      obs:
        "Demanda considerada no faturamento (maior valor entre medida e contratada) - Ponta",
      expected: "≥ Demanda contratada (Ponta)"
    },
    dff: {
      name: "Demanda faturada - Fora de ponta",
      unit: "kW",
      obs:
        "Demanda considerada no faturamento (maior valor entre medida e contratada) - Fora de ponta",
      expected: "≥ Demanda contratada (Fora de ponta)"
    },

    vudp: {
      name: "Custo da ultrapassagem de demanda - Ponta",
      unit: "R$",
      obs:
        "Valor adicional em caso de demanda medida superior à demanda contratada",
      expected: "= R$ 0,00"
    },

    vudf: {
      name: "Custo da ultrapassagem de demanda - Fora de ponta",
      unit: "R$",
      obs:
        "Valor adicional em caso de demanda medida superior à demanda contratada",
      expected: "= R$ 0,00"
    },

    verexp: {
      name: "Custo do EREX - Ponta",
      unit: "R$",
      obs:
        "Valor adicional em caso de excedentes de energia reativa (fator de potência inferior a 0,92)",
      expected: "= R$ 0,00"
    },

    verexf: {
      name: "Custo do EREX - Fora de ponta",
      unit: "R$",
      obs:
        "Valor adicional em caso de excedentes de energia reativa (fator de potência inferior a 0,92)",
      expected: "= R$ 0,00"
    },

    jma: {
      name: "Multas, juros e atualização monetária",
      unit: "R$",
      obs:
        "Valores adicionais decorrentes do atraso no pagamento de faturas anteriores",
      expected: "= R$ 0,00"
    },
    desc: {
      name: "Descontos e compensações",
      unit: "R$",
      obs:
        "Total de descontos e compensações devido a baixos indicadores de qualidade do serviço, conforme normas da ANEEL, ou correções de valores cobrados indevidamente em faturas anteriores",
      expected: "= R$ 0,00"
    }
  };

  resultObject.initialDate = transformDateString(dateWithFourDigits(initialDate));

  resultObject.finalDate = transformDateString(dateWithFourDigits(finalDate));

  console.log('ending build R A M');

  return resultObject;

}