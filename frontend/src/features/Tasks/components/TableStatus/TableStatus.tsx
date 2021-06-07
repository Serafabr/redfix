import style from './TableStatus.module.scss';
import completedIcon from '../../../../assets/icons/status/completed.svg';

type TableStatusT = {
  value: string,
};

export const TableStatus = ({ value }: TableStatusT) => {
  return (
    <div className={style.TableStatus}>
      <img className={style.Icon} src={completedIcon} alt="Concluído" />
      {value}
    </div>
  )
}
