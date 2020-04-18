import * as React from 'react';
import { Component, Fragment } from 'react';
import { Input, Button } from 'semantic-ui-react';

export interface ITaskInputProps {
  onClickSubmitButton: (newTaskDescriptionInput: string) => void;
}
interface ITaskInputState {
  newTaskDescription: string;
}

export default class TaskInput extends Component<ITaskInputProps, ITaskInputState> {
  constructor(props: ITaskInputProps) {
    super(props);
    this.state = {
      newTaskDescription: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState( { newTaskDescription: event.currentTarget.value} )
  }

  public render() {
    const { onClickSubmitButton } = this.props;
    const { newTaskDescription } = this.state;
    return (
      <Fragment>
        <h2>Task</h2>
        <Input placeholder = 'Task...' onChange={this.onUserFieldChange} />
        <Button content = 'Submit' onClick={() => onClickSubmitButton(newTaskDescription)} />              
      </Fragment>
    );
  }
}
