import * as React from 'react';
import {Fragment} from 'react';
import TaskInput from './components/TaskInput';
import TaskListOutput from './components/TaskListOutput';
import { connect } from 'react-redux';
import { RootState } from './store';
import { addTaskToList, removeTaskFromList } from './store/todo/actions';
import { Grid } from 'semantic-ui-react';

export interface IAppProps {
}

export class App extends React.Component<IAppProps> {

  public render() {
    return (
      <Fragment>
        <Grid centered>
          <Grid.Row>
            <h1>To-Do Application</h1>
          </Grid.Row>
          <Grid.Row>
            <h3>Enter a new task in the input box and press add to put it in the list.</h3>
          </Grid.Row>
          <Grid.Row>
            <h3>To remove a task from the list, simply click on it.</h3>
          </Grid.Row>
          <Grid.Row>
            <TaskInput/>
          </Grid.Row>
          <Grid.Row>
            <h2>To-Do List</h2>
          </Grid.Row>
            <TaskListOutput/>  
        </Grid>
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
