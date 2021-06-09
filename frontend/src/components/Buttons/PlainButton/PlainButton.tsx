import { ReactNode } from 'react';
import style from './PlainButton.module.scss';

type PlainButtonT = {
  children: ReactNode,
  icon?: string,
}
  
  export const PlainButton = ({ children, icon }: PlainButtonT) => {
  return (
    <button className={style.PlainButton}>
      {children}
      {icon && (
        <div className={style.IconContainer}>
          <img className={style.ButtonIcon} src={icon} alt="Nova mensagem" />
        </div>
      )}
    </button>
  )
}
