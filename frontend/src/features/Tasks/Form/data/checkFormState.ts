import { TaskFormStateType } from "../_types"
import { isDateStringValid } from "./dateFunctions";

const checkRequiredInput = (input?: string | string[]) => {
  if (input === undefined || input.length === 0) {
    return true;
  }
  return false;
}

export const checkFormState = (formState: TaskFormStateType) => {
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
  
  const errorTaskForm = {
    task: checkRequiredInput(task),
    place: checkRequiredInput(place),
    description: checkRequiredInput(description),
    team: checkRequiredInput(team),
    category: checkRequiredInput(category),
    priority: checkRequiredInput(priority),
    status: checkRequiredInput(status),
    project: false,
    startDate: isDateStringValid(startDate),
    limitDate: isDateStringValid(startDate),
    assets: checkRequiredInput(assets)
  };
  
  return errorTaskForm;
}
