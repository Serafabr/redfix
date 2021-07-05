import { Avatar } from '../Avatar/Avatar';

import dropIcon from '../../../assets/icons/dropdown.svg';
import style from './AvatarDropdown.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  name: string,
  team: string,
  avatar?: string,
}

/*************************\
 * AvatarDropdown Component
\*************************/

export const AvatarDropdown = ({
  name,
  team,
  avatar
}: Props) => {
  return (
    <div className={style.AvatarDropdown}>
      <Avatar 
       avatar={avatar}
      />
      <div className={style.InfoWrapper}>
        <div className={style.Name}>{name}</div>
        <div className={style.Team}>{team}</div>
      </div>
      <img className={style.DropIcon} src={dropIcon} alt="Dropdown"/>
    </div>
  )
}
