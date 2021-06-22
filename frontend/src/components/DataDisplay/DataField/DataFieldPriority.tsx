import { ReactNode } from 'react';
import style from './DataDisplay.module.scss';
import { DataField } from './DataField';

import lowIcon from '../../assets/icons/priority/low-priority.svg';
import normalIcon from '../../assets/icons/priority/normal-priority.svg';
import highIcon from '../../assets/icons/priority/high-priority.svg';

export enum PrioritiesT { Low, Normal, High, Urgent };

const Priorities = {
  [PrioritiesT.Low]: { text: 'Baixa', icon: lowIcon }, 
  [PrioritiesT.Normal]: { text: 'Normal', icon: normalIcon }, 
  [PrioritiesT.High]: { text: 'Alta', icon: highIcon }, 
  [PrioritiesT.Urgent]: { text: 'Urgente', icon: highIcon }, 
}

type DataFieldPriorityT = {
  priority: PrioritiesT
}

export const DataFieldPriority = ({ priority }: DataFieldPriorityT) => {
  return (
    <DataField label="Prioridade">
      <div className={style.DataIcon}>
        <img src={Priorities[priority].icon} alt="Prioridade" />
      </div>
      {Priorities[priority].text}
    </DataField>
  )
}
