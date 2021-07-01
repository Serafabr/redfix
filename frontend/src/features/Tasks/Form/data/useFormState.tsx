import { useState } from 'react';
// Types
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
  const [ category, setCategory ] = useState<string[]>([]);
  const [ team, setTeam ] = useState<string[]>([]);
  const [ status, setStatus ] = useState<string[]>([]);
  const [ project, setProject ] = useState<string[]>([]);
  
  // Dates
  const [ startDate, setStartDate ] = useState<string>();
  const [ limitDate, setLimitDate ] = useState<string>();
  
  
  const formState: TaskFormStateType = {
    task,
    place,
    description,
    category,
    team,
    status,
    project,
    startDate,
    limitDate,
  }
  
  const setFormState: TaskFormSetStateType = {
    task: setTask,
    place: setPlace,
    description: setDescription,
    category: setCategory,
    team: setTeam,
    status: setStatus,
    project: setProject,
    startDate: setStartDate,
    limitDate: setLimitDate,
  }
  
  return [ formState, setFormState ];
}
