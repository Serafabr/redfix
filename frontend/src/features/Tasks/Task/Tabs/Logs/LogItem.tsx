import style from './Logs.module.scss';
import { TimelineItem } from '../../../../../components/Timeline';
import { IconColorT } from '../../../../../components/Timeline/TimelineItem';

export const LogItem = () => {
  return (
    <TimelineItem 
      message={<span><span className={style.Highlight}>Pedro Serafim</span> escreveu:</span>}
      innerMessage="Aguardando a chegada dos materiais."
      iconColor={IconColorT.Red}
      logTime="18/01/2021 às 02:01:28 pm"
    />
  )
}