export type TaskFormStateType = {
  task?: string,
  place?: string,
  description?: string,
  category?: string[],
  team?: string[],
  status?: string[],
  project?: string[],
  startDate?: string,
  limitDate?: string,
}

export type TaskFormSetStateType = {
  task: React.Dispatch<string>,
  place: React.Dispatch<string>,
  description: React.Dispatch<string>,
  category: React.Dispatch<string[]>,
  team: React.Dispatch<string[]>,
  status: React.Dispatch<string[]>,
  project: React.Dispatch<string[]>,
  startDate: React.Dispatch<string>,
  limitDate: React.Dispatch<string>
}

export type TaskFormStateErrorType = {
  startDate?: boolean,
  limitDate?: boolean,
}

export type TaskFormSetStateErrorType = {
  startDate: React.Dispatch<boolean>,
  limitDate: React.Dispatch<boolean>
}