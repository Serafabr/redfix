import { useState } from 'react';
// Types
import { IdType } from '../../../../components/SelectBox/_types';
import { TaskFormStateType, TaskFormSetStateType } from '../_types';

/*************************\
 * PropTypes
\*************************/

type Signature = (defaultStates?: TaskFormStateType) => 
[
  TaskFormStateType, 
  TaskFormSetStateType, 
  () => void
];

/*************************\
 * DefaultStates
\*************************/

const InitialState: TaskFormStateType = {
  task: '',
  place: '',
  description: '',
  team: [],
  category: [],
  priority: [],
  status: [],
  project: [],
  startDate: '',
  limitDate: '',
  assets: []
}

/*************************\
 * Custom Hook
\*************************/

export const useFormState: Signature = (defaultStates = InitialState) => {
  
  // Text input
  const [ task, setTask ] = useState<string>(defaultStates.task);
  const [ place, setPlace ] = useState<string>(defaultStates.place);
  const [ description, setDescription ] = useState<string>(defaultStates.description);
  
  // Dropdown
  const [ team, setTeam ] = useState<IdType[]>(defaultStates.team);
  const [ category, setCategory ] = useState<IdType[]>(defaultStates.category);
  const [ priority, setPriority ] = useState<IdType[]>(defaultStates.priority);
  const [ status, setStatus ] = useState<IdType[]>(defaultStates.status);
  const [ project, setProject ] = useState<IdType[]>(defaultStates.project);
  
  // Dates
  const [ startDate, setStartDate ] = useState<string>(defaultStates.startDate);
  const [ limitDate, setLimitDate ] = useState<string>(defaultStates.limitDate);
  
  // Assets
  const [ assets, setAssets ] = useState<Array<IdType>>(defaultStates.assets); 
  
  
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
  
  const cleanState = () => {
    setTask(defaultStates.task);
    setPlace(defaultStates.place);
    setDescription(defaultStates.description);
    setTeam(defaultStates.team);
    setPriority(defaultStates.priority);
    setCategory(defaultStates.category);
    setStatus(defaultStates.status);
    setProject(defaultStates.project);
    setStartDate(defaultStates.startDate);
    setLimitDate(defaultStates.limitDate);
    setAssets(defaultStates.assets);
  }
  
  return [ formState, setFormState, cleanState ];
}
