import transformDateString from "./transformDateString";
import formatNumber from "./formatText";
import dateWithFourDigits from "./dateWithFourDigits";
import removeEmptyMeters from "./removeEmptyMeters";
import makeChartConfigs from "./makeChartConfigs";

export default function buildResultAP(data, meterType, meters, chosenMeter, initialDate, finalDate){

  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/energia/resultados/AP",
    search: "",
    state: {}
  };

  resultObject.queryResponseAll = data;
  
  resultObject.nonEmptyMeters = removeEmptyMeters(data);
  
  // resultObject.queryResponseRaw = data;

  resultObject.chartConfigs = makeChartConfigs(data, dateWithFourDigits(initialDate), dateWithFourDigits(finalDate));

  resultObject.queryResponse = data[0].Items[0];

  resultObject.totalValues = {};
  Object.keys(resultObject.chartConfigs).forEach(key => {
    const values = resultObject.chartConfigs[key].data.datasets[0].data;
    resultObject.totalValues[key] = values.reduce(
      (previous, current) => (previous += current)
    );
  });

  resultObject.unitNumber = "Todos medidores";

  resultObject.allUnits = true;

  resultObject.numOfUnits = resultObject.nonEmptyMeters.length;

  resultObject.unitName = resultObject.numOfUnits.toString() + " medidores";

  resultObject.typeText = false;

  resultObject.imageWidgetOneColumn = require("../../assets/icons/money_energy.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/plug_energy.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");;

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(resultObject.totalValues.kwh, 0) + " kWh";

  resultObject.widgetOneColumnSecondTitle = "Gasto";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(resultObject.totalValues.vbru, 2);

  resultObject.widgetThreeColumnsTitles = [
    "Demanda",
    "Ultrapass.",
    "Descontos",
    "Multas",
    "EREX",
    "UFER"
  ];

  resultObject.widgetThreeColumnsValues = [
    formatNumber(resultObject.demMax, 0) + " kW",
    "R$ " + formatNumber(resultObject.totalValues.vudf + resultObject.totalValues.vudp, 2),
    "R$ " + formatNumber(resultObject.totalValues.desc, 2),
    "R$ " + formatNumber(resultObject.totalValues.jma, 2),
    "R$ " + formatNumber(resultObject.totalValues.verexf + resultObject.totalValues.verexp, 2),
    formatNumber(resultObject.totalValues.uferf + resultObject.totalValues.uferp, 0)
  ];

  resultObject.widgetWithModalTitle = "Diagnóstico";

  resultObject.widgetWithModalButtonName = "Ver relatório";

  resultObject.rowNamesReportProblems = false;

  resultObject.problems = false;

  resultObject.numProblems = false;

  resultObject.demMax = Math.max(...resultObject.chartConfigs.dms.data.datasets[0].data);

  resultObject.initialDate = transformDateString(dateWithFourDigits(initialDate));
  
  resultObject.finalDate = transformDateString(dateWithFourDigits(finalDate));

  resultObject.itemsForChart = [
    "vbru",
    "vliq",
    "cip",
    "desc",
    "jma",
    "kwh",
    "kwhf",
    "kwhp",
    "dms",
    "vdff",
    "vdfp",
    "vudf",
    "vudp",
    "verexf",
    "verexp",
    "uferf",
    "uferp",
    "trib",
    "icms",
    "basec"
  ];

  resultObject.dropdownItems = {};
  
  resultObject.itemsForChart.forEach(key => {
    resultObject.dropdownItems[key] = resultObject.chartConfigs[key].options.title.text;
  });

  resultObject.chartReportTitle = "Gráfico do período";

  resultObject.chartReportTitleColSize = 3;

  resultObject.chartSubtitle = "Total: "

  resultObject.chartSubvalue = resultObject.unitName;

  resultObject.selectedDefault = "vbru";

  return resultObject;

}