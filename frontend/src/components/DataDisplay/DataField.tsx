import { ReactNode } from 'react';
import style from './DataDisplay.module.scss';

export enum IconPositionT { Start, End };

type DataFieldT = {
  label: string,
  gridArea?: string,
  children: ReactNode
};

export const DataField = ({
  label,
  gridArea,
  children,
}: DataFieldT) => {
  
  const dataDisplayStyle = { gridArea };
  
  return (
    <div className={`${style.DataDisplay}`} style={dataDisplayStyle}>
      <div className={style.Label}>{label}</div>
      <div className={style.Data}>
        {children}
      </div>
    </div>
  )
}
