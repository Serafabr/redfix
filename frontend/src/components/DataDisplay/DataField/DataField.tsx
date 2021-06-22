import { ReactNode } from 'react';
// Style
import style from './DataField.module.scss';
// Icons
import linkIcon from '../../../assets/icons/external-link.svg';

/*************************\
 * PropTypes
\*************************/

type Props = {
  label: string,
  gridArea?: string,
  withLink?: boolean,
  children: ReactNode
};

/*************************\
 * DataField Component
\*************************/

export const DataField = ({
  label,
  gridArea,
  withLink = false,
  children,
}: Props) => {
  
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
