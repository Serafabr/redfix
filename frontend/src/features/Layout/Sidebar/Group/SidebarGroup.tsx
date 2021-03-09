import style from './SidebarGroup.module.scss';

import notesTask from '../../../../assets/icons/sidebar/notes-tasks.svg';
import dualNotesTask from '../../../../assets/icons/sidebar/dualColor/notes-tasks-dual.svg';
import wench from '../../../../assets/icons/sidebar/tools-wench.svg';
import dualWench from '../../../../assets/icons/sidebar/dualColor/tools-wench-dual.svg';
import idCard from '../../../../assets/icons/sidebar/id-card.svg';
import dualIdCard from '../../../../assets/icons/sidebar/dualColor/id-card-dual.svg';
import { Divider } from '../Divider/Divider';
import { SidebarItem } from '../Item/SidebarItem';

export const SidebarGroup = () => {
  return (
    <div className={style.SidebarGroup}>
      <Divider label="Manutenções" />
      <ul className={style.List}>
        <li>
          <SidebarItem label="Tarefas" icon={notesTask} hoveredIcon={dualNotesTask} />
        </li>
        <li>
          <SidebarItem label="Planos de Manutenção" icon={wench} hoveredIcon={dualWench} />
        </li>
        <li>
          <SidebarItem label="Monitor" icon={idCard} hoveredIcon={dualIdCard} />
        </li>
      </ul>
    </div>
  )
}
