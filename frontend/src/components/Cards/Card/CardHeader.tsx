import style from './Card.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * CardHeader Component
\*************************/

export const CardHeader = ({ children }: Props) => {
  return (
    <div className={style.HeaderDivider}>
      {children}
    </div>
  )
}
