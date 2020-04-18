import * as React from 'react';
import {Fragment} from 'react';
import TaskInput from './components/TaskInput';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {

  // Submit from TaskInput Form.
  public onClickSubmitButton = (newTaskDescriptionInput: string) => {
    if ( newTaskDescriptionInput !== '' ) {

    }
  }

  public render() {
    return (
      <Fragment>
        <h1>To-Do List</h1>
        <TaskInput onClickSubmitButton={this.onClickSubmitButton} />  
      </Fragment>
    );
  }
}
