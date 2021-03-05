import style from './SidebarGroup.module.scss';

import notesTask from '../../../../assets/icons/sidebar/notes-tasks.svg';
import wench from '../../../../assets/icons/sidebar/tools-wench.svg';
import idCard from '../../../../assets/icons/sidebar/id-card.svg';

export const SidebarGroup = () => {
  return (
    <div className={style.SidebarGroup}>
      <div className={style.GroupDivider}>
        Manutenções
      </div>
      <ul className={style.List}>
        <li className={style.Item}>
          <div className={style.IconWrapper}>
            <img src={notesTask} alt="Tarefas"/>
          </div>
          <div className={style.ItemText}>
            Tarefas
          </div>
        </li>
        <li className={style.Item}>
          <div className={style.IconWrapper}>
            <img src={wench} alt="Planos de Manutenção"/>
          </div>
          <div className={style.ItemText}>
            Planos de Manutenção
          </div>
        </li>
        <li className={style.Item}>
          <div className={style.IconWrapper}>
            <img src={idCard} alt="Planos de Manutenção"/>
          </div>
          <div className={style.ItemText}>
            Monitor
          </div>
        </li>
      </ul>
    </div>
  )
}
