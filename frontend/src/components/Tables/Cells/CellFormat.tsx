import { ReactNode } from 'react'
import style from './Cells.module.scss';
import classNames from 'classnames';

type CellFormatT = {
  children: ReactNode,
  isCenter: boolean,
  isBold: boolean
}

export const CellFormat = ({
  isCenter = false,
  isBold = false,
  children,
}: CellFormatT) => {
  
  const cellClasses = classNames(
    {
      [style.Center]: isCenter,
      [style.Bold]: isBold
    },
  );
  
  return (
    <div className={cellClasses}>
      {children}
    </div>
  )
}
