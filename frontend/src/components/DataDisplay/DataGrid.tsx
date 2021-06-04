import { ReactNode } from 'react';
import style from './DataDisplay.module.scss';

type DataGridT = {
  gridTemplate: string,
  children: ReactNode
};

export const DataGrid = ({
  gridTemplate,
  children
}: DataGridT) => {
  return (
    <div className={style.GridArea} style={{ gridTemplate }}>
      {children}
    </div>
  )
};
