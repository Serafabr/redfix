import { useState } from 'react';

import { AppHeader, AppSidebar, AppSidebarHeader } from '../Layout';
import { navItems } from '../../utils/nav/navItems';

import style from './MainPage.module.scss';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Button, ButtonType, FilterDropdown } from '../../components/Buttons';

import { Plus as PlusIcon } from '../../components/Icons';
import { Card } from '../../components/Cards';
import { SelectBox } from '../../components/SelectBox/SelectBox';
import { Dropdown } from '../../components/Buttons/Dropdown/Dropdown';
import { Modal } from '../../components/Modals';
import { Login } from '../Login';

const items = [
  {id: 1,name: "Customizar tabelaaaaaaaaaaaaaaaaaaa", selected: true},
  {id: 2,name: "Exportar para CSV", selected: false},
  {id: 3,name: "Exportar para Excel", selected: false},
  {id: 4,name: "Exportar para PDF", selected: false},
  {id: 5,name: "Customizar tabela", selected: false},
  {id: 6,name: "Exportar para CSV", selected: false},
  {id: 6,name: "Exportar para Excel", selected: false},
  {id: 6,name: "Exportar para PDF", selected: false},
];

export const MainPage = () => {
  const [ isModalOpened, setIsModalOpened ] = useState<boolean>(true);
  
  
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
        <div style={{ marginTop: "24px" }}>
          <Card>
            <div style={{ display: "flex" }}>
              <FilterDropdown />
              <div style={{ width: "300px" }}>
                <Dropdown />
              </div>
            </div>
          </Card>
        </div>
        <div style={{ margin: "20px" }}>
          <Modal 
            isOpened={isModalOpened}
            setIsOpened={setIsModalOpened}
          />
        </div>
        <div style={{ margin: "20px" }}>
          <Login />
        </div>
      </main>
    </div>
  )
}
