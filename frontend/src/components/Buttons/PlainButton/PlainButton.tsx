import { ReactNode } from 'react';
import style from './PlainButton.module.scss';

type Props = {
  icon?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  children: ReactNode,
}

/*************************\
 * PlainButton Component
\*************************/
  
export const PlainButton = ({ 
  icon,
  onClick,
  children, 
}: Props) => {
return (
  <button className={style.PlainButton} onClick={onClick}>
    {children}
    {icon && (
      <div className={style.IconContainer}>
        <img className={style.ButtonIcon} src={icon} alt="Nova mensagem" />
      </div>
    )}
  </button>
)}
