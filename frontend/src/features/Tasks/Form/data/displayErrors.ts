import { isDateStringValid } from "./dateFunctions";
import { checkRequiredInput } from "./useErrorForm";
import { TaskFormStateType } from "../_types";

enum ErrorID { RequiredInput, NotValidDate };
type ErrorCheck = {[key in ErrorID]: { function: Function, description: string }};

const checkDateError = (dateString: string | undefined) => {
  return !isDateStringValid;
} ;

const errorCheck: ErrorCheck = {
  [ErrorID.RequiredInput]: { function: checkRequiredInput, description: 'campo obrigatório não preenchido'},
  [ErrorID.NotValidDate]: { function: checkDateError, description: 'data inválida'},
};

const getError = (taskFormValue: any, inputName: string, errorCheckId: ErrorID) => {
  return errorCheck[errorCheckId].function(taskFormValue) && { inputName, description: errorCheck[errorCheckId].description };
};

export const displayErrors = (taskForm: TaskFormStateType) => {
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
    task: getError(task, 'tarefa', ErrorID.RequiredInput),
    place: getError(place, 'localização', ErrorID.RequiredInput),
    description: getError(description, 'descrição', ErrorID.RequiredInput),
    team: getError(team, 'equipe', ErrorID.RequiredInput),
    category: getError(category, 'categoria', ErrorID.RequiredInput),
    priority: getError(priority, 'prioridade', ErrorID.RequiredInput),
    status: getError(status, 'status', ErrorID.RequiredInput),
    project: null,
    startDate: getError(startDate, 'início da execução', ErrorID.NotValidDate),
    limitDate: getError(limitDate, 'prazo final', ErrorID.NotValidDate),
    assets: getError(assets, 'ativos', ErrorID.RequiredInput),
  }
  
  return errors;
}