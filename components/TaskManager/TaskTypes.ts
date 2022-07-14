export type TasksType = {
  title: string
  id: string
}

export interface TasksContextType {
  tasks?: TasksType[]
  editItem?: TasksType[]
  item?: TasksType
  addTask?: (title: string) => void
  removeTask?: (id: string) => void
  clearTasks?: () => void
  findItem?: (id: string) => void
  editTask?: (title: string, id: string) => void
}
