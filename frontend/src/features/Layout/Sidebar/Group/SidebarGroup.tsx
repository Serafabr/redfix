import style from './SidebarGroup.module.scss';

import notesTask from '../../../../assets/icons/sidebar/notes-tasks.svg';
import wench from '../../../../assets/icons/sidebar/tools-wench.svg';
import idCard from '../../../../assets/icons/sidebar/id-card.svg';
import { Divider } from '../Divider/Divider';
import { SidebarItem } from '../Item/SidebarItem';

export const SidebarGroup = () => {
  return (
    <div className={style.SidebarGroup}>
      <Divider label="Manutenções" />
      <ul className={style.List}>
        <li>
          <SidebarItem label="Tarefas" icon={notesTask} />
        </li>
        <li>
          <SidebarItem label="Planos de Manutenção" icon={wench} />
        </li>
        <li>
          <SidebarItem label="Monitor" icon={idCard} />
        </li>
      </ul>
    </div>
  )
}
