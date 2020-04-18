import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import { Task } from '../store/todo/types';

export interface ITaskButtonProps {
  id: number;
}

export default class TaskButton extends Component<ITaskButtonProps> {

  public onButtonClick = (id: number):number => {
    return id
  }

  public render() {
    const { id } = this.props
    return (
      <Fragment>
          <Button key={id} id={task.id} content={task.taskDescription} onClick={this.onButtonClick(id)} />        
      </Fragment>
    );
  }
}
