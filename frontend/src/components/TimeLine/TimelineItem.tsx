import style from './Timeline.module.scss';

import ellipseBlue from '../../assets/icons/log/ellipse-blue.svg';
import ellipseRed from '../../assets/icons/log/ellipse-red.svg';
import ellipseOrange from '../../assets/icons/log/ellipse-orange.svg';
import { ReactNode } from 'react';

enum IconColorT { Red, Blue, Orange }; 

type TimelineItemT = {
  innerMessage?: string,
  logTime: string,
  iconColor: IconColorT,
  children: ReactNode,
}

export const TimelineItem = ({
  innerMessage,
  logTime,
  iconColor,
  children
}: TimelineItemT) => {
  return (
    <div className={style.TimeLineItem}>
      <img className={style.Icon} src={ellipseBlue} alt="Mensagem" />
      <div className={style.MessageBox}>
        <div className={style.Message}>{children}</div>
        {innerMessage && (
          <div className={style.InnerMessage}>{innerMessage}</div>
        )}
        <div className={style.LogTime}>{logTime}</div>
      </div>
    </div>
  )
}
