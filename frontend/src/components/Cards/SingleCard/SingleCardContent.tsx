import style from './SingleCard.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * SingleCardContent Component
\*************************/

export const SingleCardContent = ({ children }: Props) => {
  return (
    <div className={style.SingleCardContent}>
      {children}
    </div>
  )
}
