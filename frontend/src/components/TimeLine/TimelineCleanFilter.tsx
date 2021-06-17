import style from './Timeline.module.scss';
import closeIcon from '../../assets/icons/x-circle.svg';

export const TimelineCleanFilter = () => {
  return (
    <div className={style.CleanFilter}>
      Limpar filtros
      <img src={closeIcon} alt="Limpar" />
    </div>
  )
}
