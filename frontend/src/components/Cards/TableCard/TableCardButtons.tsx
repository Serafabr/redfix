import style from './TableCard.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * TableCardButtons Component
\*************************/

export const TableCardButtons = ({ children }: Props) => {
  return (
    <div className={style.TableCardButtons}>
      {children}
    </div>
  )
};
