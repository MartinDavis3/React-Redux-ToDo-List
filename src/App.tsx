import * as React from 'react';
import {Fragment} from 'react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <h1>Test this is working</h1>
      </Fragment>
    );
  }
}
