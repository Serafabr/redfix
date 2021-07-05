import style from './SingleCard.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * SingleCardHeader Component
\*************************/

export const SingleCardHeader = ({ children }: Props) => {
  return (
    <div className={style.HeaderDivider}>
      <div className={style.SingleCardHeader}>
        {children}
      </div>
    </div>
  )
}
