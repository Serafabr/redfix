import style from './TableCard.module.scss';

type Props = {
  children: React.ReactNode,
};

export const TableCardButtons = ({ children }: Props) => {
  return (
    <div className={style.TableCardButtons}>
      {children}
    </div>
  )
};
