import { Plus } from '../Icons';
import style from './Button.module.scss';

type Props = {
  text: string,
  disabled?: boolean,
  onClick?: any,
};

export const Button = ({ 
  text,
  disabled = false,
  onClick
 }: Props) => {
  return (
    <button className={style.Button} onClick={onClick}>
      <div className={style.ContentWrapper}>
        <div className={style.Text}>
          {text}
        </div>
        <div className={style.IconWrapper}>
          <Plus className={style.Plus} />
        </div>
      </div>
    </button>
  )
}