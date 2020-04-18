import * as React from 'react';
import {Fragment} from 'react';
import TaskInput from './components/TaskInput';
import TaskListOutput from './components/TaskListOutput';

import { connect } from 'react-redux';
import { RootState } from './store';
import { addTaskToList, removeTaskFromList } from './store/todo/actions';

export interface IAppProps {
}

export class App extends React.Component<IAppProps> {

  public render() {
    return (
      <Fragment>
        <h1>To-Do List</h1>
        <TaskInput/>
        <h2>Task List</h2>
        <TaskListOutput/>  
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
)(App);
