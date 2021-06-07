import style from './TableStatus.module.scss';

import completedIcon from '../../../../assets/icons/status/completed.svg';
import canceledIcon from '../../../../assets/icons/status/canceled.svg';
import executingIcon from '../../../../assets/icons/status/executing.svg';
import finishedIcon from '../../../../assets/icons/status/finished.svg';
import pendingIcon from '../../../../assets/icons/status/pending.svg';

enum StatusT { 
  Waiting = 'Fila de espera', 
  Pending = 'Pendente', 
  Executing = 'Em execução', 
  Suspended = 'Suspenso', 
  Analysis = 'Em análise', 
  Canceled = 'Cancelado', 
  Finished = 'Finalizado', 
  Completed = 'Concluído' 
};

const Status = {
  [StatusT.Waiting]: { text: 'Fila de espera', icon: pendingIcon }, 
  [StatusT.Pending]: { text: 'Pendente', icon: pendingIcon }, 
  [StatusT.Executing]: { text: 'Em execução', icon: executingIcon }, 
  [StatusT.Suspended]: { text: 'Suspenso', icon: canceledIcon }, 
  [StatusT.Analysis]: { text: 'Em análise', icon: pendingIcon }, 
  [StatusT.Canceled]: { text: 'Cancelado', icon: canceledIcon }, 
  [StatusT.Finished]: { text: 'Finalizado', icon: finishedIcon }, 
  [StatusT.Completed]: { text: 'Concluído', icon: completedIcon }
}

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
