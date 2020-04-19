import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
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

  onClickRemoveTask() {
    const { taskId } = this.props;
    this.props.removeTaskFromList(taskId);
  }

  public render() {
    const { taskList, taskId } = this.props
    const currentTask = taskList.filter(individualTask => (individualTask.id === taskId))[0];
    return (
      <Fragment>
          <Grid.Row>
            <Button key={taskId} content={currentTask.taskDescription} onClick={() => this.onClickRemoveTask()} />        
          </Grid.Row>
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