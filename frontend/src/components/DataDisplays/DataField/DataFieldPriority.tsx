// Components
import { DataField } from './DataField';
// Style
import style from './DataField.module.scss';
// Icons
import lowIcon from '../../../assets/icons/priority/low-priority.svg';
import normalIcon from '../../../assets/icons/priority/normal-priority.svg';
import highIcon from '../../../assets/icons/priority/high-priority.svg';
// Types
import { PrioritiesType } from './_types';

// Priority icon selection
const Priorities = {
  [PrioritiesType.Low]: { text: 'Baixa', icon: lowIcon }, 
  [PrioritiesType.Normal]: { text: 'Normal', icon: normalIcon }, 
  [PrioritiesType.High]: { text: 'Alta', icon: highIcon }, 
  [PrioritiesType.Urgent]: { text: 'Urgente', icon: highIcon }, 
}

/*************************\
 * PropTypes
\*************************/

type Props = {
  priority: PrioritiesType,
};

/*************************\
 * DataFieldPriority Component
\*************************/

export const DataFieldPriority = ({ priority }: Props) => {
  return (
    <DataField label="Prioridade">
      <div className={style.DataIcon}>
        <img src={Priorities[priority].icon} alt="Prioridade" />
      </div>
      {Priorities[priority].text}
    </DataField>
  )
}
