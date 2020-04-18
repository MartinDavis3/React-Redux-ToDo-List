import { ToDoActionType, ADD_TASK_TO_LIST, REMOVE_TASK_FROM_LIST, Task } from './types';

export function addTaskToList( taskDescription: string ): ToDoActionType {
  return {
    type: ADD_TASK_TO_LIST,
    payload: taskDescription
  }
}

export function removeTaskFromList( id: number): ToDoActionType {
  return {
    type: REMOVE_TASK_FROM_LIST,
    payload: id
  }
}
