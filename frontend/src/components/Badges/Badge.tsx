// Types
import { ColorType } from './_types';
//CSS
import style from './Badge.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  text: string,
  color: ColorType
}

/*************************\
 * Style selection by color type
\*************************/

const ColorTypeObj = {
  [ColorType.Red]: style.Red, 
  [ColorType.Blue]: style.Blue, 
  [ColorType.Green]: style.Green, 
  [ColorType.Yellow]: style.Yellow, 
  [ColorType.Orange]: style.Orange, 
  [ColorType.Purple]: style.Purple, 
  [ColorType.Brown]: style.Brown, 
  [ColorType.Peach]: style.Peach, 
  [ColorType.Pink]: style.Pink, 
}

/*************************\
 * Component
\*************************/

export const Badge = ({
  text,
  color
}: Props) => {
  return (
    <div className={style.BadgeWrapper}>
      <div className={`${style.Badge} ${ColorTypeObj[color]}`}>{text}</div>
    </div>
  )
}
