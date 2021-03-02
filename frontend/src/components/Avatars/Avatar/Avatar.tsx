import avatar from '../../../assets/avatar/avatar.png';
import style from './Avatar.module.scss';

type Props = any;

export const Avatar = (props: Props) => {
  return (
    <div className={style.Avatar}>
      <img src={avatar} alt="Avatar do usuário"/>
    </div>
  )
}
