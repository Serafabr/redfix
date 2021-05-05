// Import icons
import panel from '../assets/icons/sidebar/grid.svg';
import panelDual from '../assets/icons/sidebar/dualColor/grid.svg';
import task from '../assets/icons/sidebar/notes-paper.svg';
import taskDual from '../assets/icons/sidebar/dualColor/notes-paper.svg';
import plan from '../assets/icons/sidebar/tools-wench.svg';
import project from '../assets/icons/sidebar/folder-file.svg';
import projectDual from '../assets/icons/sidebar/dualColor/folder-file.svg';
import planDual from '../assets/icons/sidebar/dualColor/tools-wench.svg';
import monitor from '../assets/icons/sidebar/graph.svg';
import monitorDual from '../assets/icons/sidebar/dualColor/graph.svg';
import finance from '../assets/icons/sidebar/dollar-sign.svg';
import financeDual from '../assets/icons/sidebar/dualColor/dollar-sign.svg';
import facility from '../assets/icons/sidebar/building.svg';
import facilityDual from '../assets/icons/sidebar/dualColor/building.svg';
import equipament from '../assets/icons/sidebar/charger.svg';
import equipamentDual from '../assets/icons/sidebar/dualColor/charger.svg';
import depot from '../assets/icons/sidebar/shipment-box.svg';
import depotDual from '../assets/icons/sidebar/dualColor/shipment-box.svg';
import spec from '../assets/icons/sidebar/notes-tasks.svg';
import specDual from '../assets/icons/sidebar/dualColor/notes-tasks.svg';
import team from '../assets/icons/sidebar/users.svg';
import teamDual from '../assets/icons/sidebar/dualColor/users.svg';
import user from '../assets/icons/sidebar/id-card.svg';
import userDual from '../assets/icons/sidebar/dualColor/id-card.svg';

import { paths } from './paths';


// Sidebar items
export const navItems = [
  {
    groupLabel: undefined,
    items: [
      {label: "Painel", path: paths.main.dashboard, icon: panel, hoveredIcon: panelDual},
    ],
  },
  {
    groupLabel: "Manutenções",
    items: [
      {label: "Tarefas", path: paths.tasks.all, icon: task, hoveredIcon: taskDual},
      {label: "Projetos", path: paths.projects.all, icon: project, hoveredIcon: projectDual},
      {label: "Planos de Manutenção", path: paths.plans.all, icon: plan, hoveredIcon: planDual},
      {label: "Monitores", path: paths.monitors.all, icon: monitor, hoveredIcon: monitorDual},
    ],
  },
  {
    groupLabel: "Finanças",
    items: [
      {label: "Faturamentos", path: paths.billings.all, icon: finance, hoveredIcon: financeDual},
    ],
  },
  {
    groupLabel: "Ativos",
    items: [
      {label: "Edifícios", path: paths.facilities.all, icon: facility, hoveredIcon: facilityDual},
      {label: "Equipamentos", path: paths.appliances.all, icon: equipament, hoveredIcon: equipamentDual},
    ],
  },
  {
    groupLabel: "Recursos",
    items: [
      {label: "Estoques", path: paths.depots.all, icon: depot, hoveredIcon: depotDual},
      {label: "Comprovantes", path: paths.receipts.all, icon: spec, hoveredIcon: specDual},
      {label: "Equipes", path: paths.teams.all, icon: team, hoveredIcon: teamDual},
      {label: "Usuários", path: paths.users.all, icon: user, hoveredIcon: userDual},
    ],
  },
];