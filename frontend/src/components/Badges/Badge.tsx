import style from './Badge.module.scss';

export enum ColorType { 
  Red, 
  Blue, 
  Green, 
  Yellow, 
  Orange, 
  Purple, 
  Brown, 
  Peach, 
  Pink 
}

type BadgeT = {
  text: string,
  color: ColorType
}

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

export const Badge = ({
  text,
  color
}: BadgeT) => {
  return (
    <div className={style.BadgeWrapper}>
      <div className={`${style.Badge} ${ColorTypeObj[color]}`}>{text}</div>
    </div>
  )
}
