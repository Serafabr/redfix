import { ReactNode } from 'react';
import style from './PlainButton.module.scss';

type PlainButtonT = {
  children: ReactNode,
}

export const PlainButton = ({ children }: PlainButtonT) => {
  return (
    <button className={style.PlainButton}>
      {children}
    </button>
  )
}
