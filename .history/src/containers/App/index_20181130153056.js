import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalSwitch from '../GlobalSwitch/index';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';


class App extends React.Component {
  render() {
    return (
      <ConnectedRouter>
        <Switch>
          <Route component={GlobalSwitch} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default withRouter(App);
