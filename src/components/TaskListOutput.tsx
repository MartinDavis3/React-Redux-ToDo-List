import * as React from 'react';
import { Component, Fragment } from 'react';
import { Task } from '../store/todo/types';
import TaskButton from './TaskButton';

export interface ITaskListOutputProps {
  taskList: Task[];
}

export default class TaskListOutput extends Component<ITaskListOutputProps> {

  public render() {
    const { taskList } = this.props
    return (
      <Fragment>
        {taskList.map(task => (
          <TaskButton id={task.id} />
        ))};        
      </Fragment>
    );
  }
}
