import { StatusOptionsType } from './_types';

export const taskCategoriesText = {
  [StatusOptionsType.Waiting]: {name: 'Fila de espera'},
  [StatusOptionsType.Pending]: {name: 'Pendente'},
  [StatusOptionsType.Executing]: {name: 'Em execução'},
  [StatusOptionsType.Suspended]: {name: 'Suspensa'},
  [StatusOptionsType.Analysing]: {name: 'Em análise'},
  [StatusOptionsType.Canceled]: {name: 'Cancelada'},
  [StatusOptionsType.Executed]: {name: 'Executada'},
  [StatusOptionsType.Done]: {name: 'Encerrada'},
}