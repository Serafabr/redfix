import { Link } from 'react-router-dom';
// Components
import { Button, Notification, Support } from '../../../components/Buttons';
import { QuickSearch } from '../../../components/Inputs';
import { Plus } from '../../../components/Icons';
import { AvatarDropdown } from '../../../components/Avatars';
// Helper functions and values
import { paths } from '../../../nav/paths';
// Style
import style from './AppHeader.module.scss';
// Types
import { ButtonType } from '../../../components/Buttons/_types';

/*************************\
 * AppHeader Component
\*************************/

export const AppHeader = () => {
  return (
    <div className={style.AppHeader}>
      <div className={style.HeaderWrapper}>
        <div className={style.SearchWrapper}>
          <QuickSearch />
        </div>
        <div className={style.ButtonWrapper}>
          <Link
            to={paths.tasks.createForm}
          >
            <Button 
              text="Nova Tarefa" 
              iconComponent={Plus} 
              buttonType={ButtonType.Secondary} 
            />
          </Link>
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
