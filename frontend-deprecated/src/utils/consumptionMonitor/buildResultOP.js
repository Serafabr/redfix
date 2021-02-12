import transformDateString from "./transformDateString";
import dateWithFourDigits from "./dateWithFourDigits";
import formatNumber from "./formatText";
import applyFuncToAttr from "./objectOperations";
import getMeterTypeText from "./getMeterTypeText";
import makeChartConfigs from "./makeChartConfigs";

export default function buildResultOP(data, meterType, meters, chosenMeter, initialDate, finalDate){

  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/energia/resultados/OP",
    search: "",
    state: {}
  };

  resultObject.chartConfigs = makeChartConfigs(data, dateWithFourDigits(initialDate), dateWithFourDigits(finalDate));

  resultObject.queryResponse = data[0].Items;

  const { Items } = data[0];

  resultObject.totalKWh = applyFuncToAttr(Items, "kwh", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.totalVbru = applyFuncToAttr(Items, "vbru", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.demMax = Math.max(
    applyFuncToAttr(Items, "dmf", Math.max),
    applyFuncToAttr(Items, "dmp", Math.max)
  );

  resultObject.demMinFP = applyFuncToAttr(Items, "dmf", Math.min);

  resultObject.demMinP = applyFuncToAttr(Items, "dmp", Math.min);

  resultObject.demMin = 0;

  if (resultObject.demMinFP === 0) {
    resultObject.demMin = resultObject.demMinP;
  } else if (resultObject.demMinP === 0) {
    resultObject.demMin = resultObject.demMinFP;
  } else resultObject.demMin = Math.min(resultObject.demMinFP, resultObject.demMinP);

  resultObject.consMax = applyFuncToAttr(Items, "kwh", Math.max);

  resultObject.consMin = applyFuncToAttr(Items, "kwh", Math.min);

  resultObject.erexSum = applyFuncToAttr(Items, "verexf", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.erexSum += applyFuncToAttr(Items, "verexp", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.multaSum = applyFuncToAttr(Items, "jma", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.lastType = false;
  Items.forEach(item => {
    let lastDate = false;
    if (lastDate || item.aamm > lastDate) {
      lastDate = item.aamm;
      resultObject.lastType = item.tipo;
    }
  });

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

  resultObject.dateString = transformDateString(applyFuncToAttr(resultObject.queryResponse, "aamm", Math.max));

  resultObject.typeText = getMeterTypeText(resultObject.lastType);

  resultObject.imageWidgetOneColumn = require("../../assets/icons/money_energy.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/plug_energy.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(resultObject.totalKWh, 0) + " kWh";

  resultObject.widgetOneColumnSecondTitle = "Gasto";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(resultObject.totalVbru, 2);

  resultObject.widgetThreeColumnsTitles = [
    "Dem. máx.",
    "Dem. mín.",
    "Cons. máx.",
    "Cons. mín.",
    "EREX",
    "Multas"
  ];
  resultObject.widgetThreeColumnsValues = [
    formatNumber(resultObject.demMax, 0) + " kW",
    formatNumber(resultObject.demMin, 0) + " kW",
    formatNumber(resultObject.consMax, 0) + " kWh",
    formatNumber(resultObject.consMin, 0) + " kWh",
    "R$ " + formatNumber(resultObject.erexSum, 2),
    "R$ " + formatNumber(resultObject.multaSum, 2)
  ];

  resultObject.widgetWithModalTitle = "Diagnóstico";

  resultObject.widgetWithModalButtonName = "Ver relatório";

  resultObject.rowNamesReportProblems = false;

  resultObject.problems = false;

  resultObject.numProblems = false;

  resultObject.rowNamesInfo = [
    { name: "Identificação CEB", attr: "id" },
    { name: "Nome do medidor", attr: "nome" },
    { name: "Contrato", attr: "ct" },
    { name: "Classe", attr: "classe" },
    { name: "Subclasse", attr: "subclasse" },
    { name: "Grupo", attr: "grupo" },
    { name: "Subgrupo", attr: "subgrupo" },
    { name: "Ligação", attr: "lig" },
    { name: "Modalidade tarifária", attr: "modtar" },
    { name: "Locais", attr: "locais" },
    { name: "Demanda contratada (FP/P)", attr: "dem" },
    { name: "Observações", attr: "obs" }
  ];

  resultObject.type = resultObject.queryResponse[resultObject.queryResponse.length - 1].tipo;

  resultObject.itemsForChart = [
    "vbru",
    "vliq",
    "cip",
    "desc",
    "jma",
    "kwh",
    "confat",
    "kwhf",
    "kwhp",
    "dms",
    "dmf",
    "dmp",
    "dcf",
    "dcp",
    "dff",
    "dfp",
    "vdff",
    "vdfp",
    "vudf",
    "vudp",
    "tipo",
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

  resultObject.chartSubtitle = "Medidor:"

  resultObject.chartSubvalue = resultObject.unitName;

  resultObject.selectedDefault = "vbru";

  return resultObject;

}