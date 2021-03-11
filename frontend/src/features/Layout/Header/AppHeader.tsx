import { QuickSearch } from '../../../components/Inputs/QuickSearch/QuickSearch';
import style from './AppHeader.module.scss';

export const AppHeader = () => {
  return (
    <div className={style.AppHeader}>
      <div className={style.HeaderWrapper}>
        <div className={style.SearchWrapper}>
          <QuickSearch />
        </div>
        <div className={style.ButtonWrapper}>
          Button
        </div>
        <div className={style.AvatarWrapper}>
          Avatar
        </div>
      </div>
    </div>
  )
}
