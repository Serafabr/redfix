// Third party imports
import classNames from 'classnames';
//Local components
import { Plus } from '../Icons';
// Style
import style from './Button.module.scss';

// Prop types
type Props = {
  text: string,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

// Component
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