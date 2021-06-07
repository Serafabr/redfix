import style from './TableStatus.module.scss';

import alertBrown from '../../../../assets/icons/status/circle-alert-brown.svg';
import alertLime from '../../../../assets/icons/status/circle-alert-lime.svg';
import checkGreen from '../../../../assets/icons/status/circle-check-green.svg';
import clockOrange from '../../../../assets/icons/status/clock-orange.svg';
import clockBlue from '../../../../assets/icons/status/clock-blue.svg';
import xCircleRed from '../../../../assets/icons/status/x-circle-red.svg';

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
  [StatusT.Waiting]: { text: 'Fila de espera', icon: clockOrange, className: style.Orange }, 
  [StatusT.Pending]: { text: 'Pendente', icon: alertBrown, className: style.Purple }, 
  [StatusT.Executing]: { text: 'Em execução', icon: clockBlue, className: style.Blue }, 
  [StatusT.Suspended]: { text: 'Suspenso', icon: xCircleRed, className: style.Red }, 
  [StatusT.Analysis]: { text: 'Em análise', icon: alertBrown, className: style.Purple }, 
  [StatusT.Canceled]: { text: 'Cancelado', icon: xCircleRed, className: style.Red }, 
  [StatusT.Finished]: { text: 'Finalizado', icon: alertLime, className: style.Lime }, 
  [StatusT.Completed]: { text: 'Concluído', icon: checkGreen, className: style.Green }
}

type TableStatusT = {
  value: StatusT,
};

export const TableStatus = ({ value }: TableStatusT) => {
  return (
    <div className={`${style.TableStatus} ${Status[value].className}`}>
      <img className={style.Icon} src={Status[value].icon} alt="Concluído" />
      {Status[value].text}
    </div>
  )
}
