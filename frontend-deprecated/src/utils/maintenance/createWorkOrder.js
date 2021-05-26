import dateToStr from "./dateToStr";

export default function createWorkOrder(state){
  return new Promise((resolve, reject) => {
    
    console.clear();

    let status1 = state.status1 === undefined ? "" : state.status1;
    let prioridade = state.prioridade === undefined ? "" : state.prioridade;
    let origem = state.origem === undefined ? "" : state.origem;
    let responsavel = state.responsavel === undefined ? "" : state.responsavel;
    let categoria = state.categoria === undefined ? "" : state.categoria;
    let servico = state.servico === undefined ? "" : state.servico;
    let descricao = state.descricao === undefined ? "" : state.descricao;
    let data_inicial = state.data_inicial === undefined ? "" : state.data_inicial;
    let data_prazo = state.data_prazo === undefined ? "" : state.data_prazo;
    let realizado = state.realizado === undefined ? 0 : state.realizado;
    let data_criacao = state.data_criacao === undefined ? "" : state.data_criacao;
    let data_atualiz = state.data_atualiz === undefined ? "" : state.data_atualiz;
    let sigad = state.sigad === undefined ? "" : state.sigad;
    let solic_orgao = state.solic_orgao === undefined ? "" : state.solic_orgao;
    let solic_nome = state.solic_nome === undefined ? "" : state.solic_nome;
    let contato_nome = state.contato_nome === undefined ? "" : state.contato_nome;
    let contato_email = state.contato_email === undefined ? "" : state.contato_email;
    let contato_tel = state.contato_tel === undefined ? "" : state.contato_tel;
    let mensagem = state.mensagem === undefined ? "" : state.mensagem;
    let orcamento = state.orcamento === undefined ? "" : state.orcamento;
    let conferido = state.conferido === undefined ? "" : state.conferido;
    let lugar = state.lugar === undefined ? "" : state.lugar;
    let executante = state.executante === undefined ? "" : state.executante;
    let os_num = state.os_num === undefined ? "" : state.os_num;
    let ans = state.ans === undefined ? "" : state.ans;
    let status2 = state.status2 === undefined ? "" : state.status2;
    let multitarefa = state.multitarefa === undefined ? "" : state.multitarefa;
    let assetsList = [];
    if(state.assetsList.length === 1 && state.assetsList[0] === ""){
      reject("É necessário selecionar um ativo para cadastrar a OS.");
    } else {
      assetsList = state.assetsList.filter(asset => (
        asset !== ""
      ));
    }

    let body = {
      status1,
      prioridade,
      origem,
      responsavel,
      categoria,
      servico,
      descricao,
      data_inicial,
      data_prazo,
      realizado,
      data_criacao,
      data_atualiz,
      sigad,
      solic_orgao,
      solic_nome,
      contato_nome,
      contato_email,
      contato_tel,
      mensagem,
      orcamento,
      conferido,
      lugar,
      executante,
      os_num,
      ans,
      status2,
      multitarefa,
      assetsList
    };

    fetch('http://172.23.22.198:3001/manutencao/os/nova', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(()=>console.log('erro /nova'));
  });
}