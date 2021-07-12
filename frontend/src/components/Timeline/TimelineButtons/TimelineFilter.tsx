// Style
import style from './TimelineButtons.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  text: string,
  icon: string,
  disabled?: boolean,
}

/*************************\
 * TimelineFilter Component
\*************************/

export const TimelineFilter = ({
  text,
  icon,
  disabled = false,
}: Props) => {
  return (
    <button className={`${style.TimelineFilterButton} ${disabled && style.Inactive}`}>
      <img src={icon} alt="Filtro" />
      {text}
    </button>
  )
}
