import { useState } from 'react';
// Types
import { IdType } from '../../../../components/SelectBox/_types';
import { Asset } from '../options/_types';
import { TaskFormStateType, TaskFormSetStateType } from '../_types';

/*************************\
 * PropTypes
\*************************/

type Props = {};

/*************************\
 * Custom Hook
\*************************/

export const useFormState = (): [TaskFormStateType, TaskFormSetStateType] => {
  
  // Text input
  const [ task, setTask ] = useState<string>('');
  const [ place, setPlace ] = useState<string>('');
  const [ description, setDescription ] = useState<string>('');
  
  // Dropdown
  const [ team, setTeam ] = useState<IdType[]>([]);
  const [ category, setCategory ] = useState<IdType[]>([]);
  const [ priority, setPriority ] = useState<IdType[]>([]);
  const [ status, setStatus ] = useState<IdType[]>([]);
  const [ project, setProject ] = useState<IdType[]>([]);
  
  // Dates
  const [ startDate, setStartDate ] = useState<string>();
  const [ limitDate, setLimitDate ] = useState<string>();
  
  // Assets
  const [ assets, setAssets ] = useState<Array<IdType>>([]); 
  
  
  const formState: TaskFormStateType = {
    task,
    place,
    description,
    team,
    category,
    priority,
    status,
    project,
    startDate,
    limitDate,
    assets
  }
  
  const setFormState: TaskFormSetStateType = {
    task: setTask,
    place: setPlace,
    description: setDescription,
    team: setTeam,
    priority: setPriority,
    category: setCategory,
    status: setStatus,
    project: setProject,
    startDate: setStartDate,
    limitDate: setLimitDate,
    assets: setAssets,
  }
  
  return [ formState, setFormState ];
}
