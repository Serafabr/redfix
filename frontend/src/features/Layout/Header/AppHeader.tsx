import { Button, Notification, Support } from '../../../components/Buttons';
import { QuickSearch } from '../../../components/Inputs';
import style from './AppHeader.module.scss';
import { Plus } from '../../../components/Icons';
import { AvatarDropdown } from '../../../components/Avatars';

import { ButtonType } from '../../../components/Buttons/_types';

export const AppHeader = () => {
  return (
    <div className={style.AppHeader}>
      <div className={style.HeaderWrapper}>
        <div className={style.SearchWrapper}>
          <QuickSearch />
        </div>
        <div className={style.ButtonWrapper}>
          <Button text="Nova Tarefa" iconComponent={Plus} buttonType={ButtonType.Secondary} />
        </div>
        <div className={style.AvatarWrapper}>
            <Support />
            <Notification />
            <AvatarDropdown 
              name="Pedro Serafim"
              team="Coemant"
            />
        </div>
      </div>
    </div>
  )
}
