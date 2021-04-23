import { AppHeader, AppSidebar, AppSidebarHeader } from '../Layout';
import { navItems } from '../../utils/nav/navItems';

import style from './MainPage.module.scss';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Button, ButtonType } from '../../components/Buttons';

import { Plus as PlusIcon } from '../../components/Icons';

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
        <div className={style.TitleArea}>
          <PageTitle title="Tarefa" path="/tarefas" />
          <div className={style.Buttons}>
            <div className={style.ButtonWrapper}>
              <Button text="Nova Tarefa" iconComponent={PlusIcon} />
            </div>
            <div className={style.ButtonWrapper}>
              <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
