import style from './TableTask.module.scss';

type TableTaskT = {
  value: {
    task: string,
    team: string,
  },
};

export const TableTask = ({value: { task, team }}: TableTaskT) => {
  return (
    <div className={style.TaskContainer}>
      <div className={style.Task}>{task}</div>
      <div className={style.Team}>{team}</div>
    </div>
  )
}
