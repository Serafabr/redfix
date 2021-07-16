import { isDateStringValid } from "./dateFunctions";
import { checkRequiredInput } from "./useErrorForm";
import { TaskFormStateType } from "../_types";

enum ErrorID { RequiredInput, NotValidDate };
type ErrorCheck = {[key in ErrorID]: { function: Function, description: string }};

const checkDateError = (dateString: string | undefined) => {
  return !isDateStringValid(dateString);
} ;

const errorCheck: ErrorCheck = {
  [ErrorID.RequiredInput]: { function: checkRequiredInput, description: 'campo de preenchimento obrigatório'},
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
    task: getError(task, 'Tarefa', ErrorID.RequiredInput),
    place: getError(place, 'Localização', ErrorID.RequiredInput),
    description: getError(description, 'Descrição', ErrorID.RequiredInput),
    team: getError(team, 'Equipe', ErrorID.RequiredInput),
    category: getError(category, 'Categoria', ErrorID.RequiredInput),
    priority: getError(priority, 'Prioridade', ErrorID.RequiredInput),
    status: getError(status, 'Status', ErrorID.RequiredInput),
    project: null,
    startDate: getError(startDate, 'Início da execução', ErrorID.NotValidDate),
    limitDate: getError(limitDate, 'Prazo final', ErrorID.NotValidDate),
    assets: getError(assets, 'Ativos', ErrorID.RequiredInput),
  }
  
  return errors;
}