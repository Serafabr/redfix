import style from './Card.module.scss';

type Props = {
  children: React.ReactNode,
};

export const CardHeader = ({ children }: Props) => {
  return (
    <div className={style.Card}>
      {children}
    </div>
  )
};
