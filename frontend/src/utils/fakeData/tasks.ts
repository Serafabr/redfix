

type Task = {
  id: string,
  task: string,
  status: string,
  place: string,
  dateEnd: string,
}

type Tasks = Array<Task>;

export const tasks: Tasks = [
    {
      id: '1254',
      task: 'Manutenção no vazamento do banheiro do gabinete 14. ',
      status: 'Em andamento',
      place: 'Gabinete 14 - Senador Kajuru',
      dateEnd: '10/05/2021',
    }, 
    {
      id: '1542',
      task: 'Trocar todas as lâmpadas da Coemant.',
      status: 'Em análise',
      place: 'Sala da Coemant',
      dateEnd: '01/06/2021',
    }, 
    {
      id: '1546',
      task: 'Verificar todos os disjuntores do quadro geral do segundo andar do Edifício Anexo I. Nos últimos dias, houve quedas constantes de energia em todos os gabinetes deste andar.',
      status: 'Concluído',
      place: 'Edifício Anexo I',
      dateEnd: '12/05/2021',
    }, 
    {
      id: '1543',
      task: 'Verificar todos os banheiros do quinto andar do Edifício Anexo I. Estamos tendo reclamações constantes de vazamento.',
      status: 'Em andamento',
      place: 'Edifício Anexo I',
      dateEnd: '04/05/2021',
    }, 
    {
      id: '2354',
      task: 'Fazer a limpeza em todas as subestações do Senado Federal.',
      status: 'Em andamento',
      place: 'Subestações',
      dateEnd: '22/05/2021',
    }, 
    {
      id: '2153',
      task: 'Trocar o óleo do grupo motor-gerador n. 001.',
      status: 'Concluído',
      place: 'Grupo motor-gerador n. 001',
      dateEnd: '16/05/2021',
    }, 
    {
      id: '1258',
      task: 'Refazer a vedação do encanamento dos vasos sanitários do Gabinete 13.',
      status: 'Cancelado',
      place: 'Gabinete 13 - Pacheco',
      dateEnd: '15/05/2021',
    }, 
    {
      id: '1856',
      task: 'Trocar todos os parafusos do motor X.',
      status: 'Em andamento',
      place: 'Grupo motor-gerador',
      dateEnd: '27/05/2021',
    }, 
    {
      id: '1754',
      task: 'Refazer o revestimento e pintar na cor gelo.',
      status: 'Concluído',
      place: 'Seplag',
      dateEnd: '17/05/2021',
    }, 
    {
      id: '1645',
      task: 'Refazer o revestimento e pintar na cor amarela.',
      status: 'Fila de Espera',
      place: 'Coproj',
      dateEnd: '10/05/2021',
    }, 
    {
      id: '1436',
      task: 'Refazer o revestimento e pintar na cor branca.',
      status: 'Em andamento',
      place: 'COPELI',
      dateEnd: '13/05/2021',
    }, 
    {
      id: '1489',
      task: 'Aplicar verniz em todos os bancos de madeira do jardim.',
      status: 'Concluído',
      place: 'Jardim - Anexo II',
      dateEnd: '14/05/2021',
    }, 
    {
      id: '2578',
      task: 'Trocar o suporte para a TV.',
      status: 'Concluído',
      place: 'Gabinete 19 - José Serra',
      dateEnd: '21/05/2021',
    }, 
    {
      id: '3453',
      task: 'Chuveiro com problemas para esquentar a água. Trocar resistência.',
      status: 'Em andamento',
      place: 'Apartamento 105 - SQS 309',
      dateEnd: '18/05/2021',
    }, 
    {
      id: '3457',
      task: 'Todas as torneiras do banheiro da Coemant estão com vazamento. Verificar a pressão da água.',
      status: 'Fila de Espera',
      place: 'Coemant',
      dateEnd: '08/05/2021',
    }, 
    {
      id: '2467',
      task: 'Descarga fazendo muito barulho. Gabinete 18.',
      status: 'Fila de Espera',
      place: 'Gabinete 18',
      dateEnd: '11/05/2021',
    }, 
    {
      id: '1576',
      task: 'Trocar o quadro de energia elétrica do apartamento 123, SQS 309. O quadro atual está sem a porta.',
      status: 'Cancelado',
      place: 'Apartamento 123, SQS 309',
      dateEnd: '06/05/2021',
    }, 
    {
      id: '3751',
      task: 'Reclamação de choques recorrentes ao utilizar a torneira da cozinha. Verificar aterramento.',
      status: 'Suspenso',
      place: 'Apartamento 123, SQS 309',
      dateEnd: '08/05/2021',
    }, 
    {
      id: '1453',
      task: 'Encontrar a melhor solução para as quedas constantes de energia na sala da Secom. Reportar para a Coemant.',
      status: 'Fila de Espera',
      place: 'Secom',
      dateEnd: '04/05/2021',
    }, 
    {
      id: '2475',
      task: 'Trocar o gesso de todas as salas na Sadcon.',
      status: 'Executado',
      place: 'Sadcon',
      dateEnd: '02/05/2021',
    }, 
    {
      id: '3476',
      task: 'Projeto para contratação de grupo motor-gerador.',
      status: 'Executado',
      place: 'Grupo motor-gerador',
      dateEnd: '01/05/2021',
    }, 
  ];

export const taskColumns = [
    { Header: 'ID', id: 'id', accessor: (data: Task) => data.id },
    { Header: 'Tarefa', id: 'task', accessor: (data: Task) => data.task },
    { Header: 'Status', id: 'status', accessor: (data: Task) => data.status },
    { Header: 'Localização', id: 'place', accessor: (data: Task) => data.place },
    { Header: 'Prazo', id: 'dateEnd', accessor: (data: Task) => data.dateEnd },
  ];