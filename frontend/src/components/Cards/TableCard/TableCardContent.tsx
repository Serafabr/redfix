import style from './TableCard.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * TableCardContent Component
\*************************/

export const TableCardContent = ({ children }: Props) => {
  return (
    <div className={style.TableCardContent}>
      {children}
    </div>
  )
};