import { ErrorFormType } from "./useErrorForm"; 
import { isDateStringValid } from "./dateFunctions";
import { checkRequiredInput } from "./useErrorForm";
import { TaskFormStateType } from "../_types";

const checkErrors = (taskForm: any) => {
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
  } = taskForm;
  
  const errors = {
    task: checkRequiredInput(task),
    place: checkRequiredInput(place),
    description: checkRequiredInput(description),
    team: checkRequiredInput(team),
    category: checkRequiredInput(category),
    priority: checkRequiredInput(priority),
    status: checkRequiredInput(status),
    project: false,
    startDate: !isDateStringValid(startDate),
    limitDate: !isDateStringValid(limitDate),
    assets: checkRequiredInput(assets),
  }
  
  return errors;
}

export const hasError = (taskForm: TaskFormStateType) => {
  const errorForm: {[id: string]: boolean} = checkErrors(taskForm);
  console.log('checking for errors')
  console.log(errorForm);
  
  let error = false;
  Object.keys(errorForm).forEach((inputId: string) => {
    if (errorForm[inputId] === true) {
      error = true;
    }
  })
  
  return error;
}