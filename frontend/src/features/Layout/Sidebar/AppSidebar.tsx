import { SidebarGroup } from './Group/SidebarGroup';
import style from './Sidebar.module.scss';

export const AppSidebar = () => {
  return (
    <div className={style.AppSideBar}>
      <div className={style.SidebarWrapper}>
        <SidebarGroup />
      </div>
    </div>
  )
}
