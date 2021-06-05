import { ProgressBar } from '../ProgressBar';
import style from './PercentageBar.module.scss';

type PercentageBarT = {
  progress: number
};

export const PercentageBar = ({ progress }: PercentageBarT) => {
  return (
    <div className={style.Percentage}>
      <ProgressBar progress={progress} />
      <div className={style.PercentageText}>{progress}%</div>
    </div>
  )
}
