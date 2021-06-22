import { ReactNode } from 'react';
// Style
import style from './DataGrid.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  className: string,
  children: ReactNode
};

/*************************\
 * DataGrid Component
 * *
 * ClassName MUST HAVE the grid template
\*************************/

export const DataGrid = ({
  className,
  children
}: Props) => {
  return (
    <div className={`${style.GridArea} ${className}`}>
      {children}
    </div>
  )
};
