export type TaskFormStateType = {
  task?: string,
  place?: string,
  description?: string,
  category?: string[],
  team?: string[],
  status?: string[],
  project?: string[],
  startDate?: number,
  limitDate?: number,
}

export type TaskFormSetStateType = {
  setTask: React.Dispatch<string>,
  setPlace: React.Dispatch<string>,
  setDescription: React.Dispatch<string>,
  setCategory: React.Dispatch<string[]>,
  setTeam: React.Dispatch<string[]>,
  setStatus: React.Dispatch<string[]>,
  setProject: React.Dispatch<string[]>,
  setStartDate: React.Dispatch<number>,
  setLimitDate: React.Dispatch<number>
}