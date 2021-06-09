import style from './Timeline.module.scss';

type TimelineFilterButtonT = {
  text: string,
  icon: string,
  disabled?: boolean,
}

export const TimelineFilterButton = ({
  text,
  icon,
  disabled = false,
}: TimelineFilterButtonT) => {
  return (
    <button className={`${style.TimelineFilterButton} ${disabled && style.Inactive}`}>
      <img src={icon} alt="Filtro" />
      {text}
    </button>
  )
}
