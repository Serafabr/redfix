import { AppSidebarFooter } from '../Layout/AppSidebarFooter';
import { AppSidebarNav } from '../Layout/AppSidebarNav';
import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <AppHeader />
      <AppSidebar />
      <main>
        Hey
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
