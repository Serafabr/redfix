import { AppHeader, AppSidebar, AppSidebarHeader } from '../Layout';

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
        <AppSidebar />
      </div>
      <main className={style.Body} style={{ backgroundColor: "gray" }}>
        Body
      </main>
      {/* <AppHeader>
        <MainHeader />
      </AppHeader>
      <AppSideBar>
        <AppSideBarHeader />
        <AppSidebarNav />
        <AppSidebarFooter />
      </AppSideBar>
      <main>
        <Container>
          MainBody
        </Container>
      </main> */}
    </div>
  )
}
