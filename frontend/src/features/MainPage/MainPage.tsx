import { AppHeader, AppSidebar, AppSidebarHeader } from '../Layout';
import { navItems } from '../../utils/nav/navItems';

import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <div className={style.AppHeader}>
        <AppHeader />
      </div>
      <div className={style.AppSidebarHeader}>
        <AppSidebarHeader />
      </div>
      <div className={style.AppSidebar}>
        <AppSidebar navItems={navItems} />
      </div>
      <main className={style.Body} style={{ backgroundColor: "gray" }}>
        Body
      </main>
    </div>
  )
}
