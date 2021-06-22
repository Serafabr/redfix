import style from './Card.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * Card Component
\*************************/

export const Card = ({ children }: Props) => {
  return (
    <div className={style.Card}>
      {children}
    </div>
  )
};
