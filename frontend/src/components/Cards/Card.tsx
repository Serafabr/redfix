import style from './Card.module.scss';

type Props = {
  children: React.ReactNode,
};

export const Card = ({ children }: Props) => {
  return (
    <div className={style.Card}>
      {children}
    </div>
  )
};
