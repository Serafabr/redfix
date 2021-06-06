import style from './SingleCard.module.scss';

type Props = {
  children: React.ReactNode,
};

export const SingleCardHeader = ({ children }: Props) => {
  return (
    <div className={style.SingleCardHeader}>
      {children}
    </div>
  )
}
