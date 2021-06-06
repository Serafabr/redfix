import { ReactNode } from 'react';
import style from './DataDisplay.module.scss';
import { DataField } from './DataField';

import barChartIcon from '../../assets/icons/bar-chart.svg';

// enum PrioritiesT { Waiting, Pending, Executing, Suspended, Analysis, Canceled, Finished, Completed };

// const Priorities = {
//   [PrioritiesT.Waiting]: { text: '', icon:  }, 
//   [PrioritiesT.Pending]: { text: '', icon:  }, 
//   [PrioritiesT.Executing]: { text: '', icon:  }, 
//   [PrioritiesT.Suspended]: { text: '', icon:  }, 
//   [PrioritiesT.Analysis]: { text: '', icon:  }, 
//   [PrioritiesT.Canceled]: { text: '', icon:  }, 
//   [PrioritiesT.Finished]: { text: '', icon:  }, 
//   [PrioritiesT.Completed]: { text: '', icon:  }
// }

enum PrioritiesT { Low, Normal, High, Urgent };

const Priorities = {
  [PrioritiesT.Low]: { text: 'Baixa', icon: barChartIcon }, 
  [PrioritiesT.Normal]: { text: 'Normal', icon: barChartIcon }, 
  [PrioritiesT.High]: { text: 'Alta', icon: barChartIcon }, 
  [PrioritiesT.Urgent]: { text: 'Urgente', icon: barChartIcon }, 
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
