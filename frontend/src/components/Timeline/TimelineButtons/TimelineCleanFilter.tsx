// Style
import style from './TimelineButtons.module.scss';
// Icon
import closeIcon from '../../../assets/icons/x-circle.svg';

/*************************\
 * PropTypes
\*************************/

type Props = {}

/*************************\
 * TimelineCleanFilter Component
\*************************/

export const TimelineCleanFilter = ({}: Props) => {
  return (
    <div className={style.CleanFilter}>
      Limpar filtro
      <img src={closeIcon} alt="Limpar" />
    </div>
  )
}
