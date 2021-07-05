import style from './Bar.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  progress: number
};

/*************************\
 * SelectBox Component
\*************************/

export const Bar = ({ progress }: Props) => {
  return (
    <div className={style.ProgressBar}>
      <span className={style.Bar}>
        <span className={style.Progress} style={{ width: `${progress}%` }}></span>
      </span>
    </div>
  )
}
