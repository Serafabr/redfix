import { ReactNode } from 'react';
import style from './PlainButton.module.scss';

type Props = {
  icon?: string,
  children: ReactNode,
}

/*************************\
 * PlainButton Component
\*************************/
  
export const PlainButton = ({ 
  icon,
  children, 
}: Props) => {
return (
  <button className={style.PlainButton}>
    {children}
    {icon && (
      <div className={style.IconContainer}>
        <img className={style.ButtonIcon} src={icon} alt="Nova mensagem" />
      </div>
    )}
  </button>
)}
