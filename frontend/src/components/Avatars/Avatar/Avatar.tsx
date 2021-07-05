import defaultAvatar from '../../../assets/avatar/avatar.png';
import style from './Avatar.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  avatar?: string,
};

/*************************\
 * Component
\*************************/

export const Avatar = ({
  avatar = defaultAvatar
}: Props) => {
  return (
    <div className={style.Avatar}>
      <img src={avatar} alt="Avatar do usuário"/>
    </div>
  )
}
