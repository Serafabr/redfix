import transformDateString from "./transformDateString";
import dateWithFourDigits from "./dateWithFourDigits";
import formatNumber from "./formatText";
import applyFuncToAttr from "./objectOperations";
import getMeterTypeText from "./getMeterTypeText";
import makeChartConfigsWater from "./makeChartConfigsWater";

export default function buildResultOPwater(data, meterType, meters, chosenMeter, initialDate, finalDate){

  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/agua/resultados/OP",
    search: "",
    state: {}
  };

  resultObject.chartConfigs = makeChartConfigsWater(data, dateWithFourDigits(initialDate), dateWithFourDigits(finalDate));

  resultObject.queryResponse = data[0].Items;

  const { Items } = data[0];

  resultObject.totalConsf = applyFuncToAttr(Items, "consf", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.totalSubtotal = applyFuncToAttr(Items, "subtotal", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.consfMax = Math.max(
    applyFuncToAttr(Items, "consf", Math.max)
  );

  resultObject.consfMin = applyFuncToAttr(Items, "consf", Math.min);

  resultObject.demMin = 0;

  // if (resultObject.demMinFP === 0) {
  //   resultObject.demMin = resultObject.demMinP;
  // } else if (resultObject.demMinP === 0) {
  //   resultObject.demMin = resultObject.demMinFP;
  // } else resultObject.demMin = Math.min(resultObject.demMinFP, resultObject.demMinP);

  resultObject.vaguSum = applyFuncToAttr(Items, "vagu", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.vesgSum += applyFuncToAttr(Items, "vesg", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.adicSum = applyFuncToAttr(Items, "adic", (...values) =>
    values.reduce((previous, current) => (current += previous))
  );

  resultObject.lastType = 0;
  
  // Items.forEach(item => {
  //   let lastDate = false;
  //   if (lastDate || item.aamm > lastDate) {
  //     lastDate = item.aamm;
  //     resultObject.lastType = item.tipo;
  //   }
  // });

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

  resultObject.typeText = "Medidor - CAESB";

  resultObject.imageWidgetOneColumn = require("../../assets/icons/water_drop.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/water_shower.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(resultObject.totalConsf, 0) + " m³";

  resultObject.widgetOneColumnSecondTitle = "Gasto";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(resultObject.totalSubtotal, 2);

  resultObject.widgetThreeColumnsTitles = [
    "Consumo faturado mínimo",
    "Consumo faturado máximo",
    "Total de adicionais",
    "Total água",
    "Total esgoto",
    "Total"
  ];
  resultObject.widgetThreeColumnsValues = [
    formatNumber(resultObject.consfMax, 0) + " m³",
    formatNumber(resultObject.consfMin, 0) + " m³",
    "R$ " + formatNumber(resultObject.adicSum, 2),
    "R$ " + formatNumber(resultObject.vaguSum, 2),
    "R$ " + formatNumber(resultObject.vesgSum, 2),
    "R$ " + formatNumber(resultObject.totalSubtotal, 2)
  ];

  // resultObject.widgetWithModalTitle = "Diagnóstico";

  // resultObject.widgetWithModalButtonName = "Ver relatório";

  // resultObject.rowNamesReportProblems = false;

  // resultObject.problems = false;

  // resultObject.numProblems = false;

  resultObject.rowNamesInfo = [
    { name: "Identificação CAESB", attr: "id" },
    { name: "Nome do medidor", attr: "nome" },
    { name: "Contrato", attr: "ct" },
    { name: "Categoria", attr: "cat" },
    { name: "Hidrômetro", attr: "hidrom" },
    { name: "Locais", attr: "locais" },
    { name: "Observações", attr: "obs" }
  ];

  resultObject.type = resultObject.queryResponse[resultObject.queryResponse.length - 1].tipo;

  resultObject.itemsForChart = [
    "dif",
    "consm",
    "consf",
    "vagu",
    "vesg",
    "adic",
    "subtotal",
    "cofins",
    "irpj",
    "csll",
    "pasep"
  ];

  resultObject.dropdownItems = {};
  
  resultObject.itemsForChart.forEach(key => {
    resultObject.dropdownItems[key] = resultObject.chartConfigs[key].options.title.text;
  });

  resultObject.chartReportTitle = "Gráfico do período";

  resultObject.chartReportTitleColSize = 3;

  resultObject.chartSubtitle = "Medidor:"

  resultObject.chartSubvalue = resultObject.unitName;

  resultObject.selectedDefault = "subtotal";

  return resultObject;

}