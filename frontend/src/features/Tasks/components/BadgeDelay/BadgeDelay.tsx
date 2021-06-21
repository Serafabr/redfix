import style from './BadgeDelay.module.scss';
import { Badge } from '../../../../components/Badges'; 
import { ColorType } from '../../../../components/Badges/_types'; 

export enum DelayT { Overdue, OnTime, Tomorrow, Today };

const DelayDisplay = {
  [DelayT.Overdue]: { text: 'Atrasado', color: ColorType.Red }, 
  [DelayT.OnTime]: { text: 'Dentro do prazo', color: ColorType.Blue }, 
  [DelayT.Tomorrow]: { text: 'Prazo: amanhã', color: ColorType.Purple }, 
  [DelayT.Today]: { text: 'Prazo: hoje', color: ColorType.Purple }
}

type BadgeDelayT = {
  delay: DelayT
}

export const BadgeDelay = ({ delay }: BadgeDelayT) => {
  return (
    <Badge text={DelayDisplay[delay].text} color={DelayDisplay[delay].color} />
  )
}
