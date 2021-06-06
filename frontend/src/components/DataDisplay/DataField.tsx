import { ReactNode } from 'react';
import style from './DataDisplay.module.scss';

import linkIcon from '../../assets/icons/external-link.svg';

export enum IconPositionT { Start, End };

type DataFieldT = {
  label: string,
  gridArea?: string,
  withLink?: boolean,
  children: ReactNode
};

export const DataField = ({
  label,
  gridArea,
  withLink = false,
  children,
}: DataFieldT) => {
  
  const dataDisplayStyle = { gridArea };
  
  return (
    <div className={`${style.DataDisplay}`} style={dataDisplayStyle}>
      <div className={style.Label}>{label}</div>
      <div className={style.Data}>
        {children}
        {withLink && (
          <img className={style.IconEndLine} src={linkIcon} alt="Plano de Manutenção" />
        )}
      </div>
    </div>
  )
}
