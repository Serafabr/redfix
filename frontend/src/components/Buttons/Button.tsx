import classNames from 'classnames';
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
   
  const btnClasses = classNames(
    style.Button,
    {[style.Disabled]: disabled}
  );
  
  return (
    <button className={btnClasses} onClick={onClick}>
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