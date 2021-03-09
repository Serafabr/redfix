import { SidebarGroup } from './Group/SidebarGroup';
import style from './Sidebar.module.scss';

import notesTask from '../../../assets/icons/sidebar/notes-tasks.svg';
import dualNotesTask from '../../../assets/icons/sidebar/dualColor/notes-tasks-dual.svg';

import { Props as SidebarGroupProps } from './Group/SidebarGroup';

const sidebar = [
  {
    groupLabel: undefined,
    items: [
      {label: "Painel", icon: notesTask, hoveredIcon: dualNotesTask},
    ],
  },
  {
    groupLabel: "Manutenções",
    items: [
      {label: "Tarefas", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Planos de Manutenção", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Monitor", icon: notesTask, hoveredIcon: dualNotesTask},
    ],
  },
  {
    groupLabel: "Finanças",
    items: [
      {label: "Faturamentos", icon: notesTask, hoveredIcon: dualNotesTask},
    ],
  },
  {
    groupLabel: "Ativos",
    items: [
      {label: "Edifícios", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Equipamentos", icon: notesTask, hoveredIcon: dualNotesTask},
    ],
  },
  {
    groupLabel: "Recursos",
    items: [
      {label: "Estoques", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Espec. Técnicas", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Equipes", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Empresas", icon: notesTask, hoveredIcon: dualNotesTask},
      {label: "Usuários", icon: notesTask, hoveredIcon: dualNotesTask},
    ],
  },
];

type sidebarProps = SidebarGroupProps[];

export const AppSidebar = () => {
  return (
    <div className={style.AppSideBar}>
      <div className={style.SidebarWrapper}>
        {sidebar.map((group) => (
          <SidebarGroup 
            key={group.groupLabel}
            items={group.items}
            groupLabel={group.groupLabel}
          />
        ))}
      </div>
    </div>
  )
}
