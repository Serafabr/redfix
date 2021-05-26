import style from './PageTitle.module.scss';

// Icons
import home from '../../assets/icons/home.svg';

// Prop types
type Props = {
  title: string,
  path: string,
};

export const PageTitle = ({title, path}: Props) => {
  // Get all elements from path. If there's an empty element, remove it.
  const pathArray: String[] = path.split('/').filter((el) => (el.length > 0));
  
  // Render method
  return (
    <div className={style.PageTitle}>
      <div className={style.Title}>{title}</div>
      <div className={style.Breadcrumbs}>
        <img src={home} alt="Home"/>
        <span className={style.Path}>/</span>
        {/* Map all path names */}
        {pathArray.map((path, index) => (<>
          <span className={style.Path}>{path.trim()}</span>
          {/* If it's the last one, don't insert '/' */}
          {index < pathArray.length - 1  && (
            <span className={style.Path}>/</span>
          ) }
        </>))}
      </div>
    </div>
  )
}
