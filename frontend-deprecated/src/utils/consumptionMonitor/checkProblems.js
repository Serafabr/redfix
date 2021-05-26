export default function checkProblems(queryResponseInput, chosenMeter, queryResponseAll, meters) {
  // Input: object (queryResponse). Obj: {aamm, basec, cip, datav, dc, dcf, dcp, desc, dff, dfp ,dmf, dmp,
  //                                      erexf, erexp, icms, jma, kwh, kwhf, kwhp, med, tipo, trib, vbru, vdff, bdfp,
  //                                      verexf, verexp, vliq, vudf, vudp}
  // Output: object with the problems. Obj: {erex, ultrap, multa, compensacao, dmedida, dcontratada, dfaturada}
  //          erex: {prob, valuep, valuefp}, .....
  // Purpose: Check the following problems. Case of problems:
  //              - The values for "erex, ultrapassagem, multa, compensação" are not 0;
  //              - If "tipo" is 2 and "demanda contratada, demanda medida (ponta e fora)" are 0;
  //              - If "tipo" is 1 and "demanda contrada, demanda medida (fora)" are 0;
  //              - Check "demanda faturada".

  let queryResponse = queryResponseInput[0].Items[0];

  let AllMetersIDs = {};
  meters.forEach(item => {
    let key = (parseInt(item.tipomed.N, 10) * 100 + parseInt(item.med.N, 10)).toString();
    AllMetersIDs[key] = item.id.S;
  })

  let problems = {};
  if(chosenMeter === "199"){
    problems = {
      dcp: { problem: false, value: queryResponse.dcp, metersIDs: [] },
      dcf: { problem: false, value: queryResponse.dcf, metersIDs: [] },
      dmp: { problem: false, value: queryResponse.dmp, metersIDs: [] },
      dmf: { problem: false, value: queryResponse.dmf, metersIDs: [] },
      dfp: { problem: false, value: queryResponse.dfp, expected: 0, metersIDs: [] },
      dff: { problem: false, value: queryResponse.dff, expected: 0, metersIDs: [] },
      vudp: { problem: false, value: queryResponse.vudp, metersIDs: [] },
      vudf: { problem: false, value: queryResponse.vudf, metersIDs: [] },
      verexp: { problem: false, value: queryResponse.verexp, metersIDs: [] },
      verexf: { problem: false, value: queryResponse.verexf, metersIDs: [] },
      jma: { problem: false, value: queryResponse.jma, metersIDs: [] },
      desc: { problem: false, value: queryResponse.desc, metersIDs: [] },
      tipo: { problem: false, value: queryResponse.tipo, metersIDs: [] }
    };
  } else {
    problems = {
      dcp: { problem: false, value: queryResponse.dcp },
      dcf: { problem: false, value: queryResponse.dcf },
      dmp: { problem: false, value: queryResponse.dmp },
      dmf: { problem: false, value: queryResponse.dmf },
      dfp: { problem: false, value: queryResponse.dfp, expected: 0 },
      dff: { problem: false, value: queryResponse.dff, expected: 0 },
      vudp: { problem: false, value: queryResponse.vudp },
      vudf: { problem: false, value: queryResponse.vudf },
      verexp: { problem: false, value: queryResponse.verexp },
      verexf: { problem: false, value: queryResponse.verexf },
      jma: { problem: false, value: queryResponse.jma },
      desc: { problem: false, value: queryResponse.desc },
      tipo: { problem: false, value: queryResponse.tipo }
    };
  }


  if(chosenMeter === "199"){
    // Check "EREX"
    if (queryResponse.verexf !== 0) {
      problems.verexf.problem = true;
      queryResponseAll.forEach(element => {
        if(element.Items.length > 0){
          if(element.Items[0].verexf > 0){
            problems.verexf.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
        }
      });
    }

    if (queryResponse.verexp !== 0) {
      problems.verexp.problem = true;
      queryResponseAll.forEach(element => {
        if(element.Items.length > 0){
          if(element.Items[0].verexp > 0){
            problems.verexp.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
        }
      });
    }

    // Check "ultrapassagem"
    if (queryResponse.vudf !== 0){
      problems.vudf.problem = true;
      queryResponseAll.forEach(element => {
        if(element.Items.length > 0){
          if(element.Items[0].vudf > 0){
            problems.vudf.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
        }
      });
    }

    if (queryResponse.vudp !== 0) {
      problems.vudp.problem = true;
      queryResponseAll.forEach(element => {
        if(element.Items.length > 0){
          if(element.Items[0].vudp > 0){
            problems.vudp.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
        }
      });
    }

    // Check "multa"
    if (queryResponse.jma !== 0) {
      problems.jma.problem = true;
      queryResponseAll.forEach(element => {
        if(element.Items.length > 0){
          if(element.Items[0].jma > 0){
            problems.jma.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
        }
      });
    }

    // Check "compensação"
    if (queryResponse.desc !== 0) {
      problems.desc.problem = true;
      queryResponseAll.forEach(element => {
        if(element.Items.length > 0){
          if(element.Items[0].desc > 0){
            problems.desc.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
        }
      });
    }

    queryResponseAll.forEach(element => {
    if(element.Items.length > 0){
      // Check "Demanda contrada, medida e faturada"
      switch (element.Items[0].tipo) {
        // Case type is "Verde"
        case 1:
          // "Contrada"
          if (element.Items[0].dcf === 0) {
            problems.dcf.problem = true;
            problems.dcf.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
          // "Medida"
          if (element.Items[0].dmf === 0) {
            problems.dmf.problem = true;
            problems.dmf.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
          // Check "demanda faturada"
          if (element.Items[0].dmf < element.Items[0].dcf) {
            if (element.Items[0].dff !== element.Items[0].dcf) {
              problems.dff.problem = true;
              problems.dff.metersIDs.push(AllMetersIDs[element.Items[0].med]);
            }
          } else {
            if (element.Items[0].dff !== element.Items[0].dmf) {
              problems.dff.problem = true;
              problems.dff.expected = element.Items[0].dmf;
              problems.dff.metersIDs.push(AllMetersIDs[element.Items[0].med]);
            }
          }
          break;

        // Case type is "Azul"
        case 2:
          // Contratada
          if (element.Items[0].dcp === 0) {
            problems.dcp.problem = true;
            problems.dcp.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
          if (element.Items[0].dcf === 0) {
            problems.dcf.problem = true;
            problems.dcf.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
          // Medida
          if (element.Items[0].dmp === 0) {
            problems.dmp.problem = true;
            problems.dmp.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
          if (element.Items[0].dmf === 0) {
            problems.dmf.problem = true;
            problems.dmf.metersIDs.push(AllMetersIDs[element.Items[0].med]);
          }
          // Check "demanda faturada"
          if (element.Items[0].dmp < element.Items[0].dcp) {
            if (element.Items[0].dfp !== element.Items[0].dcp) {
              problems.dfp.problem = true;
              problems.dfp.expected = element.Items[0].dcp;
              problems.dfp.metersIDs.push(AllMetersIDs[element.Items[0].med]);
            }
          } else {
            if (element.Items[0].dfp !== element.Items[0].dmp) {
              problems.dfp.problem = true;
              problems.dfp.expected = element.Items[0].dmp;
              problems.dmp.metersIDs.push(AllMetersIDs[element.Items[0].med]);
            }
          }
          if (element.Items[0].dmf < element.Items[0].dcf) {
            if (element.Items[0].dff !== element.Items[0].dcf) {
              problems.dff.problem = true;
              problems.dff.expected = element.Items[0].dcf;
              problems.dff.metersIDs.push(AllMetersIDs[element.Items[0].med]);
            }
          } else {
            if (element.Items[0].dff !== element.Items[0].dmf) {
              problems.dff.problem = true;
              problems.dff.expected = element.Items[0].dmf;
              problems.dff.metersIDs.push(AllMetersIDs[element.Items[0].med]);
            }
          }
        break;
        default:
        break;
      }
    }



















    });






////////////////////////////////////////////////// CASE ONE METER ///////////////



  } else {
    if (queryResponse.verexf !== 0) {
      problems.verexf.problem = true;
    }

    if (queryResponse.verexp !== 0) {
      problems.verexp.problem = true;
    }

    // Check "ultrapassagem"
    if (queryResponse.vudf !== 0){
      problems.vudf.problem = true;
    }

    if (queryResponse.vudp !== 0) {
      problems.vudp.problem = true;
    }

    // Check "multa"
    if (queryResponse.jma !== 0) {
      problems.jma.problem = true;
    }

    // Check "compensação"
    if (queryResponse.desc !== 0) {
      problems.desc.problem = true;
    }
  
    // Check "Demanda contrada, medida e faturada"
    switch (queryResponse.tipo) {
      // Case type is "Verde"
      case 1:
        // "Contrada"
        if (queryResponse.dcf === 0) {
          problems.dcf.problem = true;
        }
        // "Medida"
        if (queryResponse.dmf === 0) {
          problems.dmf.problem = true;
        }
        // Check "demanda faturada"
        if (queryResponse.dmf < queryResponse.dcf) {
          if (queryResponse.dff !== queryResponse.dcf) {
            problems.dff.problem = true;
          }
        } else {
          if (queryResponse.dff !== queryResponse.dmf) {
            problems.dff.problem = true;
            problems.dff.expected = queryResponse.dmf;
          }
        }
        break;

      // Case type is "Azul"
      case 2:
        // Contratada
        if (queryResponse.dcp === 0) {
          problems.dcp.problem = true;
        }
        if (queryResponse.dcf === 0) {
          problems.dcf.problem = true;
        }
        // Medida
        if (queryResponse.dmp === 0) {
          problems.dmp.problem = true;
        }
        if (queryResponse.dmf === 0) {
          problems.dmf.problem = true;
        }
        // Check "demanda faturada"
        if (queryResponse.dmp < queryResponse.dcp) {
          if (queryResponse.dfp !== queryResponse.dcp) {
            problems.dfp.problem = true;
            problems.dfp.expected = queryResponse.dcp;
          }
        } else {
          if (queryResponse.dfp !== queryResponse.dmp) {
            problems.dfp.problem = true;
            problems.dfp.expected = queryResponse.dmp;
          }
        }
        if (queryResponse.dmf < queryResponse.dcf) {
          if (queryResponse.dff !== queryResponse.dcf) {
            problems.dff.problem = true;
            problems.dff.expected = queryResponse.dcf;
          }
        } else {
          if (queryResponse.dff !== queryResponse.dmf) {
            problems.dff.problem = true;
            problems.dff.expected = queryResponse.dmf;
          }
        }
      break;
      default:
      break;
    }
  }
  return problems;
}
