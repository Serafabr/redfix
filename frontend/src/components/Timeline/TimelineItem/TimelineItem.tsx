import { ReactNode } from 'react';
// Style
import style from './TimelineItem.module.scss';
// Icons
import ellipseBlue from '../../../assets/icons/logTab/ellipse-blue.svg';
import ellipseRed from '../../../assets/icons/logTab/ellipse-red.svg';
import ellipseOrange from '../../../assets/icons/logTab/ellipse-orange.svg';
// Types
import { IconColorType } from '../_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  innerMessage?: string,
  logTime: string,
  iconColor: IconColorType,
  message: ReactNode,
}

/*************************\
 * Configuration
\*************************/

// Choose icon
const icon = {
  [IconColorType.Blue]: ellipseBlue, 
  [IconColorType.Red]: ellipseRed, 
  [IconColorType.Orange]: ellipseOrange
}

/*************************\
 * TimelineItem component
\*************************/

export const TimelineItem = ({
  innerMessage,
  logTime,
  iconColor,
  message
}: Props) => {
  return (
    <div className={style.TimeLineItem}>
      <img className={style.Icon} src={icon[iconColor]} alt="Mensagem" />
      <div className={style.MessageBox}>
        <div className={style.Message}>{message}</div>
        {innerMessage && (
          <div className={style.InnerMessage}>{innerMessage}</div>
        )}
        <div className={style.LogTime}>{logTime}</div>
      </div>
    </div>
  )
}
