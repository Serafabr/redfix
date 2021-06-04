import { ReactNode } from 'react';
import style from './DataDisplay.module.scss';

type DataGridT = {
  className: string,
  children: ReactNode
};

export const DataGrid = ({
  className,
  children
}: DataGridT) => {
  return (
    <div className={`${style.GridArea} ${className}`}>
      {children}
    </div>
  )
};
