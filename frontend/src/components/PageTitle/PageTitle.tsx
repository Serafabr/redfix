import style from './PageTitle.module.scss';

// Icons
import home from '../../assets/icons/home.svg';

export const PageTitle = () => {
  return (
    <div className={style.PageTitle}>
      <div className={style.Title}>Tarefas</div>
      <div className={style.Breadcrumbs}>
        <img src={home} alt="Home"/>
        <span className={style.Path}>/</span>
        <span className={style.Path}>Tarefas</span>
      </div>
    </div>
  )
}
