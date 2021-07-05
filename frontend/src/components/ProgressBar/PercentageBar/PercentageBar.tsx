import { Bar } from '../.';
import style from './PercentageBar.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  progress: number
};

/*************************\
 * PercentageBar component
\*************************/

export const PercentageBar = ({ progress }: Props) => {
  return (
    <div className={style.Percentage}>
      <Bar progress={progress} />
      <div className={style.PercentageText}>{progress}%</div>
    </div>
  )
}
