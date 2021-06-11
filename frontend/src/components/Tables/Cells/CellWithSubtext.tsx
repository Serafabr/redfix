import style from './Cells.module.scss';

type CellWithSubtextT = {
  value: {
    mainText: string,
    subText: string,
  },
};

export const CellWithSubtext = ({value: { mainText, subText }}: CellWithSubtextT) => {
  return (
    <div className={style.TextContainer}>
      <div className={style.Maintext}>{mainText}</div>
      <div className={style.Subtext}>{subText}</div>
    </div>
  )
}