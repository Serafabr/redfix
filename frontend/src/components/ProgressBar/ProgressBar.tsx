import style from './ProgressBar.module.scss';

export const ProgressBar = () => {
  return (
    <div className={style.ProgressBar}>
      <span className={style.Bar}>
        <span className={style.Progress} style={{ width: "80%" }}></span>
      </span>
    </div>
  )
}
