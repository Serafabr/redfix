import { useState } from "react";
// Functions
import { isDateStringValid } from "./dateFunctions";
// Types
import { TaskFormStateType } from "../_types"

/*************************\
 * Types
\*************************/

export type ErrorFormType = {
  task: boolean,
  place: boolean,
  description: boolean,
  team: boolean,
  category: boolean,
  priority: boolean,
  status: boolean,
  project: boolean,
  startDate: boolean,
  limitDate: boolean,
  assets: boolean,
}

export type SetErrorFormType = React.Dispatch<ErrorFormType>;

export type CheckAllErrorsType = (formState: TaskFormStateType) => void;

export type UseFormError = () => [ErrorFormType, SetErrorFormType, CheckAllErrorsType];

/*************************\
 * Helper Function
\*************************/

const checkRequiredInput = (input?: string | string[]) => {
  if (input === undefined || input.length === 0) {
    return true;
  }
  return false;
}

/*************************\
 * userErrorForm custom hook
\*************************/

export const useErrorForm: UseFormError = () => {
  
  // At fisrt, there's no error.
  const defaultErrorForm = {
    task: false,
    place: false,
    description: false,
    team: false,
    category: false,
    priority: false,
    status: false,
    project: false,
    startDate: false,
    limitDate: false,
    assets: false,
  };
  
  // State for errors
  const [ errorForm, setErrorForm ] = useState(defaultErrorForm);
  
  // Check errors on all inputs
  const checkAllErrors = (formState: TaskFormStateType) => {
    // Get all values from form state
    const {
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
    } = formState;
    
    const newErrorForm = {
      task: checkRequiredInput(task),
      place: checkRequiredInput(place),
      description: checkRequiredInput(description),
      team: checkRequiredInput(team),
      category: checkRequiredInput(category),
      priority: checkRequiredInput(priority),
      status: checkRequiredInput(status),
      project: false,
      startDate: isDateStringValid(startDate),
      limitDate: isDateStringValid(limitDate),
      assets: checkRequiredInput(assets),
    };
    
    setErrorForm(newErrorForm);
  }
  
  return [ errorForm, setErrorForm, checkAllErrors ];
}