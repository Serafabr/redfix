import { AppHeader, AppSidebar, AppSidebarHeader } from '../Layout';
import { navItems } from '../../utils/nav/navItems';

import style from './MainPage.module.scss';
import { PageTitle } from '../../components/PageTitle/PageTitle';

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
      <main className={style.Body} style={{ backgroundColor: "#e5e5e5", padding: "24px 40px" }}>
        <PageTitle />
        <div style={{ marginTop: "50px" }}>
          Body
        </div>
      </main>
    </div>
  )
}
