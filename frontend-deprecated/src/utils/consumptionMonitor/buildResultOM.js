import transformDateString from "./transformDateString";
import dateWithFourDigits from "./dateWithFourDigits";
import formatNumber from "./formatText";
import checkProblems from "./checkProblems";
import getMeterTypeText from "./getMeterTypeText";

export default function buildResultOM(data, meterType, meters, chosenMeter, initialDate, finalDate){
  
  let resultObject = {};

  resultObject.newLocation = {
    hash: "",
    pathname: "/energia/resultados/OM",
    search: "",
    state: {}
  };

  resultObject.queryResponse = data[0].Items[0];
  
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

  resultObject.typeText = getMeterTypeText(resultObject.queryResponse.tipo);

  resultObject.imageWidgetOneColumn = require("../../assets/icons/money_energy.png");

  resultObject.imageWidgetThreeColumns = require("../../assets/icons/plug_energy.png");

  resultObject.imageWidgetWithModal = require("../../assets/icons/alert_icon.png");

  resultObject.widgetOneColumnFirstTitle = "Consumo";

  resultObject.widgetOneColumnFirstValue = formatNumber(resultObject.queryResponse.kwh, 0) + " kWh";

  resultObject.widgetOneColumnSecondTitle = "Valor bruto";

  resultObject.widgetOneColumnSecondValue = "R$ " + formatNumber(resultObject.queryResponse.vbru, 2);

  resultObject.threeColumnValues = {
    0: {
      titles: [
        "Total",
        "CIP",
        "Tributos",
        "ICMS",
        "Multas/Juros",
        "Compensação"
      ],
      values: [
        "R$ " + formatNumber(resultObject.queryResponse.vbru, 2),
        "R$ " + formatNumber(resultObject.queryResponse.cip, 2),
        "R$ " + formatNumber(resultObject.queryResponse.trib, 2),
        "R$ " + formatNumber(resultObject.queryResponse.icms, 2),
        "R$ " + formatNumber(resultObject.queryResponse.jma, 2),
        "R$ " + formatNumber(resultObject.queryResponse.desc, 2)
      ]
    },
    1: {
      titles: [
        "Demanda FP",
        "Demanda P",
        "Contrato FP",
        "Contrato P",
        "Faturado FP",
        "Faturado P"
      ],
      values: [
        formatNumber(resultObject.queryResponse.dmf, 0) + " kW",
        formatNumber(resultObject.queryResponse.dmp, 0) + " kW",
        formatNumber(resultObject.queryResponse.dcf, 0) + " kW",
        formatNumber(resultObject.queryResponse.dcp, 0) + " kW",
        formatNumber(resultObject.queryResponse.dff, 0) + " kW",
        formatNumber(resultObject.queryResponse.dfp, 0) + " kW"
      ]
    },
    2: {
      titles: [
        "Demanda FP",
        "Demanda P",
        "Contrato FP",
        "Contrato P",
        "Faturado FP",
        "Faturado P"
      ],
      values: [
        formatNumber(resultObject.queryResponse.dmf, 0) + " kW",
        formatNumber(resultObject.queryResponse.dmp, 0) + " kW",
        formatNumber(resultObject.queryResponse.dcf, 0) + " kW",
        formatNumber(resultObject.queryResponse.dcp, 0) + " kW",
        formatNumber(resultObject.queryResponse.dff, 0) + " kW",
        formatNumber(resultObject.queryResponse.dfp, 0) + " kW"
      ]
    }
  };

  resultObject.widgetThreeColumnsTitles = resultObject.threeColumnValues[resultObject.queryResponse.tipo].titles;

  resultObject.widgetThreeColumnsValues = resultObject.threeColumnValues[resultObject.queryResponse.tipo].values;

  resultObject.widgetWithModalTitle = "Diagnóstico";

  resultObject.widgetWithModalButtonName = "Ver relatório";

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

  resultObject.rowNamesBill = [
    {
      name: "Consumo",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Horário ponta",
      type: "sub-1",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Consumo registrado",
      type: "hover-line sub-2",
      unit: "kWh",
      attr: "kwhp",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "Tarifa",
      type: "hover-line sub-2",
      unit: "R$/kWh",
      attr: "",
      var: true,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Valor",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "",
      var: true,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Horário fora de ponta",
      type: "sub-1",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Consumo registrado",
      type: "hover-line sub-2",
      unit: "kWh",
      attr: "kwhf",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Consumo faturado",
      type: "hover-line sub-2",
      unit: "kWh",
      attr: "confat",
      var: true,
      mean: true,
      showInTypes: [0]
    },
    {
      name: "Tarifa",
      type: "hover-line sub-2",
      unit: "R$/kWh",
      attr: "",
      var: true,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Valor",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "",
      var: true,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Consumo total",
      type: "hover-line sub-1",
      unit: "kWh",
      attr: "kwh",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Valor total",
      type: "hover-line sub-1",
      unit: "R$",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Demanda",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Horário ponta",
      type: "sub-1",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Medido",
      type: "hover-line sub-2",
      unit: "kW",
      attr: "dmp",
      var: true,
      mean: true,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Contratado",
      type: "hover-line sub-2",
      unit: "kW",
      attr: "dcp",
      var: false,
      mean: false,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Faturado",
      type: "hover-line sub-2",
      unit: "kW",
      attr: "dfp",
      var: true,
      mean: true,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Tarifa",
      type: "hover-line sub-2",
      unit: "R$/kW",
      attr: "",
      var: true,
      mean: false,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Valor faturado",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "vdfp",
      var: true,
      mean: true,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Ultrapassagem",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "vudp",
      var: true,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Horário fora de ponta",
      type: "sub-1",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      justBlue: true,
      showInTypes: [2]
    },
    {
      name: "Medido",
      type: "hover-line sub-2",
      unit: "kW",
      attr: "dmf",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "Contratado",
      type: "hover-line sub-2",
      unit: "kW",
      attr: "dcf",
      var: false,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Faturado",
      type: "hover-line sub-2",
      unit: "kW",
      attr: "dff",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "Tarifa",
      type: "hover-line sub-2",
      unit: "R$/kW",
      attr: "",
      var: true,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Valor faturado",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "vdff",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "Ultrapassagem",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "vudf",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "Energia reativa",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "EREX P",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "verexp",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "EREX FP",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "verexf",
      var: true,
      mean: true,
      showInTypes: [1, 2]
    },
    {
      name: "Valor total",
      type: "hover-line sub-1",
      unit: "R$",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [1, 2]
    },
    {
      name: "Tributos",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Base de cáculo",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "basec",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Valor total",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "trib",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Resumo dos valores",
      type: "main",
      unit: "",
      attr: "",
      var: false,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Energia",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "",
      var: true,
      mean: false,
      showInTypes: [0, 1, 2]
    },
    {
      name: "CIP",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "cip",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Descontos/Compensação",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "desc",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Juros/Multas",
      type: "hover-line sub-2",
      unit: "R$",
      attr: "jma",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Total bruto",
      type: "hover-line main",
      unit: "R$",
      attr: "vbru",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    },
    {
      name: "Total líquido",
      type: "hover-line main",
      unit: "R$",
      attr: "vliq",
      var: true,
      mean: true,
      showInTypes: [0, 1, 2]
    }
  ];

  resultObject.type = resultObject.queryResponse.tipo;

  resultObject.date = resultObject.queryResponse.aamm;

  resultObject.problems = checkProblems(data, chosenMeter, resultObject.queryResponseAll, meters);
  
  resultObject.numProblems = 0;
  Object.keys(resultObject.problems).forEach(key => {
    if (resultObject.problems[key].problem === true) resultObject.numProblems += 1;
  });


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
 
  return resultObject;

}