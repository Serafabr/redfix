import defaultAvatar from '../../../assets/avatar/avatar.png';
import style from './Avatar.module.scss';

type Props = {
  avatar?: string,
};

// Avatar image
export const Avatar = ({
  avatar = defaultAvatar
}: Props) => {
  return (
    <div className={style.Avatar}>
      <img src={avatar} alt="Avatar do usuário"/>
    </div>
  )
}
