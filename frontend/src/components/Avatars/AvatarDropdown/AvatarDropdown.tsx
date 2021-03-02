import { Avatar } from '../Avatar/Avatar';
import style from './AvatarDropdown.module.scss';

export const AvatarDropdown = () => {
  return (
    <div className={style.AvatarDropdown}>
      <Avatar />
      <div className={style.InfoWrapper}>
        <div className={style.Name}>Pedro Serafim</div>
        <div className={style.Job}>Engenheiro</div>
      </div>
    </div>
  )
}
