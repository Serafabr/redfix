import style from './SingleCard.module.scss';

type Props = {
  children: React.ReactNode,
};

export const SingleCardContent = ({ children }: Props) => {
  return (
    <div className={style.SingleCardContent}>
      {children}
    </div>
  )
}
