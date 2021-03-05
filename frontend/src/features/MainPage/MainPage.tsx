import { AppHeader, AppSidebar } from '../Layout';

import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <AppHeader />
      <AppSidebar />
      <main style={{ backgroundColor: "gray" }}>
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
