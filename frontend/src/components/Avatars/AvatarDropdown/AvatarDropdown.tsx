import { Avatar } from '../Avatar/Avatar';
import dropIcon from '../../../assets/icons/dropdown.svg';
import style from './AvatarDropdown.module.scss';

export const AvatarDropdown = () => {
  return (
    <div className={style.AvatarDropdown}>
      <Avatar />
      <div className={style.InfoWrapper}>
        <div className={style.Name}>Pedro Serafim</div>
        <div className={style.Job}>Engenheiro</div>
      </div>
      <img className={style.DropIcon} src={dropIcon} alt="Dropdown"/>
    </div>
  )
}
