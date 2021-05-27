import style from './TableCard.module.scss';

type Props = {
  children: React.ReactNode,
};

export const TableCardContent = ({ children }: Props) => {
  return (
    <div className={style.TableCardContent}>
      {children}
    </div>
  )
};