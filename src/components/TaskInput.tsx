import * as React from 'react';
import { Component, Fragment } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { addTaskToList, removeTaskFromList } from '../store/todo/actions';

export interface ITaskInputProps {
  addTaskToList: typeof addTaskToList;
}
interface ITaskInputState {
  newTaskDescription: string;
}

export class TaskInput extends Component<ITaskInputProps, ITaskInputState> {

  constructor(props: ITaskInputProps) {
    super(props);
    this.state = {
      newTaskDescription: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState( { newTaskDescription: event.currentTarget.value} )
  }

  onClickAddTask(newTaskDescription: string) {
    if (newTaskDescription !== '' ) {
    this.props.addTaskToList(newTaskDescription);
    }
  }

  public render() {
    const { newTaskDescription } = this.state;
    return (
      <Fragment>
        <h2>New task:</h2><Input onChange={this.onUserFieldChange} />
        <Button content = 'Add' onClick={() => this.onClickAddTask(newTaskDescription)} />              
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
)(TaskInput);