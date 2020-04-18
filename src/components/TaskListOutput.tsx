import * as React from 'react';
import { Component, Fragment } from 'react';
import { Task } from '../store/todo/types';
import TaskButton from './TaskButton';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { addTaskToList, removeTaskFromList } from '../store/todo/actions';

export interface ITaskListOutputProps {
  taskList: Task[];
}

export class TaskListOutput extends Component<ITaskListOutputProps> {

  public render() {
    const { taskList } = this.props
    return (
      <Fragment>
        {taskList.map(individualTask => (
          <TaskButton key={individualTask.id} taskId={individualTask.id} />
        ))}        
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    taskList: state.todo.taskList,
  };
}

export default connect(
  mapStateToProps,
  { addTaskToList, removeTaskFromList }
)(TaskListOutput);