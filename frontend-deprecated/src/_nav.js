import paths from './paths';

export default {
  items: [
    {
      name: "Painel",
      url: '/painel',
      icon: "cui-chart"
    },
    {
      name: "Edifícios",
      url: paths.facility.all,
      icon: "icon-home"
    },
    {
      name: "Equipamentos",
      url: paths.appliance.all,
      icon: "icon-rocket"
    },
    {
      name: "Tarefas",
      url: paths.task.all,
      icon: "icon-list"
    },
    {
      name: "Estoques",
      url: paths.contract.all,
      icon: "fa fa-file-text-o"
    },
    {
      name: "Espec. Técnicas",
      url: paths.spec.all,
      icon: "icon-list"
    },
    // {
    //   name: "Pessoas",
    //   url: paths.person.all,
    //   icon: "icon-user"
    // },
    {
      name: "Equipes",
      url: paths.team.all,
      icon: "icon-people"
    },
  ]
};
