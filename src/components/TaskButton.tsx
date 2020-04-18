import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import { Task } from '../store/todo/types';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { addTaskToList, removeTaskFromList } from '../store/todo/actions';

export interface ITaskButtonProps {
  taskList: Task[];
  removeTaskFromList: typeof removeTaskFromList;
  taskId: number;
}

export class TaskButton extends Component<ITaskButtonProps> {

  public onButtonClick = (id: number):number => {
    return id
  }

  public render() {
    const { taskList } = this.props
    const currentTask = taskList.filter(individualTask => (individualTask.id === taskId))[0];
    return (
      <Fragment>
          <Button key={id} id={task.id} content={task.taskDescription} onClick={this.onButtonClick(id)} />        
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
)(TaskButton);