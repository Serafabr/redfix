import { IdType } from "../../../components/SelectBox/_types";

/*************************\
 * TaskForm types (inputs)
\*************************/

export type TaskFormStateType = {
  task: string,
  place: string,
  description: string,
  team: IdType[],
  category: IdType[],
  priority: IdType[],
  status: IdType[],
  project: IdType[],
  startDate: string,
  limitDate: string,
  assets: IdType[],
}

export type TaskFormSetStateType = {
  task: React.Dispatch<string>,
  place: React.Dispatch<string>,
  description: React.Dispatch<string>,
  team: React.Dispatch<IdType[]>,
  category: React.Dispatch<IdType[]>,
  priority: React.Dispatch<IdType[]>,
  status: React.Dispatch<IdType[]>,
  project: React.Dispatch<IdType[]>,
  startDate: React.Dispatch<string>,
  limitDate: React.Dispatch<string>,
  assets: React.Dispatch<IdType[]>,
}

export type TaskFormStateErrorType = {
  startDate?: boolean,
  limitDate?: boolean,
}

export type TaskFormSetStateErrorType = {
  startDate: React.Dispatch<boolean>,
  limitDate: React.Dispatch<boolean>
}

/*************************\
 * TaskForm default values
\*************************/

export const taskFormStateDefault: TaskFormStateType = {
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
  assets: [],
}

export const taskFormSetStateDefault: TaskFormSetStateType = {
  task: () => {},
  place: () => {},
  description: () => {},
  team: () => {},
  category: () => {},
  priority: () => {},
  status: () => {},
  project: () => {},
  startDate: () => {},
  limitDate: () => {},
  assets: () => {},
}

export const taskFormStateErrorDefault: TaskFormStateErrorType = {
  startDate: false,
  limitDate: false,
}

export const taskFormSetStateErrorDefault: TaskFormSetStateErrorType = {
  startDate: () => {},
  limitDate: () => {},
}