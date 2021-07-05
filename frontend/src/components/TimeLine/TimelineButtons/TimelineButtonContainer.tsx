import { ReactNode } from 'react';
// Style
import style from './TimelineButtons.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: ReactNode,
}

/*************************\
 * TimelineButtonContainer Component
\*************************/

export const TimelineButtonContainer = ({
  children
}: Props) => {
  return (
    <div className={style.TimelineButtonContainer}>
      {children}
    </div>
  )
}
