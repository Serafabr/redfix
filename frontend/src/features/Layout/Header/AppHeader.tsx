import { Button, ButtonStyle, Notification, Support } from '../../../components/Buttons';
import { QuickSearch } from '../../../components/Inputs/QuickSearch/QuickSearch';
import style from './AppHeader.module.scss';
import { Plus } from '../../../components/Icons';
import { AvatarDropdown } from '../../../components/Avatars';

export const AppHeader = () => {
  return (
    <div className={style.AppHeader}>
      <div className={style.HeaderWrapper}>
        <div className={style.SearchWrapper}>
          <QuickSearch />
        </div>
        <div className={style.ButtonWrapper}>
          <Button text="Nova Tarefa" iconComponent={Plus} buttonStyle={ButtonStyle.Secondary} />
        </div>
        <div className={style.AvatarWrapper}>
          <div className={style.Phone}>
            <Support />
          </div>
          <div className={style.Notifications}>
            <Notification />
          </div>
          <div className={style.Avatar}>
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </div>
  )
}
