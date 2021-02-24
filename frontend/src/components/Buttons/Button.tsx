import { Plus } from '../Icons';
import style from './Button.module.scss';

type Props = {
  text: string,
  onClick?: any,
};

export const Button = ({ 
  text,
  onClick
 }: Props) => {
  return (
    <button className={style.Button} onClick={onClick}>
      <div className={style.ContentWrapper}>
        <div className={style.Text}>
          {text}
        </div>
        <div className={style.Icon}>
          <Plus />
        </div>
      </div>
    </button>
  )
}