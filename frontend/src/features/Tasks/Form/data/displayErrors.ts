import { ErrorFormType } from "./useErrorForm"; 
import { isDateStringValid } from "./dateFunctions";
import { checkRequiredInput } from "./useErrorForm";
import { TaskFormStateType } from "../_types";

const inputName = {
  task: 'tarefa',
  place: 'localização',
  description: 'descrição',
  team: 'equipe',
  category: 'categoria',
  priority: 'prioridade',
  status: 'status',
  project: 'projeto',
  startDate: 'inicio da execução',
  limitDate: 'prazo final',
  assets: 'ativos',
}

const errorDescription = {
  requiredInput: 'deve ser preenchido',
  notValidDate: 'data inválida',
}

export const displayErrors = (taskForm: any) => {
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
  
  const result = [];
  
  
  
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