import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalSwitch from '../GlobalSwitch/index';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={GlobalSwitch} />
      </Switch>
    );
  }
}

export default withRouter(App);
