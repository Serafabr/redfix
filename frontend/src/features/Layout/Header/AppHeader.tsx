import { Button, ButtonStyle } from '../../../components/Buttons';
import { QuickSearch } from '../../../components/Inputs/QuickSearch/QuickSearch';
import style from './AppHeader.module.scss';
import { Plus } from '../../../components/Icons';

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
          Avatar
        </div>
      </div>
    </div>
  )
}
