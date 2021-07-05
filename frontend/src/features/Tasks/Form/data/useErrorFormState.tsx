import { useState } from 'react';
// Types
import { TaskFormStateErrorType, TaskFormSetStateErrorType } from '../_types';

/*************************\
 * PropTypes
\*************************/

type Props = {};

/*************************\
 * Custom Hook
\*************************/

export const useErrorFormState = (): [TaskFormStateErrorType, TaskFormSetStateErrorType] => {

  // Dates
  const [ startDate, setStartDate ] = useState<boolean>(false);
  const [ limitDate, setLimitDate ] = useState<boolean>(false);
  
  
  const formStateError: TaskFormStateErrorType = {
    startDate,
    limitDate,
  }
  
  const setFormStateError: TaskFormSetStateErrorType = {
    startDate: setStartDate,
    limitDate: setLimitDate,
  }
  
  return [ formStateError, setFormStateError ];
}
