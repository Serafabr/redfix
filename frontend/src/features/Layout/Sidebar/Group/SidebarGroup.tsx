import style from './SidebarGroup.module.scss';

export const SidebarGroup = () => {
  return (
    <div className={style.SidebarGroup}>
      <div className={style.GroupDivider}>
        Manutenções
      </div>
      <ul className={style.List}>
        <li className={style.Item}>Tarefas</li>
        <li className={style.Item}>Planos de Manutenção</li>
        <li className={style.Item}>Monitor</li>
      </ul>
    </div>
  )
}
