import style from './SidebarGroup.module.scss';

import notesTask from '../../../../assets/icons/notes-tasks.svg';
import wench from '../../../../assets/icons/tools-wench.svg';
import idCard from '../../../../assets/icons/id-card.svg';

export const SidebarGroup = () => {
  return (
    <div className={style.SidebarGroup}>
      <div className={style.GroupDivider}>
        Manutenções
      </div>
      <ul className={style.List}>
        <li className={style.Item}>
          <img src={notesTask} alt="Tarefas"/>
          <div className={style.ItemText}>
            Tarefas
          </div>
        </li>
        <li className={style.Item}>
          <img src={wench} alt="Planos de Manutenção"/>
          <div className={style.ItemText}>
            Planos de Manutenção
          </div>
        </li>
        <li className={style.Item}>
          <img src={idCard} alt="Planos de Manutenção"/>
          <div className={style.ItemText}>
            Monitor
          </div>
        </li>
      </ul>
    </div>
  )
}
