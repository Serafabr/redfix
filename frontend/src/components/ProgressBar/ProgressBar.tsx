import style from './ProgressBar.module.scss';

type ProgressBarT = {
  progress: number
};

export const ProgressBar = ({ progress }: ProgressBarT) => {
  return (
    <div className={style.ProgressBar}>
      <span className={style.Bar}>
        <span className={style.Progress} style={{ width: `${progress}%` }}></span>
      </span>
    </div>
  )
}
