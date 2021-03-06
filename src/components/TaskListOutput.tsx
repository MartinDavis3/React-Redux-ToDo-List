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
        { taskList.length > 0 ? 
          taskList.map(individualTask => {
          return <TaskButton key={individualTask.id} taskId={individualTask.id} />})
        :
          <h3>Nothing in your to-do list - you can relax!</h3>
        }
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