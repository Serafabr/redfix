import { ReactNode } from 'react'
import style from './Cells.module.scss';
import classNames from 'classnames';

type CellFormatT = {
  value: any,
}

type FormatT = {
  isCenter?: boolean, 
  isBold?: boolean,
}

export const CellFormat = ({ isCenter = false, isBold = false }: FormatT) => ({
  value,
}: CellFormatT) => {
  
  const cellClasses = classNames(
    {
      [style.Center]: isCenter,
      [style.Bold]: isBold
    },
  );
  
  return (
    <div className={cellClasses}>
      {value}
    </div>
  )
}
