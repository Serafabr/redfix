import { i, medList } from "./CEBcsvData";

export default function buildCEBParamsArr(arr, tableName) {
  // Discard header
  let numColumns = 102;
  let noHeader = arr.splice(numColumns);

  // Remove last element (empty element because the last character in CEB csv file is ;)
  noHeader.pop();
  // console.log('noHeader:');
  // console.log(noHeader);

  // Split big array into many arrays (each small array represents a meter in CEB csv file)
  let lines = [];
  while (noHeader.length > 0) {
    lines.push(noHeader.splice(0, numColumns));
  }

  let noHeaderNumbers = [];
  lines.forEach((line, index) => {
    noHeaderNumbers.push([]);
    line.forEach(element => {
      noHeaderNumbers[index].push(Number(element));
    });
  });

  // console.log("noHeaderNumbers:");
  // console.log(noHeaderNumbers);

  let attributesArr = [];

  noHeaderNumbers.forEach(meter => {
    // Attributes that does not depend on 'tipo'
    let med = medList[meter[i.med]];
    let aamm = meter[i.aamm];
    let datav = meter[i.datav];
    let icms = meter[i.icms];
    let cip = meter[i.cip];
    let trib = meter[i.cofins] + meter[i.irrf] + meter[i.csll] + meter[i.pis];
    let jma = meter[i.jma_energia] + meter[i.jma_cip];
    let desc = meter[i.desc];
    let basec = meter[i.basec];
    let vliq = meter[i.vliq];
    let vbru = meter[i.vbru];
    let kwhp = meter[i.kwhp];
    let dmp = meter[i.dmp];
    let dmf = meter[i.dmf];
    let dfp = meter[i.dfp];
    let uferp = meter[i.uferp];
    let uferf = meter[i.uferf];
    let verexp = meter[i.verexp] / (1 - meter[i.aliqicms] / 100);
    let verexf = meter[i.verexf] / (1 - meter[i.aliqicms] / 100);
    let vdfp = meter[i.vdfp] / (1 - meter[i.aliqicms] / 100);
    let vudp = meter[i.vudp] / (1 - meter[i.aliqicms] / 100);

    // Attributes that depend on 'tipo'
    let tipo = 0;
    if (meter[i.dmp] !== 0) {
      tipo = 2;
    } else {
      if (meter[i.dff_tipo_1] !== 0) {
        tipo = 1;
      }
    }

    let kwh = 0;
    let confat = 0;
    let kwhf = 0;
    let dff = 0;
    let vdff = 0;
    let vudf = 0;
    let dcp = 0;
    let dcf = 0;

    if (tipo === 0) {
      kwh = meter[i.kwh_tipo_0];
      confat = meter[i.confat_tipo_0];
      kwhf = meter[i.kwhf_tipo_0];
      dff = 0;
      vdff = 0;
      vudf = 0;
      dcp = 0;
      dcf = 0;
    }

    if (tipo === 1) {
      kwh = meter[i.kwh_tipo_1];
      confat = 0;
      kwhf = meter[i.kwhf_tipo_1];
      dff = meter[i.dff_tipo_1];
      vdff = meter[i.vdff_tipo_1] / (1 - meter[i.aliqicms] / 100);
      vudf = meter[i.vudf_tipo_1] / (1 - meter[i.aliqicms] / 100);
      dcp = 0;
      dcf = meter[i.dcf_tipo_1];
    }

    if (tipo === 2) {
      kwh = meter[i.kwh_tipo_2];
      confat = 0;
      kwhf = meter[i.kwhf_tipo_2];
      dff = meter[i.dff_tipo_2];
      vdff = meter[i.vdff_tipo_2] / (1 - meter[i.aliqicms] / 100);
      vudf = meter[i.vudf_tipo_2] / (1 - meter[i.aliqicms] / 100);
      dcp = meter[i.dcp_tipo_2];
      dcf = meter[i.dcf_tipo_2];
    }

    attributesArr.push({
      PutRequest: {
        Item: {
          med: {
            N: med.toString()
          },
          aamm: {
            N: aamm.toString().slice(2)
          },
          tipo: {
            N: tipo.toString()
          },
          datav: {
            N: datav.toString()
          },
          kwh: {
            N: kwh.toString()
          },
          confat: {
            N: confat.toString()
          },
          icms: {
            N: icms.toString()
          },
          cip: {
            N: cip.toString()
          },
          trib: {
            N: trib.toFixed(2)
          },
          jma: {
            N: jma.toFixed(2)
          },
          desc: {
            N: desc.toString()
          },
          basec: {
            N: basec.toString()
          },
          vliq: {
            N: vliq.toString()
          },
          vbru: {
            N: vbru.toString()
          },
          kwhp: {
            N: kwhp.toString()
          },
          kwhf: {
            N: kwhf.toString()
          },
          dmp: {
            N: dmp.toString()
          },
          dmf: {
            N: dmf.toString()
          },
          dfp: {
            N: dfp.toString()
          },
          dff: {
            N: dff.toString()
          },
          uferp: {
            N: uferp.toString()
          },
          uferf: {
            N: uferf.toString()
          },
          verexp: {
            N: verexp.toFixed(2)
          },
          verexf: {
            N: verexf.toFixed(2)
          },
          vdfp: {
            N: vdfp.toFixed(2)
          },
          vdff: {
            N: vdff.toFixed(2)
          },
          vudp: {
            N: vudp.toFixed(2)
          },
          vudf: {
            N: vudf.toFixed(2)
          },
          dcp: {
            N: dcp.toString()
          },
          dcf: {
            N: dcf.toString()
          }
        }
      }
    });
  });

  // console.log("attributesArr:");
  // console.log(attributesArr);

  let maxLength = 25;
  let paramsArr = [];
  while (attributesArr.length > 0) {
    paramsArr.push({
      RequestItems: { [tableName]: attributesArr.splice(0, maxLength) }
    });
  }
  return paramsArr;
}
