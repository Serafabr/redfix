import { ReactNode } from 'react';
import style from './Timeline.module.scss';

type TimelineButtonContainerT = {
  children: ReactNode,
}

export const TimelineButtonContainer = ({
  children
}: TimelineButtonContainerT) => {
  return (
    <div className={style.TimelineButtonContainer}>
      {children}
    </div>
  )
}
