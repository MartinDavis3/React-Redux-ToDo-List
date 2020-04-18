export interface Task {
  id: number,
  taskDescription: string
}

export interface TaskListState {
  taskList: Task[]
  nextFreeId: number
}

export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST';
export const REMOVE_TASK_FROM_LIST = 'REMOVE_TASK_FROM_LIST';

interface AddTaskToList {
  type: typeof ADD_TASK_TO_LIST
  payload: string
}

interface RemoveTaskFromList {
  type: typeof REMOVE_TASK_FROM_LIST
  payload: number
}

export type ToDoActionType = AddTaskToList | RemoveTaskFromList;
