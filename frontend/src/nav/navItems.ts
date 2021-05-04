// Import icons
import panel from '../assets/icons/sidebar/grid.svg';
import panelDual from '../assets/icons/sidebar/dualColor/grid.svg';
import task from '../assets/icons/sidebar/notes-paper.svg';
import taskDual from '../assets/icons/sidebar/dualColor/notes-paper.svg';
import plan from '../assets/icons/sidebar/tools-wench.svg';
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

// Sidebar items
export const navItems = [
  {
    groupLabel: undefined,
    items: [
      {label: "Painel", icon: panel, hoveredIcon: panelDual},
    ],
  },
  {
    groupLabel: "Manutenções",
    items: [
      {label: "Tarefas", icon: task, hoveredIcon: taskDual},
      {label: "Projetos", icon: task, hoveredIcon: taskDual},
      {label: "Planos de Manutenção", icon: plan, hoveredIcon: planDual},
      {label: "Monitores", icon: monitor, hoveredIcon: monitorDual},
    ],
  },
  {
    groupLabel: "Finanças",
    items: [
      {label: "Faturamentos", icon: finance, hoveredIcon: financeDual},
    ],
  },
  {
    groupLabel: "Ativos",
    items: [
      {label: "Edifícios", icon: facility, hoveredIcon: facilityDual},
      {label: "Equipamentos", icon: equipament, hoveredIcon: equipamentDual},
    ],
  },
  {
    groupLabel: "Recursos",
    items: [
      {label: "Estoques", icon: depot, hoveredIcon: depotDual},
      {label: "Espec. Técnicas", icon: spec, hoveredIcon: specDual},
      {label: "Equipes", icon: team, hoveredIcon: teamDual},
      {label: "Usuários", icon: user, hoveredIcon: userDual},
    ],
  },
];