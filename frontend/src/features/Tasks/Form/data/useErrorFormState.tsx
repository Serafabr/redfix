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

export const useFormState = (): [TaskFormStateErrorType, TaskFormSetStateErrorType] => {

  // Dates
  const [ startDate, setStartDate ] = useState<boolean>();
  const [ limitDate, setLimitDate ] = useState<boolean>();
  
  
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
